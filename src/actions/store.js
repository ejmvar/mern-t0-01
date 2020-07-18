import thunk from 'redux-thunk';
import { reducers } from './combined.reducers';
// const { createStore, applyMiddleware, compose } = require('redux');
import { createStore, applyMiddleware, compose } from "redux";


export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk)
  )
);