export const GET_TODOS = (todos) => {
  return {
    type: 'GET_TODOS',
    data: {
      todos: todos
    }
  }
}

export const ADD_TODO = (todo) => {
  return {
    type: 'ADD_TODO',
    data: {
      todo: todo
    }
  }
}

export const EDIT_TODO = (index, todo) => {
  return {
    type: 'EDIT_TODO',
    data: {
      index: index,
      todo: todo
    }
  }
}

export const REMOVE_TODO = (index) => {
  return {
    type: 'REMOVE_TODO',
    data: {
      index: index
    }
  }
}