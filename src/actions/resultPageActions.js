import * as t from './actionTypes/resultPageActionTypes';

export const getProducts = (payload) => ({
    type: t.GET_PRODUCTS,
    payload
})

export const setProducts = (payload) => ({
    type: t.SET_PRODUCTS,
    payload
})

export const setSearchInput = (payload) => ({
    type: t.SET_SEARCH_INPUT,
    payload
})