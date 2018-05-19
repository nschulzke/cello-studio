import { createStore, combineReducers, Store } from 'redux';
import * as state from './state'
import { AllActions } from './actions';

type StoreType = Store<state.StoreState, AllActions>;
const store: StoreType = createStore(combineReducers<state.StoreState>(state));

export default store;
