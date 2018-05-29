import { createStore, combineReducers, applyMiddleware, Store, Reducer } from 'redux';
import * as reducers from './reducers'
import { AllActions } from './actions';
import async, { AsyncDispatch } from './async';
import { StoreState } from './state';

type StoreType = Store<StoreState, AllActions>;
const store: StoreType = createStore(
  combineReducers<StoreState>(reducers),
  applyMiddleware(async),
);

export type DispatchType = AsyncDispatch<StoreState, AllActions>

export type ReducerType<T> = Reducer<T, AllActions>

export default store;
