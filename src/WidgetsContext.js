import React, {createContext} from 'react';
export const WidgetsContext = createContext();

export const WidgetsProvider = props => {
    const initialState = {}

const reducer = (state, action) => {
    const { payload } = action;
    switch (action.type) {
      case "CREATE_OBJECT":
      return addNewItem(state, payload);
      case "REMOVE_OBJECT": 
      return removeItem(state, payload);
      case "CREATE_CHILDREN":
      return createChildren(state, payload.node_id, payload.children); 
      case "CREATE_PARENT":
      return createParent(state, payload.node_id, payload.parent); 
      case "ADD_DATA":
      return addData(state, payload);    
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
    // 
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
    // 
    const parentData = state[parent];
    if(parentData.data){
      state[node_id]['parentData'] = parentData.data;
    }
    let newState = {
      ...state,
      [node_id]: {
        ...state[node_id],
        ...state[node_id].parent, parent}
       
      }
    
    return newState;
  }

  const addData = (state, payload) => {
    const {currentNode, data} = payload;
    // const presentNode = state;
    state[currentNode].data = data;
    if(state[currentNode].children){
      const children = Object.keys(state[currentNode].children);
      children.forEach((elem) => {
        state[elem].parentData = data;
      })
    }
    
    return {...state, currentNode: currentNode };
  }

  const addNewItem = (state, payload) => {
      // 
    //   return {...state, [payload]: {}, currentNode: payload };
      if(!state[payload]){
        return {...state, [payload]: {children:null, parent:null}, currentNode: payload };
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
  
  const removeItem = (state, payload) => {
    console.log(payload);
    let newState;
    let source;
    let target;

    if(payload.length > 1){
      source = payload[1].source;
      target = payload[1].target;
     }
    //  else{
    //   source = payload[1].source;
    //   target = payload[1].target;
    //  }
    
    if(payload[0].id && (!payload[0].source || !payload[0].target)){
      newState = Object.keys(state).reduce((obj, key)=>{
        if(key !== payload[0].id){
         obj[key] = state[key];
        }
      return obj
     },{});
     
     if(payload.length > 1){
      const newChildren = getNewChildren(source, target, newState);
     // console.log(test)
     if(newState[source]){
      newState[source].children = newChildren;
     }
    
     }

    
    }
    //For Deleting edge
    else if(payload[0].source || payload[0].target){
      newState = Object.keys(state).reduce((obj, key)=>{
        if(key !== payload[0].id){
         obj[key] = state[key];
        }
      return obj
     },{});
     
     const newChildren = getNewChildren(payload[0].source, payload[0].target, newState);
      // console.log(test)
     
      newState[payload[0].source].children = newChildren;
      newState[payload[0].target].parent = null;
      if(newState[payload[0].target].parentData){
        
        newState[payload[0].target].parentData = null;
      }
      
      
      // newState[payload[0].target].parent = null;
    }

    return {...newState, currentNode: null}
  }

  const getNewChildren = (source, target, newState) => {
    
    // console.log(delete newState[source].children[target]);
    if(newState[source]){
      return Object.keys(newState[source].children).reduce((obj, key) => {
        if(key !== target){
          obj[key] = newState[source].children[key];
        }
        return obj
    },{});
    }
    return newState;
    
  }

  const [globalState, dispatch] = React.useReducer(reducer, initialState);
        
    return(
        <WidgetsContext.Provider value={[globalState, dispatch]}>
            {props.children}
        </WidgetsContext.Provider>
    )
}