import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import { useUpdateData } from "../../hooks/useUpdateData";
import { CREATE_ORDER_CASH, GET_ALL_ORDER, GET_ONE_ORDER, UPDATE_ORDER_DELIVER, UPDATE_ORDER_PAY } from "../type";

// Action to Make a chsh order
export const createOrderCash = (id,body) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/orders/${id}`, body);
        dispatch({
            type: CREATE_ORDER_CASH,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: CREATE_ORDER_CASH,
            payload: e.response
        })
    }
}

// Action to get all products with pagination
export const getAllOrders = (page , limit) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/orders?limit=${limit}&page=${page}`);
        dispatch({
            type: GET_ALL_ORDER,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: GET_ALL_ORDER,
            payload: e.response
        })
    }
}
// Action to get all products with pagination
export const getOneOrder = (id) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/orders/${id}`);
        dispatch({
            type: GET_ONE_ORDER,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: GET_ONE_ORDER,
            payload: e.response
        })
    }
}
// Action to changeOrderPaid
export const changeOrderPaid = (id) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/orders/${id}/pay`);
        dispatch({
            type: UPDATE_ORDER_PAY,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: UPDATE_ORDER_PAY,
            payload: e.response
        })
    }
}
// Action to changeOrderPaid
export const changeOrderDeliver = (id) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/orders/${id}/deliver`);
        dispatch({
            type: UPDATE_ORDER_DELIVER,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: UPDATE_ORDER_DELIVER,
            payload: e.response
        })
    }
}