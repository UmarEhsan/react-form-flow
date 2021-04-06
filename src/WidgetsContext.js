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
      default:
       return state;    
  }};

  const createData = (state, payload) => {
    return {...state, [state.currentNode]: {...state[state.currentNode],  ...payload}};
  }

  const addNewItem = (state, payload) => {
      return {...state, [payload]: {}, currentNode: payload };
  }
        const [globalState, dispatch] = React.useReducer(reducer, initialState);
        
    return(
        <WidgetsContext.Provider value={[globalState, dispatch]}>
            {props.children}
        </WidgetsContext.Provider>
    )
}