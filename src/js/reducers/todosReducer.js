const todosReducer = (state = [], action) => {
  
  switch (action.type) {
    
    case 'GET_TODOS':
      return [...action.data];

    case 'ADD_TODO':
       return [...state, action.data];

    case 'EDIT_TODO':
      const todos = [...state];
      todos[action.index] = action.data;
      return todos;

    case 'REMOVE_TODO':
      return [
         ...state.slice(0, action.index),
         ...state.slice(action.index + 1)
      ];

    default:
      return state;
  }
}

export default todosReducer;