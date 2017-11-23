import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loaderReducer from './loaderReducer';
import dialogReducer from './dialogReducer';
import todoReducer from './todoReducer';


const reducers = combineReducers({
  form: formReducer,
  loader: loaderReducer,
  dialog: dialogReducer,
  todos: todoReducer
});

export default reducers;