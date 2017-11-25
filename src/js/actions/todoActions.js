export const getTodos = (todos) => {
  return {
    type: 'GET_TODOS',
    payload: todos
  }
}

export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: todo
  }
}

export const editTodo = (index, todo) => {
  return {
    type: 'EDIT_TODO',
    meta: { index: index },
    payload: todo
  }
}

export const removeTodo = (index) => {
  return {
    type: 'REMOVE_TODO',
    meta: { index: index }
  }
}

export const clearTodos = () => {
  return {
    type: 'CLEAR_TODOS'
  }
}