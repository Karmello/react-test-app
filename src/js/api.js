const delay = 500;


const todos = [
  { description: 'Go shopping', status: 0 },
  { description: 'Clean my room', status: 0 },
  { description: 'Call my family', status: 0 }
];

export const getTodos = () => {
  return (dispatch) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({ type: 'GET_TODOS', data: todos });
        resolve();
      }, delay);
    });
  }
};

export const addTodo = (todo) => {
  return (dispatch) => {
    return new Promise((resolve) => {
      todos.push(todo);
      setTimeout(() => {
        dispatch({ type: 'ADD_TODO', data: todo });
        resolve();
      }, delay);
    });
  }
};

export const editTodo = (index, todo) => {
  return (dispatch) => {
    return new Promise((resolve) => {
      todos[index] = todo;
      setTimeout(() => {
        dispatch({ type: 'EDIT_TODO', index: index, data: todo });
        resolve();
      }, delay);
    });
  }
};

export const removeTodo = (index) => {
  return (dispatch) => {
    return new Promise((resolve) => {
      todos.splice(index, 1);
      setTimeout(() => {
        dispatch({ type: 'REMOVE_TODO', index: index });
        resolve();
      }, delay);
    });
  }
};