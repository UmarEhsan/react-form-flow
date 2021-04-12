/* eslint-disable no-template-curly-in-string */
import { useContext, useEffect, useState } from 'react';
import { TextField } from "./Inputs";
import { Form, Input, Button, Checkbox } from 'antd';
import { WidgetsContext } from './WidgetsContext';
// const layout = {
//   labelCol: {
//     span: 4,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };
// const tailLayout = {
//   wrapperCol: {
//     offset: 4,
//     span: 16,
//   },
// };

const VALIDATE_FORM_MESSAGES_TEMPLATE = {
  required: "${label} is required!",
  types: {
    email: 'Enter a valid email!',
    number: "${label} is not a validate number!",
    url: "${label} is not a valid url!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
  string: {
    max: "Character count cannot exceed ${max}",
  },
  whitespace: "${label} cannot be empty!",
};
  

const FormPreview = (props) => {
  
  const { fields, layoutType } = {...props}; 
  
  const [globalState, dispatch] = useContext(WidgetsContext); 
  
  // useEffect(()=>{
  //   debugger;
  //   const keys = currentNode && Object.keys(globalState[currentNode]); 
  //   globalState[currentNode] && keys.forEach((elem) => {
  //     setFormFields([...formFields, globalState[currentNode][elem]]);
  //   });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[globalState[currentNode]])

  const getFieldsList = () => {
    const fields = [];
    const { currentNode } = globalState;
    const keys = currentNode && Object.keys(globalState[currentNode]); 
    globalState[currentNode] && keys.forEach((elem) => {fields.push(globalState[currentNode][elem])});
    return fields; 
  }
  const formItemLayout =
    layoutType === 'horizontal'
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;

  const buttonItemLayout =
  layoutType === 'horizontal'
      ? {
          wrapperCol: { span: 14, offset: 4 },
        }
      : null; 
  
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

    const inputs = {
    'text':  (elem) => {
        return <TextField placeholder={elem?.inputPlaceholder || ''} type={elem.type} rules={[]}
        />
     },
     'email':  (elem) => {
        return <TextField  placeholder={elem?.inputPlaceholder || ''} type={elem.type} rules={[{ type: "email" }]}
        />
     },
     'number':  (elem) => {
      return <TextField placeholder={elem?.inputPlaceholder || ''} type={elem.type} rules={[{ type: "number" }]}
      />
   }
    }

  
  return (
    <Form
      {...formItemLayout}
      name="basic"
      layout={layoutType}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateMessages={VALIDATE_FORM_MESSAGES_TEMPLATE}
    >

                {
                    getFieldsList().map((elem) => (
                        <>
                            
                         

      <Form.Item
        label={elem.inputLabel}
        name={elem.name}
        >
        {inputs[elem.type](elem)}
      </Form.Item>

                          
                            
                        </>
                       
                    ))
                }


      

      

      {getFieldsList().length > 0 && <Form.Item {...buttonItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item> }

      

     

     
    </Form>
  );
};


export default FormPreview;