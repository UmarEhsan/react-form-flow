import React, { useState, useRef, useEffect, useContext } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  Handle,
  Background
} from 'react-flow-renderer';
import { WidgetsContext } from './WidgetsContext';



import Sidebar from './Sidebar';
import FormWidget from './FormWidget';
import DataSourceWidget from './DataSourceWidget';
import EmailWidget from './EmailWidget';

import { Drawer } from "antd";
import './dnd.css';



let id = 0;
const getId = () => `dndnode_${id++}`;
// let parentNodes = ;

const customNodeStyles = {
  background: '#9CA8B3',
  color: '#FFF',
  padding: 10,
};

const CustomNodeComponent = ({ data }) => {
  return (
    <div style={customNodeStyles}>
      <Handle type="target" position="left" style={{ borderRadius: 0 }} />
      <div>{data.text}</div>
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: '30%', borderRadius: 0 }}
      />
      <Handle
        type="source"
        position="right"
        id="b"
        style={{ top: '70%', borderRadius: 0 }}
      />
    </div>
  );
};


const ReactFlowChart = () => {
 
  const [globalState, dispatch] = useContext(WidgetsContext);
  const [newNode, setNewNode] = useState({});
  const [widgetType, setWidgetType] = useState('Form');
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState([]);
  const onConnect = (params) => {

    // console.log(globalState);

    // let parentNodes = JSON.parse(localStorage.getItem('parentNodes'));
    // let childNodes = JSON.parse(localStorage.getItem('childNodes'));
    // let parentNode = {...parentNodes,[params.source]: {...parentNodes[params.source], [params.target]:'' }};
    // localStorage.setItem('parentNodes',JSON.stringify(parentNode));
    // let childNode = {...childNodes,[params.target]: {...parentNodes[params.target], parent: params.source }};
    // localStorage.setItem('childNodes',JSON.stringify(childNode));
    setElements((els) => addEdge(params, els));
    dispatch({
      type: "CREATE_CHILDREN",
      payload: {node_id: params.source, children:params.target},
      
    });
    dispatch({
      type: "CREATE_PARENT",
      payload: {node_id: params.target, parent:params.source},
      
    });
  };

  const nodeTypes = {
    special: CustomNodeComponent,
  };
  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === newNode.id) {
         el.data = {
            ...el.data,
            label: newNode.data.label,
          };
        }
      return el;
      })
    );
  }, [newNode, setElements]);
  const onElementsRemove = (elementsToRemove) =>
  {
    console.log(elementsToRemove)
    setElements((els) => removeElements(elementsToRemove, els));
    dispatch({
      type: "REMOVE_OBJECT",
      payload: elementsToRemove,
      
    });
  }
    
  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const deleteNode = (node, element) => {
    // console.log(id);
    setElements((els) => removeElements([element], els));
   
  }

  const onDrop = (event) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    // setWidgetType(() => type);
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const id = getId();
    const newNode = {
      id: id,
      type: 'default',
      test: 'asd',
      position,
      data: { label: `${type} Widget`, widgetType: type},
      // data: { label: <p>{type} Widget <span style={{position: 'relative',left: '35px',cursor: 'cell', bottom: '30px'}} 
      // onClick={(evt) => deleteNode(evt, newNode)}>Delete</span></p>, imgUrl: 'https://picsum.photos/50', widgetText: `${type} Widget`,  widgetType: type},
      style: {
        background: '#D6D5E6',
        color: '#333',
        border: '1px solid #222138',
        width: 180,
        padding: 10
      },
      formType: type
    };
    setElements((es) => es.concat(newNode));
    setNewNode(() => newNode );
    setWidgetType(() => type);
    dispatch({
        type: "CREATE_OBJECT",
        payload: newNode.id,
        
      });
  };

  const onElementClick = (event, element) => {
    
    if(element?.data){
      // const widgetType = element.data.label.split(" ")[0];
      
      event.preventDefault();
      setWidgetType(() =>  element.data.widgetType);
      setNewNode(() => element);
      setVisibleDrawer((previousVisible) => !previousVisible);
      
      // console.log();
      dispatch({
        type: "CREATE_OBJECT",
        payload: element.id,
        
      });
    }
}

  const onClose = () => {
    setVisibleDrawer(previousVisible => !previousVisible);
  };
  

  const updateNode = evt => {
    // debugger
    const { target } = evt;
    const { value } = target;
    const updatedNode = {...newNode, data: {label: value}};
    setNewNode(() => updatedNode);
  }

  const widgets = {
    'form': <FormWidget 
    newNode={newNode}
    onHandleNode={updateNode}
    onHandleDrawer={() => setVisibleDrawer(previousVisible => !previousVisible)}
  />,
  'dataSource': <DataSourceWidget
    newNode={newNode}
    onHandleNode={updateNode}
    onHandleDrawer={() => setVisibleDrawer(previousVisible => !previousVisible)}/>,
   'email': <EmailWidget /> 
  }

  const onEdgeUpdate = (oldEdge, newConnection) => {
    console.log(oldEdge, newConnection);
    
    // setElements((els) => updateEdge(oldEdge, newConnection, els));
  }
  


  return (
    
    <div className="dndflow">
      <Sidebar />
      
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
         <ReactFlow
    style={{position: 'absolute', width:'80%'}}
      elements={elements}
      // onElementClick={true ? onElementClick : undefined}
      //onElementClick={onElementClick}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      // onPaneClick={() => console.log('Panel Click')}
      // onPaneScroll={() => console.log('Panel scroll')}
      // onPaneContextMenu={() => console.log('Panel Context Menu')}
      // onNodeDragStart={() => console.log('Drag Start')}
      // onNodeDrag={() => console.log('Node Drag')}
      // onNodeDragStop={() => console.log('Node Drag Stop')}
      onNodeDoubleClick={onElementClick}
      // onSelectionDragStart={() => console.log('Selection Drag Start')}
      // onSelectionDrag={() => console.log('Selection Drag')}
      // onSelectionDragStop={() => console.log('Selection Drag Stop')}
      // onSelectionContextMenu={() => console.log('On Selection COntext menu')}
      // onSelectionChange={() => console.log('On Selection Change')}
      // onMoveEnd={() => console.log('Move end')}
      onLoad={onLoad}
      onDrop={onDrop}
            onDragOver={onDragOver}
      // connectionLineStyle={connectionLineStyle}
      snapToGrid={true}
      // snapGrid={snapGrid}
      // onEdgeContextMenu={() => console.log('Edge Context Menu')}
      // onEdgeMouseEnter={() => console.log('Edge Mouse enter')}
      // onEdgeMouseMove={() => console.log('On Edge Mouse Move')}
      // onEdgeMouseLeave={() => console.log('On Edge Mouse leave')}

      
     
    >
      {/* <MiniMap nodeStrokeColor={nodeStrokeColor} nodeColor={nodeColor} nodeBorderRadius={2} /> */}
      <Controls />
      <Background color="#aaa" gap={20} size={1} />
    </ReactFlow>
        </div>
        
      </ReactFlowProvider>

      <Drawer
          title={`${widgetType} Widget`}
          placement='right'
          width={500}
          closable={false}
          onClose={onClose}
          visible={visibleDrawer}
          key={'right'}
        >
         
          {widgets[widgetType]}
          
        </Drawer>
     
    </div>
   
   
  );
};

export default ReactFlowChart;







// import React, { useState, MouseEvent, CSSProperties } from 'react';

// import ReactFlow, {
//   removeElements,
//   addEdge,
//   MiniMap,
//   Controls,
//   Background,
//   isNode,
//   Node,
//   Elements,
//   FlowElement,
//   OnLoadParams,
//   FlowTransform,
//   SnapGrid,
//   ArrowHeadType,
//   Connection,
//   Edge,
// } from 'react-flow-renderer';

// const onNodeDragStart = (node) => console.log('drag start', node);
// const onNodeDrag = (node) => console.log('drag', node);
// const onNodeDragStop = (node) => console.log('drag stop', node);
// const onNodeDoubleClick = (node) => console.log('node double click', node);
// const onPaneClick = (event ) => console.log('pane click', event);
// const onPaneScroll = (event) => console.log('pane scroll', event);
// const onPaneContextMenu = (event) => console.log('pane context menu', event);
// const onSelectionDrag = (nodes) => console.log('selection drag', nodes);
// const onSelectionDragStart = (nodes) => console.log('selection drag start', nodes);
// const onSelectionDragStop = (nodes) => console.log('selection drag stop', nodes);
// const onSelectionContextMenu = (event, nodes) => {
//   event.preventDefault();
//   console.log('selection context menu', nodes);
// };
// const onElementClick = (element) =>
//   console.log(`${isNode(element) ? 'node' : 'edge'} click:`, element);
// const onSelectionChange = (elements) => console.log('selection change', elements);
// const onLoad = (reactFlowInstance) => {
//   console.log('flow loaded:', reactFlowInstance);
//   reactFlowInstance.fitView();
// };

// const onMoveEnd = (transform) => console.log('zoom/move end', transform);
// const onEdgeContextMenu = (edge) => console.log('edge context menu', edge);
// const onEdgeMouseEnter = (edge) => console.log('edge mouse enter', edge);
// const onEdgeMouseMove = (edge) => console.log('edge mouse move', edge);
// const onEdgeMouseLeave = (edge) => console.log('edge mouse leave', edge);
// const onEdgeDoubleClick = (edge) => console.log('edge double click', edge);

// const initialElements = [
//   {
//     id: '1',
//     type: 'input',
//     data: {
//       label: (
//         <>
//           Welcome to <strong>React Flow!</strong>
//         </>
//       ),
//     },
//     position: { x: 250, y: 0 },
//   },
//   {
//     id: '2',
//     data: {
//       label: (
//         <>
//           This is a <strong>default node</strong>
//         </>
//       ),
//     },
//     position: { x: 100, y: 100 },
//   },
//   {
//     id: '3',
//     data: {
//       label: (
//         <>
//           This one has a <strong>custom style</strong>
//         </>
//       ),
//     },
//     position: { x: 400, y: 100 },
//     style: { background: '#D6D5E6', color: '#333', border: '1px solid #222138', width: 180 },
//   },
//   {
//     id: '4',
//     position: { x: 250, y: 200 },
//     data: {
//       label: (
//         <>
//           You can find the docs on{' '}
//           <a href="https://github.com/wbkd/react-flow" target="_blank" rel="noopener noreferrer">
//             Github
//           </a>
//         </>
//       ),
//     },
//   },
//   {
//     id: '5',
//     data: {
//       label: (
//         <>
//           Or check out the other <strong>examples</strong>
//         </>
//       ),
//     },
//     position: { x: 250, y: 325 },
//   },
//   {
//     id: '6',
//     type: 'output',
//     data: {
//       label: (
//         <>
//           An <strong>output node</strong>
//         </>
//       ),
//     },
//     position: { x: 100, y: 480 },
//   },
//   { id: '7', type: 'output', data: { label: 'Another output node' }, position: { x: 400, y: 450 } },
//   { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' },
//   { id: 'e1-3', source: '1', target: '3' },
//   { id: 'e3-4', source: '3', target: '4', animated: true, label: 'animated edge' },
//   { id: 'e4-5', source: '4', target: '5', arrowHeadType: ArrowHeadType.Arrow, label: 'edge with arrow head' },
//   { id: 'e5-6', source: '5', target: '6', type: 'smoothstep', label: 'smooth step edge' },
//   {
//     id: 'e5-7',
//     source: '5',
//     target: '7',
//     type: 'step',
//     style: { stroke: '#f6ab6c' },
//     label: 'a step edge',
//     animated: true,
//     labelStyle: { fill: '#f6ab6c', fontWeight: 700 },
//   },
// ];

// const connectionLineStyle: CSSProperties = { stroke: '#ddd' };
// const snapGrid: SnapGrid = [16, 16];

// const nodeStrokeColor = (n )=> {
//   if (n.style?.background) return n.style.background;
//   if (n.type === 'input') return '#0041d0';
//   if (n.type === 'output') return '#ff0072';
//   if (n.type === 'default') return '#1a192b';

//   return '#eee';
// };

// const nodeColor = (n) => {
//   if (n.style?.background) return n.style.background;

//   return '#fff';
// };

// const ReactFlowChart = () => {
//   const [elements, setElements] = useState(initialElements);
//   const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
//   const onConnect = (params) => setElements((els) => addEdge(params, els));

//   return (
//     <ReactFlow
//     style={{position: 'absolute', width:'80%'}}
//       elements={elements}
//       onElementClick={onElementClick}
//       onElementsRemove={onElementsRemove}
//       onConnect={onConnect}
//       // onPaneClick={onPaneClick}
//       // onPaneScroll={onPaneScroll}
//       // onPaneContextMenu={onPaneContextMenu}
//       // onNodeDragStart={onNodeDragStart}
//       // onNodeDrag={onNodeDrag}
//       // onNodeDragStop={onNodeDragStop}
//       // onNodeDoubleClick={onNodeDoubleClick}
//       // onSelectionDragStart={onSelectionDragStart}
//       // onSelectionDrag={onSelectionDrag}
//       // onSelectionDragStop={onSelectionDragStop}
//       // onSelectionContextMenu={onSelectionContextMenu}
//       // onSelectionChange={onSelectionChange}
//       // onMoveEnd={onMoveEnd}
//       // onLoad={onLoad}
//       // connectionLineStyle={connectionLineStyle}
//       // snapToGrid={true}
//       // snapGrid={snapGrid}
//       // onEdgeContextMenu={onEdgeContextMenu}
//       // onEdgeMouseEnter={onEdgeMouseEnter}
//       // onEdgeMouseMove={onEdgeMouseMove}
//       // onEdgeMouseLeave={onEdgeMouseLeave}
//       // onEdgeDoubleClick={onEdgeDoubleClick}
//     >
//       {/* <MiniMap nodeStrokeColor={nodeStrokeColor} nodeColor={nodeColor} nodeBorderRadius={2} /> */}
//       <Controls />
//       <Background color="#aaa" gap={20} size={1} />
//     </ReactFlow>
//   );
// };

// export default ReactFlowChart;
// // export default ReactFlowChart;