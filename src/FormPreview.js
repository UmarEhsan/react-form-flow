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
        return <TextField placeholder={elem.inputPlaceholder} type={elem.type}/>
     },
     'email':  (elem) => {
        return <TextField placeholder={elem.inputPlaceholder} type={elem.type}/>
     },
     'number':  (elem) => {
      return <TextField placeholder={elem.inputPlaceholder} type={elem.type}/>
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


      

      

     

      <Form.Item {...buttonItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

     

     
    </Form>
  );
};


export default FormPreview;