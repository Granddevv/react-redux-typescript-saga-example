import { takeLatest } from 'redux-saga/effects';

import { ActionTypes } from '../actions/items';

import { fetchItems, updateItem, removeItem } from './items';

export const rootSaga = function* root() {
    yield takeLatest(ActionTypes.FETCH_ITEMS, fetchItems);
    yield takeLatest(ActionTypes.UPDATE_ITEM, updateItem);
    yield takeLatest(ActionTypes.REMOVE_ITEM, removeItem);
}