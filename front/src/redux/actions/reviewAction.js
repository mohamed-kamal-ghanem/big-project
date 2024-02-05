import useDeleteData from "../../hooks/useDelete";
import { useEditData } from "../../hooks/useEdit";
import { useGetDataToken } from "../../hooks/useGetData"
import { useInsertData } from "../../hooks/useInsertData";
import { CREATE_REVIEW, VIEW_REVIEW, DELETE_REVIEW, EDIT_REVIEW } from "../type";

// funciton to create a review
export const createReview = (prodID, data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/products/${prodID}/reviews`, data);
        dispatch({
            type: CREATE_REVIEW,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: CREATE_REVIEW,
            payload: e.response
        })
    }
}
// funciton to View All the reviews
export const viewProductReview = (prodID, page,limit) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/products/${prodID}/reviews?page=${page}&limit=${limit}`);
        dispatch({
            type: VIEW_REVIEW,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: VIEW_REVIEW,
            payload: e.response
        })
    }
}
// funciton to delete a review
export const deleteProductReview = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/reviews/${id}`);
        dispatch({
            type: DELETE_REVIEW,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: DELETE_REVIEW,
            payload: e.response
        })
    }
}
// funciton to edit a review
export const editProductReview = (id,data) => async (dispatch) => {
    try {
        const response = await useEditData(`/api/v1/reviews/${id}`, data);
        dispatch({
            type: EDIT_REVIEW,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: EDIT_REVIEW,
            payload: e.response
        })
    }
}

