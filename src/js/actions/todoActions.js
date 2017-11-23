export const GET_TODOS = (todos) => {
  return {
    type: 'GET_TODOS',
    payload: todos
  }
}

export const ADD_TODO = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: todo
  }
}

export const EDIT_TODO = (index, todo) => {
  return {
    type: 'EDIT_TODO',
    meta: { index: index },
    payload: todo
  }
}

export const REMOVE_TODO = (index) => {
  return {
    type: 'REMOVE_TODO',
    meta: { index: index }
  }
}

export const CLEAR_TODOS = () => {
  return {
    type: 'CLEAR_TODOS'
  }
}