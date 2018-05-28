import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import * as state from './state'
import { AllActions } from './actions';
import async, { AsyncDispatch } from './async';

type StoreType = Store<state.StoreState, AllActions>;
const store: StoreType = createStore(
  combineReducers<state.StoreState>(state),
  applyMiddleware(async),
);

export type DispatchType = AsyncDispatch<state.StoreState, AllActions>
export default store;
