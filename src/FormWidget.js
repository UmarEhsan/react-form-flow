import React, {useState, useContext} from 'react';
import { Input, Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { useForm, Controller } from "react-hook-form";
import { WidgetsContext } from './WidgetsContext';
import { inputField } from "./Inputs";

const FormWidget =  (props) => {
  const [globalState, dispatch] = useContext(WidgetsContext);
 
  
  const { newNode, onHandleNode, onHandleDrawer } = {...props};  
  const { handleSubmit, register, errors, control } = useForm();
  const [displayFields, setDisplayFields] = useState(true);
  
  const onSubmit = data => { 
      const { currentNode } = globalState;
      const field = Object.keys(globalState[currentNode]).length + 1;
      const formWidgetKey = {[`field${field}`]: data};
      dispatch({ type: "CREATE_DATA", payload: formWidgetKey });
  };

    
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>Form Name...</p>
              <Input placeholder="Form Name" ref={register} value={newNode?.data?.label} onChange={(evt) => onHandleNode(evt)}/>
            </div>
            <Button
                type="dashed"
                onClick={() => setDisplayFields(previousDisplayFields => !previousDisplayFields)}
                style={{ width: '100%', margin: '10px' }}
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            
            {!displayFields && 
            <div>
            <section>
              <label>Form Fields</label>
              <Controller
               as={inputField("Input Type", "margin:10px")}
               control={control}
               rules={{ required: true }}
               name="type"/>
               {errors.type && (
					        <span className='error'>This field is required</span>
				        )}
               <Controller
               as={inputField("Input Label")}
               control={control}
               ref={register({ required: true })}
               rules={{ required: true }}
               name="inputLabel"/>
               <Controller
               placeholder="Input Placeholder"
               as={inputField("Input Placeholder")}
               ref={register({ required: true })}
               rules={{ required: true }}
               control={control}
               name="inputPlaceholder"/>
               <Controller
               placeholder="Input Value"
               as={inputField("Input Value")}
               ref={register({ required: true })}
               rules={{ required: true }}
               control={control}
               name="inputValue"/>
            </section>
           
          </div> }
          <div>
            <input type="submit" />
            <Button onClick={onHandleDrawer}>Cancel</Button>
          </div>

          </form>
  );
};

export default FormWidget;