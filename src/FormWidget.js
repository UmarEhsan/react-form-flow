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
  const [fields, setFormFields] = useState([]);
  const { newNode, onHandleNode, onHandleDrawer } = {...props};  
  const { handleSubmit, register, errors, control, reset } = useForm();
  const [displayFields, setDisplayFields] = useState(true);
  
  const onSubmit = data => { 
      
      const field = Object.keys(globalState[currentNode]).length + 1;
      const formWidgetKey = {[`field${field}`]: data};
      dispatch({ type: "CREATE_DATA", payload: formWidgetKey });
      // console.log(globalState[currentNode]);
      reset();
  };

  const types = [
    { value: "text", label: "Text" },
    { value: "email", label: "Email" },
    { value: "number", label: "Number" }
  ];

  const getFieldsList = () => {
    const fields = [];
    const { currentNode } = globalState;
    const keys = currentNode && Object.keys(globalState[currentNode]); 
    globalState[currentNode] && keys.forEach((elem) => {
      fields.push(globalState[currentNode][elem])
    });
    // setFormFields(fields);
    return fields; 
  }
  const deleteField = (index) => {
    console.log('Delete');
    console.log(index);
    console.log(fields);
  }

  const editField = (index) => {
    console.log('Edit');
    console.log(index);
  }

  // useEffect(()=>{
  //   debugger;
  //   const { currentNode } = globalState;
  //   const keys = currentNode && Object.keys(globalState[currentNode]); 
  //   globalState[currentNode] && keys.forEach((elem) => {setFormFields([...fields, globalState[currentNode][elem]])});
  //   eslint-disable-next-line react-hooks/exhaustive-deps
  // },[globalState])
 
 
    
   
  return (
    <div>
      <PreviewForm />
      <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{padding: "10px"}}>
              
              <Input placeholder="Form Name" ref={register} value={newNode?.data?.label} onChange={(evt) => onHandleNode(evt)}/>
            </div>
            <Button
                type="dashed"
                onClick={() => setDisplayFields(previousDisplayFields => !previousDisplayFields)}
                style={{ width: '95%', margin: '10px'}}
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            
            {!displayFields && 
            <div style={{padding: "10px"}}>
            <section>
              <Row>
                <Col span={24}>
                <label>Select Type</label>
                <Controller
               
               as={
               <Select style={{width: '100%'}}>
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
                <Col span={24}>
                <label>Input Label</label>
                <Controller
               as={inputField("Input Label")}
               control={control}
               ref={register({ required: true })}
               rules={{ required: true }}
               name="inputLabel"/>
                </Col>   
              </Row> 
              <Row>
                <Col span={24}>
                <label>Input Placeholder</label>
                <Controller
               placeholder="Input Placeholder"
               as={inputField("Input Placeholder")}
               ref={register({ required: true })}
               rules={{ required: true }}
               control={control}
               name="inputPlaceholder"/>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
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
              <Row>
                <Col span={24}>
                <label>Input Value</label>
                <Controller
               placeholder="Input Value"
               as={inputField("Input Value")}
               ref={register({ required: true })}
               rules={{ required: true }}
               control={control}
               name="inputValue"/>
                </Col>
              </Row>
              
              
               
            </section>
           
          </div> }
          <div style={{padding: "10px"}}>
            <input type="submit" style={{width: '50%'}}/>
            <Button onClick={onHandleDrawer} style={{width: '50%'}}>Cancel</Button>
          </div>
          <List
          header={<div>Form Fields</div>}
          bordered
          dataSource={getFieldsList()}
          renderItem={(item, index) => (
        <>
           <List.Item
            actions={[<a key="list-loadmore-edit" onClick={() => editField(index)}>edit</a>, <a key="list-loadmore-more" onClick={() => deleteField(index)}>delete</a>]}
          >
            <Skeleton loading={item.loading} active>
            <List.Item.Meta
               
                title={<h4>Type: {item.type}</h4>}
                
              />
            </Skeleton>
          </List.Item>
        </>
       
      )}
    />
    </form>
    </div>
    
  );
};

export default memo(FormWidget);