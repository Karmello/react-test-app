import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import todosReducer from './todosReducer';

const reducers = combineReducers({
  form: formReducer,
  todos: todosReducer
});

export default reducers;