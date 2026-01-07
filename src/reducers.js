const initialState = { 
  count: 0, 
}; 

const compteurReducer = (state = initialState, action) => { 
  switch (action.type) { 
    case 'INCREMENT': 
      return { 
        ...state, 
        count: state.count + action.payload.n  // ✅ .n
      }; 
    case 'DECREMENT': 
      return { 
        ...state, 
        count: state.count - action.payload.n  // ✅ - عادي
      }; 
    default: 
      return state; 
  } 
}; 


export default compteurReducer;