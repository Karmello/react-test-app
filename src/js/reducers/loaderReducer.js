const initialState = {
  TodoList: { isLoading: true }
};

const loaderReducer = (state = initialState, action) => {
  
  switch (action.type) {
    
    case 'START_LOADER':
      return {
        ...state,
        [action.data.name]: { isLoading: true }
      };

    case 'STOP_LOADER':
      return {
        ...state,
        [action.data.name]: { isLoading: false }
      };

    default:
      return state;
  }
}

export default loaderReducer;