const todosReducer = (prevTodos = [], action) => {
  
  switch (action.type) {
    
    case 'GET_TODOS':
      return [...action.data.todos];

    case 'ADD_TODO':
       return [...prevTodos, action.data.todo];

    case 'EDIT_TODO':
      return [
         ...prevTodos.slice(0, action.data.index),
         action.data.todo,
         ...prevTodos.slice(action.data.index + 1)
      ];

    case 'REMOVE_TODO':
      return [
         ...prevTodos.slice(0, action.data.index),
         ...prevTodos.slice(action.data.index + 1)
      ];

    default:
      return prevTodos;
  }
}

export default todosReducer;