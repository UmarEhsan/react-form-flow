import React from "react";
import { Input, Checkbox, Row, Col } from "antd";

const { TextArea } = Input;


export const inputField = (placeholder, onChange ) => {
    return <Input placeholder={placeholder} onChange={(evt) => onChange()} />;
};


export const TextField  =  (props) => {
    return (
     <Input {...props} />
    );
  };

 export const textArea = (props) => {
     return (
        <TextArea {...props} />
     )
 } 

 


  export const CheckboxField  =  (props) => {
     const { data, onHandleCheckbox, span } = {...props}; 
     
     const onHandleChange = (evt) => {
        const { target } = evt; 
        const { value } = target;
        onHandleCheckbox(value);
     } 
    return (
        <div>
  {data.map((elem) => (
            <Row>
                <Col span={span || 8}>
                 <Checkbox value={elem.value} onChange={onHandleChange}>{elem.title}</Checkbox>
                </Col>
            </Row>
            ))}
        </div>
          


    );
  };  

  export const CheckboxFieldObject  =  (props) => {
    const { data, onHandleCheckbox, span } = {...props}; 
    
    const onHandleChange = (elem) => {
       onHandleCheckbox(elem);
    } 
   return (
       <div>
 {data.map((elem) => (
           <Row>
               <Col span={span || 8}>
                <Checkbox value={elem.value} defaultChecked={elem.defaultChecked} onChange={() => onHandleChange(elem)}>{elem.title}</Checkbox>
               </Col>
           </Row>
           ))}
       </div>
         


   );
 };  