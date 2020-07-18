const { combineReducers } = require('redux');
const { feriadosReducer } = require('./feriados.reducer');
// import { combineReducers } from 'redux';


export const reducers=
combineReducers({
  feriadosReducer,
  // NOTE: add other reducers here

})