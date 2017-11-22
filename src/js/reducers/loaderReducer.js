const initialState = {
  TodoList: { isLoading: true }
};

const loaderReducer = (prevState = initialState, action) => {
  
  const nextState = { ...prevState };

  switch (action.type) {
    
    case 'START_LOADER':
      nextState[action.data.name].isLoading = true;
      return nextState;

    case 'STOP_LOADER':
      nextState[action.data.name].isLoading = false;
      return nextState;

    default:
      return nextState;
  }
}

export default loaderReducer;