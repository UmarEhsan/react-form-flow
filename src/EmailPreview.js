import { useState, useContext, useEffect  } from 'react';
import { WidgetsContext } from './WidgetsContext';
import { Modal, Button, Table, Row, Col, Spin, message } from 'antd';
import { TextField } from "./Inputs";

import { useForm, Controller } from "react-hook-form";



const EmailPreview =  (props) => {
    const [globalState, dispatch] = useContext(WidgetsContext); 
    const { currentNode } = globalState;
    const [isLoading, setIsLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    // console.log(globalState[currentNode]);
    
   
   
    
    const { handleSubmit, register, errors, control, reset } = useForm();
    const onSubmit = async (data) => { 
    //   http://localhost:3000/mail/sendEmail
        setIsLoading(true);
      try{
          const response = await fetch('https://onsalon.herokuapp.com/mail/sendEmail', {
              method: 'post',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
              body: JSON.stringify(data)
            });
            dispatch({ type: "ADD_DATA", payload: {currentNode: currentNode, data: data} });
            message.success('Email has been sent kindly check your email thanks!!!!');
            setIsLoading(false);
            setVisible(false);
          
      }
      catch(e){
          console.log(e);
          message.error('Error in sending your email sorry for the inconvenience');
          setVisible(false);
          setIsLoading(false);

      }
    };

    const onHandleEmailPreview = () => {
        setVisible(true);
    }

 
    const inputs = {
        'text':  (elem) => {
            return <TextField placeholder={elem?.inputPlaceholder || ''} type={elem.type} rules={[]}
            />
         },
         'email':  (elem) => {
            return <TextField  placeholder={elem?.inputPlaceholder || ''} type={elem.type} rules={[{ type: "email" }]}
            />
         },
         'password':  (elem) => {
          return <TextField placeholder={elem?.inputPlaceholder || ''} type={elem.type} rules={[{ type: "password" }]}
          />
       }
        }
    

   
        const getParentData = () => {
          const {currentNode} = globalState;
          if(currentNode){
            const {parent}  = globalState[currentNode];
            console.log(globalState[parent]);
          }
          
        }   
      
        const isParentDataExist = () => {
          const {currentNode} = globalState;
          
          if(currentNode){
            const {parent}  = globalState[currentNode];
            return parent && globalState[parent]; 
          }
          return false;
          
        }
 
    
   
  return (
    <div>
      <Row>
        <Col>
        {isParentDataExist() && <Button type="primary" onClick={getParentData} style={{margin: "10px"}}>
          Get Parent Data
        </Button>}
        </Col>
      </Row>
     
       <Button type="primary" onClick={onHandleEmailPreview} style={{margin: '10px', width: '86%'}}>
        Preview 
      </Button>
      <Modal
        title="Email Preview"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={600}
        footer={null}
      >
         <div style={{padding: "10px"}}>
         {isLoading && <Spin size="large" style={{width: '100%'}} />}
           <form onSubmit={handleSubmit(onSubmit)}>
           <div style={{padding: "10px"}}>
            <section>
              {/* {
                globalState && 
                globalState[currentNode] && 
                globalState[currentNode].emailSource?.length > 0 &&
                globalState[currentNode]?.emailSource.map((elem) => (
                <Row>
                <Col span={24}>
                <label>{elem.title}</label>
                <Controller
                as={inputs[elem.type](elem)}
                control={control}
                defaultValue=''
                rules={{ required: true }}
                name={elem.value}/>
                </Col>   
              </Row>

                )) 
                //  globalState[currentNode]?.emailSource.length
                }   */}
              <Row>
                <Col span={24} style={{padding: '10px'}}>
                <label>Receiver Email</label>
                <Controller
                as={<TextField placeholder='Enter receiver email' type='email' rules={[]}/>}
                control={control}
                rules={{ required: true }}
                defaultValue=''
                name="to"/>
                </Col>   
              </Row> 
              <Row>
                <Col span={24} style={{padding: '10px'}}>
                <label >Subject</label>
                <Controller
                as={<TextField  placeholder='Subject...' type='text' rules={[]}/>}
                control={control}
                rules={{ required: true }}
                defaultValue=''
                name="subject"/>
                </Col>   
              </Row> 
              <Row>
                <Col span={24} style={{padding: '10px'}}>
              
                <Controller
                placeholder="Content"
                defaultValue=''
                as={<textArea rows={4}  style={{width: '100%', padding: '5px', marginTop: '10px'}}/>}
                ref={register({ required: true })}
                rules={{ required: true }}
                control={control}
                name="content"/>
                </Col>
              </Row>
              <div>
                <Row>
                  <Col offset={14}>
                 
                <Button type="primary" htmlType="submit" style={{margin: '0px 26px'}}>
                    Submit
                </Button>
                <Button type="" htmlType="" onClick={() => setVisible(false)}>
                    Cancel
                </Button>
                  </Col>
                </Row>
              
              </div>
              
              
               
            </section>
           
          </div> 
           </form>
                 
            </div>
         
         {/* <Spin size="large" /> */}
         {/* {isLoading.toString()} */}
      </Modal>
    </div>
    
  );
};

export default EmailPreview;

