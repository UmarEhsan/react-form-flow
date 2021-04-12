import React, {  useState, useContext, memo } from 'react';
import { useForm, Controller } from "react-hook-form";
import { Button, Table, Input, Row, Col, Spin } from "antd";
import { WidgetsContext } from './WidgetsContext';
import { inputField, CheckboxField } from "./Inputs";
import DatasourcePreview from "./DatasourcePreview";

const DataSourceWidget =  (props) => {
  const [globalState, dispatch] = useContext(WidgetsContext);
  const { currentNode } = globalState;
  const { newNode, onHandleNode, onHandleDrawer } = {...props};  
  const [columns, setColumns] = useState([]);
  const [pickFields, setPickFields] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const formName = 'form_dataSource_1';
  const [formFields, setFormFields] = useState({[formName]: {}});
  const { handleSubmit, register, control } = useForm({
    defaultValues: {
        slug_input: '',
        url: 'https://jsonplaceholder.typicode.com/todos'
    }
  });


  
  const getApiUrl = (slug_input, url) => slug_input ? `${url}/${slug_input}` : url; 

  const onSubmit = data => {
    setIsLoading(true);
    setDataSource([]);
    
    const { slug_input, url } = data;
    const apiUrl = getApiUrl(slug_input, url);
    fetch(apiUrl)
    .then(response => response.json())
    .then(result => {
       setIsLoading(false);
       const columns = Object.keys(result)
       const tableColumns = columns.map((elem) => ({title:elem, dataIndex: elem, key: elem, isSelected: false}));
       
      
       const dataSourceData = {...data, columns, style:{}};
       dispatch({ type: "CREATE_DATA", payload: dataSourceData });
       setFormFields({...formFields, [formName]: dataSourceData})
       setColumns(tableColumns);
       setDataSource([result]);
       
    })
    .catch(e => {
        console.log(e);
        setIsLoading(false);
    });
  }

  const onHandleCheckbox = (value) => {
    // let filteredItems;
    let dataSource;
    const pickFieldIndex = pickFields.indexOf(value);
    if(pickFieldIndex === -1){
      setPickFields([...pickFields, value]);
      dataSource = {pickFields: [...pickFields, value] };
     
    }
    else{
      const filteredItems = pickFields.filter(function(item) {
        return item !== value
      })
      setPickFields(filteredItems);
      dataSource = {pickFields: filteredItems};
    }
    dispatch({ type: "CREATE_DATA", payload: {pickFields :dataSource.pickFields} });
    
   
  
     
  }

  return (
      <div>
         <DatasourcePreview widgetType='datasource' />
         <Input style={{padding: '10px', margin: '10px'}} placeholder="Form Name" ref={register} value={newNode?.data?.label} onChange={(evt) => onHandleNode(evt)}/> 
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <section>
              <label>Data Source</label>
              <Controller
               as={inputField("slug_input")}
               control={control}
               rules={{ required: true }}
               name="slug_input"
               style={{padding: '10px', margin: '10px'}}
               />
               <Controller
               as={inputField("Url")}
               control={control}
               rules={{ required: true }}
               name="url"
               style={{padding: '10px', margin: '10px'}}
               />
            </section>
        </div> 
          <div style={{padding: '10px', margin: '10px'}}>
            <input type="submit" style={{width: '50%'}}/>
            <Button onClick={onHandleDrawer} style={{width: '50%'}}>Cancel</Button>
            
          </div>
          <div >
            {isLoading && <Spin size="large" style={{width: '100%'}} />}
          </div>

          </form>
          {/* { !isLoading && <Table dataSource={dataSource} columns={columns} /> } */}

          <Row>
            <Col>
              <h4>Pick Fields</h4>
              <CheckboxField data={columns} onHandleCheckbox={onHandleCheckbox}/>
            </Col>
           
            
            {/* {dataSource.length > 0 && formFields[formName]} */}
          </Row>
         
          
        
      </div>
    


  
  
  );
};

export default memo(DataSourceWidget);