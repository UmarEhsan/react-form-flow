import React, { useState, useRef, useEffect, useContext } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
} from 'react-flow-renderer';
import { WidgetsContext } from './WidgetsContext';



import Sidebar from './Sidebar';
import FormWidget from './FormWidget';
import DataSourceWidget from './DataSourceWidget';

import { Drawer } from "antd";
import './dnd.css';



let id = 0;
const getId = () => `dndnode_${id++}`;

const ReactFlowChart = () => {
  const [globalState, dispatch] = useContext(WidgetsContext);
  const [newNode, setNewNode] = useState({});
  const [widgetType, setWidgetType] = useState('Form');
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState([]);
  const onConnect = (params) => setElements((els) => addEdge(params, els));
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
  
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const newNode = {
      id: getId(),
      type: 'default',
      test: 'asd',
      position,
      data: { label: `${type} Widget` },
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
  };

  const onElementClick = (event, element) => {
    if(element?.data){
      const widgetType = element.data.label.split(" ")[0];
      event.preventDefault();
      setNewNode(() => element);
      setVisibleDrawer(previousVisible => !previousVisible);
      setWidgetType(() => widgetType);
      console.log();
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
    onHandleDrawer={() => setVisibleDrawer(previousVisible => !previousVisible)}/>
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
        
        </Drawer>
     
    </div>
   
   
  );
};

export default ReactFlowChart;