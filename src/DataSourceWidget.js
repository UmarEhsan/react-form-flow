import React, {  useState, useContext } from 'react';
import { useForm, Controller } from "react-hook-form";
import { Button, Table, Input } from "antd";
import { WidgetsContext } from './WidgetsContext';
import { inputField } from "./Inputs";

const DataSourceWidget =  (props) => {
  const [globalState, dispatch] = useContext(WidgetsContext);
  const { newNode, onHandleNode, onHandleDrawer } = {...props};  
  const [columns, setColumns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const formName = 'form_dataSource_1';
  const [formFields, setFormFields] = useState({[formName]: {}});
  // console.log(formFields_);
  const { handleSubmit, register, control } = useForm({
    defaultValues: {
        slug_input: '',
        url: 'https://jsonplaceholder.typicode.com/todos'
    }
  });


  
  const getApiUrl = (slug_input, url) => slug_input ? `${url}/${slug_input}` : url; 

  const onSubmit = data => {
    const { currentNode } = globalState;
    setIsLoading(true);
    setDataSource([]);
    
    const { slug_input, url } = data;
    const apiUrl = getApiUrl(slug_input, url);
    fetch(apiUrl)
    .then(response => response.json())
    .then(result => {
       setIsLoading(false);
       const columns = Object.keys(result)
       const tableColumns = columns.map((elem) => ({title:elem, dataIndex: elem, key: elem}));
       
      
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

  return (
      <div>
         <Input placeholder="Form Name" ref={register} value={newNode?.data?.label} onChange={(evt) => onHandleNode(evt)}/> 
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <section>
              <label>Data Source</label>
              <Controller
               as={inputField("slug_input")}
               control={control}
               rules={{ required: true }}
               name="slug_input"/>
               <Controller
               as={inputField("Url")}
               control={control}
               rules={{ required: true }}
               name="url"/>
            </section>
        </div> 
          <div>
            <input type="submit" />
            <Button onClick={onHandleDrawer}>Cancel</Button>
          </div>

          </form>
          { !isLoading && <Table dataSource={dataSource} columns={columns} /> }
          {JSON.stringify(formFields)}
          
        
      </div>
    


  
  
  );
};

export default DataSourceWidget;