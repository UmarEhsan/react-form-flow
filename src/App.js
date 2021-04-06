import React from 'react';
import { WidgetsProvider } from './WidgetsContext';
import  ReactFlowChart from './ReactFlow';
import "antd/dist/antd.css";
import './dnd.css';



const App = () => {
  
 


  return (
    <WidgetsProvider>
      <ReactFlowChart />
    </WidgetsProvider>
   
  );
};

export default App;