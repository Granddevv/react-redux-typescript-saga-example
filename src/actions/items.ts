import Item from '../models/item';

export enum ActionTypes {
    FETCH_ITEMS = 'FETCH_ITEMS',
    FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS',
    FETCH_ITEMS_FAIL = 'FETCH_ITEMS_FAIL',
    UPDATE_ITEM = 'UPDATE_ITEM',
    UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS',
    UPDATE_ITEM_FAIL = 'UPDATE_ITEM_FAIL',
    REMOVE_ITEM = 'REMOVE_ITEM',
    REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS',
    REMOVE_ITEM_FAIL = 'REMOVE_ITEM_FAIL',
}

export interface ActionFetchItems {
    type: ActionTypes.FETCH_ITEMS,
    payload: {}
}

export interface ActionFetchItemsSuccess {
    type: ActionTypes.FETCH_ITEMS_SUCCESS,
    payload: { items: Item[] }
}

export interface ActionFetchItemFail {
    type: ActionTypes.FETCH_ITEMS_FAIL,
    payload: { error: string }
}

export interface ActionUpdateItem {
    type: ActionTypes.UPDATE_ITEM,
    payload: { id: string, role: string }
}

export interface ActionUpdateItemSuccess {
    type: ActionTypes.UPDATE_ITEM_SUCCESS,
    payload: { id: string, role: string }
}

export interface ActionUpdateItemFail {
    type: ActionTypes.UPDATE_ITEM_FAIL,
    payload: { error: string }
}

export interface ActionRemoveItem {
    type: ActionTypes.REMOVE_ITEM,
    payload: { id: string }
}

export interface ActionRemoveItemSuccess {
    type: ActionTypes.REMOVE_ITEM_SUCCESS,
    payload: { id: string }
}

export interface ActionRemoveItemFail {
    type: ActionTypes.REMOVE_ITEM_FAIL,
    payload: { error: string }
}

export function fetchItems(): ActionFetchItems {
    return {
        type: ActionTypes.FETCH_ITEMS,
        payload: {}
    }
}

export function updateItem(id: string, role: string): ActionUpdateItem {
    return {
        type: ActionTypes.UPDATE_ITEM,
        payload: {
            id: id,
            role: role
        }
    }
}

export function removeItem(id: string): ActionRemoveItem {
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: {
            id: id
        }
    }
}

export type Action = 
    ActionFetchItems | 
    ActionFetchItemsSuccess |
    ActionFetchItemFail |
    ActionUpdateItem | 
    ActionUpdateItemSuccess | 
    ActionUpdateItemFail |
    ActionRemoveItem | 
    ActionRemoveItemSuccess | 
    ActionRemoveItemFail;
