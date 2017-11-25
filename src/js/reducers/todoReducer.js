const initialState = {
  activeTodoIndex: null,
  data: []
};

const todoReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case 'GET_TODOS':
      return { ...state, data: action.payload };

    case 'ADD_TODO':
      return {
        ...state,
        data: [...state.data, action.payload]
      };

    case 'EDIT_TODO':
      return {
        ...state,
        data: [
           ...state.data.slice(0, action.meta.index),
           action.payload,
           ...state.data.slice(action.meta.index + 1)
        ]
      };

    case 'REMOVE_TODO':
      return {
        ...state,
        data: [
           ...state.data.slice(0, action.meta.index),
           ...state.data.slice(action.meta.index + 1)
        ]
      };

    case 'CLEAR_TODOS':
      return {
        ...state,
        data: state.data.filter((todo) => {
          return !todo.status;
        })
      };

    case 'SET_ACTIVE_TODO':
      return {
        ...state,
        activeTodoIndex: action.meta.index
      }

    default:
      return state;
  }
}

export default todoReducer;