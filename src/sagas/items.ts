import { call, put } from "redux-saga/effects";
import CommonService from "../services/common";
import { ActionTypes } from "../actions/items";
import { AnyAction } from "redux";

export function* fetchItems() {
  try {
    let itemList = yield call(CommonService.getItems);
    yield put({
      type: ActionTypes.FETCH_ITEMS_SUCCESS,
      payload: { items: itemList }
    });
  } catch (error) {
    yield put({ type: ActionTypes.FETCH_ITEMS_FAIL, error: "Fetching Error!" });
  }
}

export function* updateItem({ payload: { id, role } }: AnyAction) {
  try {
    let response = yield call(CommonService.updateItem, id, role);
    yield put({ type: ActionTypes.UPDATE_ITEM_SUCCESS, payload: { id, role } });
  } catch (error) {
    yield put({ type: ActionTypes.UPDATE_ITEM_FAIL, error: "Updating Error!" });
  }
}

export function* removeItem({ payload: { id } }: AnyAction) {
  try {
    let response = yield call(CommonService.removeItem, id);
    yield put({ type: ActionTypes.REMOVE_ITEM_SUCCESS, payload: { id } });
  } catch (error) {
    yield put({ type: ActionTypes.REMOVE_ITEM_FAIL, error: "Deleting Error!" });
  }
}
