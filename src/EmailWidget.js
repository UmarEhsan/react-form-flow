import React, {useState, useContext, useEffect, memo} from 'react';

import EmailPreview  from './EmailPreview';

import { Input, Button, Select, Row, Col, List, Skeleton } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { useForm, Controller } from "react-hook-form";
import { WidgetsContext } from './WidgetsContext';
import { TextField, textArea, CheckboxFieldObject } from "./Inputs";
const { Option } = Select;

const EmailWidget =  (props) => {
  const emailFields_ = [
   {value: 'endpoint', title: 'End Point', type: 'text', inputPlaceholder: 'Enter Server End Point....', defaultChecked: false},
   {value: 'email', title: 'Email', type: 'email', inputPlaceholder: 'Enter Email....', defaultChecked: false}, 
   {value: 'password', title: 'Password', type: 'password', inputPlaceholder: 'Enter Password....', defaultChecked: false}
]  
  const [globalState, dispatch] = useContext(WidgetsContext);
  const [emailFields, setEmailFields] = useState(emailFields_);
  const [fields, setFields] = useState([]);
  
  const { currentNode } = globalState;
  const { onHandleDrawer } = {...props};  
  const { handleSubmit, register, errors, control, reset } = useForm();
 
//   useEffect(()=>{
//     if(globalState[currentNode] && Object.keys(globalState[currentNode]).length === 0){
//         setEmailFields([]);
//     }
//   },[currentNode])
 
  const onHandleCheckbox = (elem) => {
       
        let emailData;
        const { value } = elem; 
        const pickFieldIndex = fields.filter(function(item) {
            return item.value === value
          });
        if(pickFieldIndex.length === 0){
            setFields([...fields, elem]);
            emailData = {fields: [...fields, elem] };
     
    }
    else{
      const filteredItems = fields.filter(function(item) {
        return item.value !== value
      })
      
      setFields(filteredItems);
            emailData = {fields: filteredItems};
    }
    
    dispatch({ type: "CREATE_DATA", payload: {emailSource :emailData.fields} });
  }
  
 

  const onSubmit = (form_data) => {
    let emailData = {fields: form_data};
    dispatch({ type: "CREATE_DATA", payload: {emailSource :emailData.fields} });
  }

  
 
  
 
    
   
  return (
    <div>
        <Row>
            <Col>
             
              <EmailPreview widgetType='email' />
            </Col>

        </Row>
        <Row>
        <Col span={22}>
                 <h4>Server Fields</h4>
                 <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col span={24} style={{padding: '10px'}}>
                        <label>URL</label>
                        <Controller
                        as={<TextField placeholder='Enter url.....' type="text"/>}
                        control={control}
                        rules={{ required: true }}
                        name="server_url"
                        style={{margin: '10px'}}
                    />
                    </Col>
                    </Row>
                    <Row>
                        
                        <Col span={24} style={{padding: '10px'}}>
                        <label>Email</label>
                        <Controller
                        as={<TextField placeholder='Enter email.....' type="email"/>}
                        control={control}
                        rules={{ required: true }}
                        name="server_email"
                        style={{ margin: '10px'}}
                    />
                    </Col>
                    </Row>
                    <Row>
                        <Col span={24} style={{padding: '10px'}}>
                        <label>Password</label>
                        <Controller
                        as={<TextField placeholder='Enter password.....' type="password"/>}
                        control={control}
                        rules={{ required: true }}
                        name="server_password"
                        style={{ margin: '10px'}}
                    />
                    </Col>
                    </Row>

                     <Col span={4}>
                     <input type="submit"  style={{
                   padding: '10px', 
                   margin: '10px', 
                   color: '#fff',
                   background: '#1890ff',
                   borderColor: '#1890ff',
                   border: '1px solid #1890ff'}}/>
                     </Col>
        </form>
                 {/* <CheckboxFieldObject data={emailFields} onHandleCheckbox={onHandleCheckbox} span={24}/> */}
                 {/* {JSON.stringify(globalState[currentNode])} */}
            </Col>
        </Row>
      
    </div>
    
  );
};

export default EmailWidget;