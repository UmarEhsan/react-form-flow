import React, {createContext} from 'react';
export const WidgetsContext = createContext();

export const WidgetsProvider = props => {
    const initialState = {}

const reducer = (state, action) => {
    const { payload } = action;
    switch (action.type) {
      case "CREATE_OBJECT":
       return addNewItem(state, payload);
      case "CREATE_CHILDREN":
        return createChildren(state, payload.node_id, payload.children); 
        case "CREATE_PARENT":
          return createParent(state, payload.node_id, payload.parent);   
      case "CREATE_DATA": 
      return createData(state, payload);
      case "REMOVE_DATA":
      return removeData(state, payload);    
      default:
       return state;    
  }};

  const createData = (state, payload) => {
    return {...state, [state.currentNode]: {...state[state.currentNode],  ...payload}};
  }

  const createChildren = (state, node_id, children) => {
    // debugger;
    let newState = {
      ...state,
      [node_id]: {
        ...state[node_id],
        children: {
          ...state[node_id].children, ...{[children]: ''}
        },
       
      }
    }
    return newState;
  }
  const createParent = (state, node_id, parent) => {
    // debugger;
    let newState = {
      ...state,
      [node_id]: {
        ...state[node_id],
        ...state[node_id].parent, parent}
       
      }
    
    return newState;
  }

  const addNewItem = (state, payload) => {
      // debugger;
    //   return {...state, [payload]: {}, currentNode: payload };
      if(!state[payload]){
        return {...state, [payload]: {children:{}, parent:''}, currentNode: payload };
      }
      return {...state, currentNode: payload };
    
  }

  const removeData = (state, payload) => {
     
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