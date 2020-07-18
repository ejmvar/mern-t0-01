// const { combineReducers } = require('redux');
import { combineReducers } from 'redux';
// const { feriadosReducer } = require('./feriados.reducer');
import { feriadosReducer } from './feriados.reducer';


export const reducers=
combineReducers({
  feriadosReducer,
  // NOTE: add other reducers here

})