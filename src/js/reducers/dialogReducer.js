const initialState = {
  AddTodoDialog: { visible: false }
};

const dialogReducer = (prevState = initialState, action) => {
  
  const nextState = { ...prevState };

  switch (action.type) {

    case 'SHOW_DIALOG':
      nextState[action.data.name].visible = true;
      return nextState;

    case 'HIDE_DIALOG':
      nextState[action.data.name].visible = false;
      return nextState;

    default:
      return nextState;
  }
}

export default dialogReducer;