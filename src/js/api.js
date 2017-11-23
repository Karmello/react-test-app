import { GET_TODOS, ADD_TODO, EDIT_TODO, REMOVE_TODO, CLEAR_TODOS } from 'js/actions';


const delay = 250;

let todos = [
  { description: 'Wake up', status: 1 },
  { description: 'Have breakfast', status: 1 },
  { description: 'Go to work', status: 1 },
  { description: 'Have lunch', status: 0 },
  { description: 'Go home', status: 0 },
  { description: 'Watch some movie', status: 0 },
  { description: 'Go to sleep', status: 0 }
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

export const clearTodos = () => {
  return (dispatch) => {
    return new Promise((resolve) => {

      todos = todos.filter((todo) => {
        return todo.status === 0;
      });

      setTimeout(() => {
        dispatch(CLEAR_TODOS());
        resolve();
      }, delay);
    });
  }
}