import React, {useState, useContext, useEffect, memo} from 'react';

import PreviewForm  from './PreviewForm';

import { Input, Button, Select, Row, Col, List, Skeleton } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { useForm, Controller } from "react-hook-form";
import { WidgetsContext } from './WidgetsContext';
import { inputField } from "./Inputs";
const { Option } = Select;

const FormWidget =  (props) => {
  const [globalState, dispatch] = useContext(WidgetsContext);
  const { currentNode } = globalState;
  // const [fields, setFormFields] = useState([]);
  const { newNode, onHandleNode, onHandleDrawer } = {...props};  
  const { handleSubmit, register, errors, control, reset } = useForm();
  const [displayFields, setDisplayFields] = useState(true);
  
  const onSubmit = data => { 
      if(Object.keys(data).length > 0){
        const field = Object.keys(globalState[currentNode]).length + 1;
      const formWidgetKey = {[`field${field}`]: {...data, 'field': `field${field}`}};
      dispatch({ type: "CREATE_DATA", payload: formWidgetKey });
      reset({
        type: '',
        inputLabel: '', 
        inputValue: '', 
        inputPlaceholder:'',
        inputName: ''
      });
      }
      
      
  };

  const types = [
    { value: "text", label: "Text" },
    { value: "email", label: "Email" },
    { value: "number", label: "Number" }
  ];
  let fields = [];
  const getFieldsList = () => {
    
    const { currentNode } = globalState;
    if(currentNode && globalState[currentNode]){
      const { children, parent, ...propsNoA } = globalState[currentNode];
    console.log(propsNoA);
    const keys = currentNode && Object.keys(propsNoA); 
    globalState[currentNode] && keys.forEach((elem) => {
      fields.push(globalState[currentNode][elem])
    });
    return fields; 
    }
    
  }
 

  const editField = (index) => {
    // console.log('Edit');
    const { type, inputLabel, inputValue, inputPlaceholder, inputName } = fields[index];
    reset({
      type, inputLabel, inputValue, inputPlaceholder, inputName

    });
  }

  
 
  const deleteField = (index) => {
    const { currentNode } = globalState;
    const field = fields[index].field;
    dispatch({ type: "REMOVE_DATA", payload: {field:field, currentNode: currentNode }});
    getFieldsList(); 
  }
 
    
   
  return (
    <div>
      <PreviewForm />
      <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{padding: "15px"}}>
              
              <Input placeholder="Form Name" ref={register} value={newNode?.data?.label} onChange={(evt) => onHandleNode(evt)}/>
            </div>
            <div style={{padding: "15px"}}>
            <Button
                type="dashed"
                onClick={() => setDisplayFields(previousDisplayFields => !previousDisplayFields)}
                style={{ width: '100%'}}
                icon={<PlusOutlined />}
              >
                Add Field
              </Button>
            </div>
            
            
            {!displayFields && 
            <div>
            <section>
              <Row>
                <Col span={24} style={{padding: "15px"}}>
                <label>Select Type</label>
                <Controller
               
               as={
               <Select style={{width: '100%'}} placeholder="Choose Field Type">
                {types.map(d => {
                  return (
                    <Option key={d.value} value={d.value} >
                      {d.label}
                    </Option>
                  );
                })}
              </Select>}
               control={control}
               rules={{ required: true }}
               name="type"/>
                </Col>
              </Row>
              
               {errors.type && (
					        <span className='error'>This field is required</span>
				        )}
               <Row>
                <Col span={24} style={{padding: "15px"}}>
                <label>Input Label</label>
                <Controller
               as={inputField("Input Label")}
               control={control}
               ref={register({ required: true, value: 'test' })}
              //  defaultValue="inputLabel"
               rules={{ required: true }}
               defaultValue=''
               name="inputLabel"/>
                </Col>   
              </Row> 
              <Row>
                <Col span={24} style={{padding: "15px"}}>
                <label>Input Placeholder</label>
                <Controller
               placeholder="Input Placeholder"
               defaultValue=''
               as={inputField("Input Placeholder")}
               ref={register({ required: true })}
               rules={{ required: true }}
               control={control}
               name="inputPlaceholder"/>
                </Col>
              </Row>
              <Row>
                <Col span={24} style={{padding: "15px"}}>
                <label>Input Name</label>
                <Controller
               placeholder="Input Name"
               as={inputField("Input Name")}
               ref={register({ required: true })}
               rules={{ required: true }}
               control={control}
               name="inputName"/>
                </Col>
              </Row>
              {/* <Row>
                <Col span={24}>
                <label>Input Value</label>
                <Controller
               placeholder="Input Value"
               as={inputField("Input Value")}
               defaultValue=''
               ref={register({ required: false })}
               rules={{ required: false }}
               control={control}
               name="inputValue"/>
                </Col>
              </Row> */}
              
              
               
            </section>
           
          </div> }
          <div style={{padding: "15px"}}>
            <Button type="primary" htmlType="submit" style={{width: '40%', margin: '0px 20px'}}>Submit</Button>
            <Button onClick={onHandleDrawer} style={{width: '40%', margin: '0px 20px'}}>Cancel</Button>
          </div>
          
          
           
          <List
          header={<div>Form Fields</div>}
          bordered
          dataSource={getFieldsList()}
          renderItem={(item, index) => (
        <>
            {item.type &&
           <List.Item
          //  onClick={() => editField(index)}
          // <a key="list-loadmore-edit" >edit</a>
            actions={[<a key="list-loadmore-more" onClick={() => deleteField(index)}>delete</a>]}
          >
        
            <Skeleton loading={item.loading} active>
            <List.Item.Meta
               
                title={<h4>Type: {item.type}</h4>}
                
              />
            </Skeleton>
          </List.Item>}
        </>
       
      )}
    />
          
    </form>
    </div>
    
  );
};

export default memo(FormWidget);