import useDeleteData from "../../hooks/useDelete";
import { useEditData } from "../../hooks/useEdit";
import { useGetData, useGetDataToken } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import { ADD_ADDRESS, GET_ADDRESS, DELETE_ADDRESS, EDIT_ADDRESS, GET_SPETIFIC_ADDRESS } from "../type";

// funciton to Add Address
export const addAddress = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/addresses`, data);
        dispatch({
            type: ADD_ADDRESS,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: ADD_ADDRESS,
            payload: e.response
        })
    }
}

// funciton to Get Address Of Loged User
export const getLoggedUserAddresses = () => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/addresses`);
        dispatch({
            type: GET_ADDRESS,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: GET_ADDRESS,
            payload: e.response
        })
    }
}

// funciton to remove address
export const removeAddresses = (addID) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/addresses/${addID}`);
        dispatch({
            type: DELETE_ADDRESS,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: DELETE_ADDRESS,
            payload: e.response
        })
    }
}
// funciton to edit address
export const editAddresses = (addID,body) => async (dispatch) => {
    try {
        const response = await useEditData(`/api/v1/addresses/${addID}`, body);
        dispatch({
            type: EDIT_ADDRESS,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: EDIT_ADDRESS,
            payload: e.response
        })
    }
}
// funciton to get spetific address
export const getSpetificAddresses = (addID) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/addresses/${addID}`);
        dispatch({
            type: GET_SPETIFIC_ADDRESS,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: GET_SPETIFIC_ADDRESS,
            payload: e.response
        })
    }
}




