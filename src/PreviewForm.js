import React, { useState, useContext, useEffect } from 'react';

import FormPreview from './FormPreview';
import DatasourcePreview from './DatasourcePreview';
import { WidgetsContext } from './WidgetsContext';

import { Modal, Button, Row, Col, Select } from 'antd';
const { Option } = Select;

const PreviewForm = (props) => {
  const [globalState, dispatch] = useContext(WidgetsContext); 
  const [previewLayout, setPreviewLayout] = useState(''); 
  // console.log(globalState);
  const [fields, setFormFields] = useState([]);
  const [visible, setVisible] = useState(false);
  const layoutType = [
    { value: "vertical", label: "Vertical" },
    { value: "horizontal", label: "Horizontal" },
    { value: "inline", label: "Inline" },
  ];




 

  const updateFormFields = () => {
    // const { currentNode } = globalState;
    // const keys = currentNode && Object.keys(globalState[currentNode]); 
    
    // globalState[currentNode] && keys.forEach((elem) => {
    //   fields.push(globalState[currentNode][elem]);
    //   setFormFields(fields);
    //   console.log(fields);
    //     // setFormFields([...fields, globalState[currentNode][elem]]);
    // });
    setVisible(true) 
    // dispatch({ type: "CREATE_LAYOUT", payload: {layoutType : previewLayout} });
  }

  const onHandleLayoutChange = (evt) => {
    setPreviewLayout(evt);
  }
  const onHandleSubmit = () => {
    setVisible(false)
  }
  

    
  return (
    <>

      <Row>
      <Col span={8}>
      <Button type="primary" onClick={updateFormFields} style={{margin: "10px"}}>
        Preview Form
      </Button>
      </Col>
      <Col span={16}>
        <Row style={{margin:"10px"}}>
          <Col span={8}>
            <label>Layout Type</label> 
          </Col>
          <Col span={15}>
          <Select style={{width: '100%'}} onChange={onHandleLayoutChange} placeholder="Choose Layout Type">
                {layoutType.map(d => {
                  return (
                    <Option key={d.value} value={d.value} >
                      {d.label}
                    </Option>
                  );
                })}
        </Select>
          </Col>
        </Row>
       
     
      </Col>
    </Row>
     
      <Modal
        title="Form"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
        footer={null}
      >
         
         <FormPreview fields={fields} layoutType={previewLayout} onHandleSubmit={onHandleSubmit}/>

       
      </Modal>
    </>
  );
};

export default PreviewForm;
