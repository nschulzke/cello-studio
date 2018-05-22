import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import * as state from './state'
import { AllActions } from './actions';
import thunk from 'redux-thunk';

type StoreType = Store<state.StoreState, AllActions>;
const store: StoreType = createStore(
  combineReducers<state.StoreState>(state),
  applyMiddleware(thunk),
);

export default store;
