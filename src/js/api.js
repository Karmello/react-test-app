import { GET_TODOS, ADD_TODO, EDIT_TODO, REMOVE_TODO } from 'js/actions';


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
        dispatch(GET_TODOS(todos));
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
        dispatch(ADD_TODO(todo));
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
        dispatch(EDIT_TODO(index, todo));
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
        dispatch(REMOVE_TODO(index));
        resolve();
      }, delay);
    });
  }
};