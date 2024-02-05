import {useGetData} from "../../hooks/useGetData";
import { useInsertDataImage } from "../../hooks/useInsertData";
import { CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR, GET_ONE_CATEGORY } from "../type";

// Action to get all categories
export const getAllCaetgory = (limit) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/categories?limit=${limit}`);
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: response
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Erorr" + e
        })
    }
}



// Action to get all categories with pagination
export const getAllCaetgoryPage = (page) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/categories?limit=5&page=${page}`);
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: response
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Erorr" + e
        })
    }
}
// funciton to create a category
export const createCategory = (formData) => async (dispatch) => {
    try {
        const response = await useInsertDataImage(`/api/v1/categories`, formData);
        dispatch({
            type: CREATE_CATEGORY,
            payload: response,
            loading:true
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Erorr" + e
        })
    }
}


// Action to get one category by id
export const getOneCategory = (catID) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/categories/${catID}`);
        dispatch({
            type: GET_ONE_CATEGORY,
            payload: response
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Erorr" + e
        })
    }
}