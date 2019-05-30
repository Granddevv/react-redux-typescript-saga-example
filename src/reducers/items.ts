import Item from "../models/item";
import { Action, ActionTypes } from "../actions/items";

export interface ItemState {
  items: Item[];
  errorLog: string[];
  options: string[];
}

export const initialState: ItemState = {
  items: [
    {
      display: "John",
      id: "1",
      role: "read only"
    },
    {
      display: "John",
      id: "12",
      role: "read only"
    },
    {
      display: "John",
      id: "123",
      role: "read only"
    }
  ],
  errorLog: [],
  options: ["read-only", "read-write"]
};

export function reducer(
  state: ItemState = initialState,
  action: Action
): ItemState {
  let items = state.items;
  let errorLog = state.errorLog;
  let updatedItems: Item[] = [];

  switch (action.type) {
    case ActionTypes.FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload.items
      };
    case ActionTypes.FETCH_ITEMS_FAIL:
      errorLog.push(action.payload.error);
      return {
        ...state,
        errorLog: errorLog
      };
    case ActionTypes.UPDATE_ITEM_SUCCESS:
      updatedItems = items.map(item => {
        if (item.id === action.payload.id) {
          item.role = action.payload.role;
        }
        return item;
      });
      return {
        ...state,
        items: updatedItems
      };
    case ActionTypes.UPDATE_ITEM_FAIL:
      errorLog.push(action.payload.error);
      return {
        ...state,
        errorLog: errorLog
      };
    case ActionTypes.REMOVE_ITEM_SUCCESS:
      updatedItems = items.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        items: updatedItems
      };
    default:
      return {
        ...state
      };
  }
}
