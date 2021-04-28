/* eslint-disable no-template-curly-in-string */
import { useContext, useEffect, useState } from 'react';
import { TextField } from "./Inputs";
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
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
  
  const { fields, layoutType, onHandleSubmit } = {...props}; 
  
  const [globalState, dispatch] = useContext(WidgetsContext); 
  
  // useEffect(()=>{
  //   
  //   const keys = currentNode && Object.keys(globalState[currentNode]); 
  //   globalState[currentNode] && keys.forEach((elem) => {
  //     setFormFields([...formFields, globalState[currentNode][elem]]);
  //   });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[globalState[currentNode]])

  const getFieldsList = () => {
    const fields = [];
    const { currentNode } = globalState;
    
    if(currentNode){
    const { children, parent, data, ...propsNoA } = globalState[currentNode];
    
    const keys = currentNode && Object.keys(propsNoA); 
    globalState[currentNode] && keys.forEach((elem) => {fields.push(propsNoA[elem])});
    
    }
    return fields; 
  }
  const formItemLayout =
    layoutType === 'horizontal'
      ? {
          labelCol: { span: 6 },
          wrapperCol: { span: 14 },
        }
      : (layoutType === 'vertical') ? {
        labelCol: { span: 6 },
        wrapperCol: { span: 23 },
      } : null;
  const margin =  layoutType === 'horizontal' ? '0px 15px' : '0px 28px';
  const buttonMargin = layoutType === 'horizontal' ? '' : '700px';    

  const buttonItemLayout =
  layoutType === 'horizontal'
      ? {
          wrapperCol: { span: 13, offset: 9 },
        }
      : (layoutType === 'vertical') ? 
        {
          wrapperCol: { span: 7, offset: 17 },
        } : null;
  
  const onFinish = (values) => {
    console.log('Success:', values);
    const {currentNode} = globalState;
    if(currentNode){
      dispatch({ type: "ADD_DATA", payload: {currentNode: currentNode, data: values} });
    }
    // onHandleSubmit();
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
      // initialValues={{
      //   remember: true,
      // }}
      
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateMessages={VALIDATE_FORM_MESSAGES_TEMPLATE}
    >

                {
                    getFieldsList().map((elem) => (
                        <>
                            
                         
       <label>{elem.inputLabel}</label>               
      <Form.Item
        
        name={['form', `${elem.inputName}`]}
        >
        {inputs[elem.type](elem)}
      </Form.Item>

                          
                            
                        </>
                       
                    ))
                }


{getFieldsList().length > 0 && <Form.Item {...buttonItemLayout} >
        <Button type="primary" htmlType="submit" style={{margin: margin}}>
          Submit
        </Button>
        <Button type="" htmlType="" style={{margin: margin}}>
          Cancel
        </Button>
      </Form.Item> }

      {/* <Row>
        <Col offset={19}>
        {getFieldsList().length > 0 && <Form.Item {...buttonItemLayout}>
        <Button type="primary" htmlType="submit" style={{margin: '0px 22px'}}>
          Submit
        </Button>
        <Button type="" htmlType="">
          Cancel
        </Button>
      </Form.Item> }
        </Col>
      </Row> */}
      

    {/* { layoutType === 'vertical' ? 
      <Row>
        <Col offset={19}>
        {getFieldsList().length > 0 && <Form.Item {...buttonItemLayout}>
        <Button type="primary" htmlType="submit" style={{margin: '0px 22px'}}>
          Submit
        </Button>
        <Button type="" htmlType="">
          Cancel
        </Button>
      </Form.Item> }
        </Col>
      </Row>
      : 
      <Row>
        <Col offset={8}>
                {
                   getFieldsList().length > 0 && <Form.Item {...buttonItemLayout}>
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
        <Button type="" htmlType="">
          Cancel
        </Button>
      </Form.Item> 
                }
        </Col>
      </Row>
     
              } */}

      

      

     

     
    </Form>
  );
};


export default FormPreview;