import { useState, useContext, useEffect  } from 'react';
import { WidgetsContext } from './WidgetsContext';
import { Modal, Button, Table, Row, Col, Spin } from 'antd';
import { TextField } from "./Inputs";

import { useForm, Controller } from "react-hook-form";



const DatasourcePreview =  (props) => {
    const [globalState, dispatch] = useContext(WidgetsContext); 
    const { currentNode } = globalState;
    const [visible, setVisible] = useState(false);
    const [columns, setColumns] = useState([]);
    const [dataSource, setDataSource] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
   
   
    
    const { handleSubmit, reset, control } = useForm();
    const getApiUrl = (slug_input, url) => slug_input ? `${url}/${slug_input}` : url; 
    const getDataSource = () => {
        const {slug_input, url, pickFields} = globalState[currentNode];
        const apiUrl = getApiUrl(slug_input, url);
        setIsLoading(true);
        getData(apiUrl, pickFields);
      }

    const onSubmit = data => { 
      const {url, pickFields} = globalState[currentNode];
      const { slug_input } = data;
      const apiUrl = getApiUrl(slug_input, url);
      setIsLoading(true);
      getData(apiUrl, pickFields);
      // reset();
  };

  const getData = (apiUrl, pickFields) => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(result => {
           const tableColumns = pickFields.map((elem) => ({title:elem, dataIndex: elem, key: elem}));
           setColumns(tableColumns);
           setDataSource([result]);
           dispatch({ type: "ADD_DATA", payload: {currentNode: currentNode, data: [result]} });
           setVisible(true)
           setIsLoading(false);
        })
        .catch(e => {
            console.log(e);
            setVisible(false)
        });
  }
    

  const getParentData = () => {
    const {currentNode} = globalState;
    if(currentNode){
      const {parent}  = globalState[currentNode];
      console.log(globalState[parent]);
    }
    
  }   

  const isParentDataExist = () => {
    const {currentNode} = globalState;
    
    if(currentNode){
      const {parent}  = globalState[currentNode];
      return parent && globalState[parent]; 
    }
    return false;
    
  }
   
 
    
   
  return (
    <div>
      <Row>
        <Col>
        {isParentDataExist() && <Button type="primary" onClick={getParentData} style={{margin: "10px"}}>
          Get Parent Data
        </Button>}
        
        </Col>
      </Row>
     
       <Button type="primary" onClick={getDataSource} style={{margin: '10px', width: '29%'}}>
        Preview
      </Button>
      <Modal
        title="Data Source"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={600}
        
      >
         <div style={{padding: "10px"}}>
              
            <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col span={20}>
              <Controller
               as={<TextField placeholder='Enter id.....' />}
               control={control}
               rules={{ required: true }}
               name="slug_input"
               style={{padding: '10px', margin: '10px'}}
               />
              </Col>
              <Col span={4}>
                 <input type="submit"  style={{
                   padding: '10px', 
                   margin: '0px 5px', 
                   color: '#fff',
                   background: '#1890ff',
                   borderColor: '#1890ff',
                   border: '1px solid #1890ff'}}/>
              </Col>
            </Row>
            
             </form>
                 
            </div>
         { !isLoading && <Table dataSource={dataSource} columns={columns} loading={isLoading}/> }
         {/* <Spin size="large" /> */}
         {/* {isLoading.toString()} */}
      </Modal>
    </div>
    
  );
};

export default DatasourcePreview;

