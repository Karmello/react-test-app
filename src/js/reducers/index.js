import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import visibilityReducer from './visibilityReducer';
import todoReducer from './todoReducer';


const reducers = combineReducers({
  form: formReducer,
  visibility: visibilityReducer,
  todos: todoReducer
});

export default reducers;