import useDeleteData from "../../hooks/useDelete";
import {  useGetDataToken } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import { useUpdateData } from "../../hooks/useUpdateData";
import { ADD_CART, ALL_CART, APPLY_COUPON_CART, QUANTITY_CART, REMOVE_ALL_CART, REMOVE_ONE_CART } from "../type";

// funciton to Add Product To Cart
export const addCart = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/cart`, data);
        dispatch({
            type: ADD_CART,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: ADD_CART,
            payload: e.response
        })
    }
}

// funciton to Add Product To Cart
export const getAllCart = () => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/cart`);
        dispatch({
            type: ALL_CART,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: ALL_CART,
            payload: e.response
        })
    }
}

// funciton to Delete All Product Form Cart
export const deleteAllCart = () => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/cart`);
        dispatch({
            type: REMOVE_ALL_CART,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: REMOVE_ALL_CART,
            payload: e.response
        })
    }
}
// funciton to Delete One Product Form Cart
export const deleteOneCart = (cartID) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/cart/${cartID}`);
        dispatch({
            type: REMOVE_ONE_CART,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: REMOVE_ONE_CART,
            payload: e.response
        })
    }
}
// funciton to Change Quantity
export const changeQuantityCart = (cartID ,body) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/cart/${cartID}` , body);
        dispatch({
            type: QUANTITY_CART,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: QUANTITY_CART,
            payload: e.response
        })
    }
}

// funciton to Apply Coupon Cart
export const applyCouponCart = (body) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/cart/applyCoupon` , body);
        dispatch({
            type: APPLY_COUPON_CART,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: APPLY_COUPON_CART,
            payload: e.response
        })
    }
}

