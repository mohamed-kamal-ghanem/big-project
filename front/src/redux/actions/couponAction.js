import useDeleteData from "../../hooks/useDelete";
import { useEditData } from "../../hooks/useEdit";
import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import { CREATE_COUPON, DELETE_COUPON, GET_ALL_COUPON, GET_ONE_COUPON, UPDATE_COUPON } from "../type";

// Action to get all Coupons
export const getAllCoupons = () => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/coupons`);
        dispatch({
            type: GET_ALL_COUPON,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: GET_ALL_COUPON,
            payload: e.response
        })
    }
}

// Action to get all products with pagination
export const createCoupons = (body) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/coupons` , body);
        dispatch({
            type: CREATE_COUPON,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: CREATE_COUPON,
            payload: e.response
        })
    }
}

// Action to get all products with pagination
export const deleteCoupon = (couponID) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/coupons/${couponID}`);
        dispatch({
            type: DELETE_COUPON,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: DELETE_COUPON,
            payload: e.response
        })
    }
}

// Action to get all products with pagination
export const getOneCoupon = (couponID) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/coupons/${couponID}`);
        dispatch({
            type: GET_ONE_COUPON,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: GET_ONE_COUPON,
            payload: e.response
        })
    }
}
// Action to get all products with pagination
export const editCoupon = (couponID,body) => async (dispatch) => {
    try {
        const response = await useEditData(`/api/v1/coupons/${couponID}`,body);
        dispatch({
            type: UPDATE_COUPON,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: UPDATE_COUPON,
            payload: e.response
        })
    }
}