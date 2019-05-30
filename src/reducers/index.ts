import * as fromItems from './items';
import { combineReducers } from 'redux';
import { reducer } from './items';

export interface State {
    itemState: fromItems.ItemState
}

export const initialState: State = {
    itemState: fromItems.initialState
}

export const rootReducer = combineReducers<State>({
    itemState: reducer
});