import React from "react";
import { Input, Checkbox, Row, Col } from "antd";


export const inputField = (placeholder, onChange ) => {
    return <Input placeholder={placeholder} onChange={(evt) => onChange()} />;
};


export const TextField  =  (props) => {
    return (
     <Input {...props} />
    );
  };



  export const CheckboxField  =  (props) => {
     const { data, onHandleCheckbox } = {...props}; 
     
     const onHandleChange = (evt) => {
        const { target } = evt; 
        const { value } = target;
        onHandleCheckbox(value);
     } 
    return (
        <div>
  {data.map((elem) => (
            <Row>
                <Col span={8}>
                 <Checkbox value={elem.title} onChange={onHandleChange}>{elem.title}</Checkbox>
                </Col>
            </Row>
            ))}
        </div>
          


    );
  };  