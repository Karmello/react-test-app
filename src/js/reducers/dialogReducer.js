const initialState = {
  AddTodoDialog: { visible: false }
};

const dialogReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case 'SHOW_DIALOG':
      return {
        ...state,
        [action.data.name]: { visible: true }
      };

    case 'HIDE_DIALOG':
      return {
        ...state,
        [action.data.name]: { visible: false }
      };

    default:
      return state;
  }
}

export default dialogReducer;