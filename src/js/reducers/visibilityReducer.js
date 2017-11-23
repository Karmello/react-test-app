const initialState = {
  TodoListLoader: true,
  AddTodoDialog: false
};

const visibilityReducer = (state = initialState, action) => {
  
  switch (action.type) {
    
    case 'SHOW':
      return {
        ...state,
        [action.meta.component]: true
      };

    case 'HIDE':
      return {
        ...state,
        [action.meta.component]: false
      };

    default:
      return state;
  }
}

export default visibilityReducer;