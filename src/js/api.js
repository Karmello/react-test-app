import { getTodos, addTodo, editTodo, removeTodo, clearTodos } from 'js/actions';


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


export const getAll = () => {
  return (dispatch) => {
    return new Promise((resolve) => {
      
      setTimeout(() => {
        dispatch(getTodos(todos));
        resolve();
      }, delay);
    });
  }
};

export const postOne = (todo) => {
  return (dispatch) => {
    return new Promise((resolve) => {
      
      todos.push(todo);
      
      setTimeout(() => {
        dispatch(addTodo(todo));
        resolve();
      }, delay);
    });
  }
};

export const putOne = (index, todo) => {
  return (dispatch) => {
    return new Promise((resolve) => {
      
      todos[index] = todo;
      
      setTimeout(() => {
        dispatch(editTodo(index, todo));
        resolve();
      }, delay);
    });
  }
};

export const deleteOne = (index) => {
  return (dispatch) => {
    return new Promise((resolve) => {

      todos.splice(index, 1);
      
      setTimeout(() => {
        dispatch(removeTodo(index));
        resolve();
      }, delay);
    });
  }
};

export const deleteMultiple = () => {
  return (dispatch) => {
    return new Promise((resolve) => {

      todos = todos.filter((todo) => {
        return todo.status === 0;
      });

      setTimeout(() => {
        dispatch(clearTodos());
        resolve();
      }, delay);
    });
  }
};