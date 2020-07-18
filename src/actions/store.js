import thunk from 'redux-thunk';
import { reducers } from './combined.reducers';
const { createStore, applyMiddleware, compose } = require('redux');


export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk)
  )
);