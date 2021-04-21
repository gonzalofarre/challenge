import * as t from './actionTypes/productDetailsActionTypes';

export const getProductDetails = (payload) => ({
    type: t.GET_PRODUCT_DETAILS,
    payload
})

export const setProductDetails = (payload) => ({
    type: t.SET_PRODUCT_DETAILS,
    payload
})
