const todoReducer = (state = [], action) => {
  
  switch (action.type) {
    
    case 'GET_TODOS':
      return [...action.payload];

    case 'ADD_TODO':
       return [...state, action.payload];

    case 'EDIT_TODO':
      return [
         ...state.slice(0, action.meta.index),
         action.payload,
         ...state.slice(action.meta.index + 1)
      ];

    case 'REMOVE_TODO':
      return [
         ...state.slice(0, action.meta.index),
         ...state.slice(action.meta.index + 1)
      ];

    default:
      return state;
  }
}

export default todoReducer;