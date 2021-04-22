import React, { useState, useRef, useEffect, useContext } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  Handle
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
    setElements((els) => removeElements(elementsToRemove, els));
  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (event) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    // setWidgetType(() => type);
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const newNode = {
      id: getId(),
      type: 'default',
      test: 'asd',
      position,
      data: { label: `${type} Widget`, widgetType: type},
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
    debugger;
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
            elements={elements}
          
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onElementClick={onElementClick}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onEdgeUpdate={onEdgeUpdate}
            deleteKeyCode={46}
              nodeTypes={nodeTypes}
              connectionLineType="smoothstep"
              connectionLineStyle={{ strokeWidth: 4 }}
            style={{position: 'absolute', width:'80%'}}
            
            
          >
            <Controls />
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
          {/* {widgetType} */}
        </Drawer>
     
    </div>
   
   
  );
};

export default ReactFlowChart;