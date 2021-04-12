import React, {createContext} from 'react';
export const WidgetsContext = createContext();

export const WidgetsProvider = props => {
    const initialState = {}

const reducer = (state, action) => {
    const { payload } = action;
    switch (action.type) {
      case "CREATE_OBJECT":
       return addNewItem(state, payload);
      case "CREATE_DATA": 
      return createData(state, payload);
      case "REMOVE_DATA":
      return removeData(state, payload);    
      default:
       return state;    
  }};

  const createData = (state, payload) => {
      console.log(payload);
    return {...state, [state.currentNode]: {...state[state.currentNode],  ...payload}};
  }

  const addNewItem = (state, payload) => {
      debugger;
    //   return {...state, [payload]: {}, currentNode: payload };
      if(!state[payload]){
        return {...state, [payload]: {}, currentNode: payload };
      }
      return {...state, currentNode: payload };
    
  }

  const removeData = (state, payload) => {
     console.log(payload); 
    //  delete state[payload.currentNode][payload.field]; 
    const newState = Object.keys(state[payload.currentNode]).reduce((obj, key)=>{
        if(key !== payload.field){
         obj[key] = state[payload.currentNode][key] 
        }
      return obj
     },{})
     return {...state, [state.currentNode]: {...newState}};
  }
  

        const [globalState, dispatch] = React.useReducer(reducer, initialState);
        
    return(
        <WidgetsContext.Provider value={[globalState, dispatch]}>
            {props.children}
        </WidgetsContext.Provider>
    )
}