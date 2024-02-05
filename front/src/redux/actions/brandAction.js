import {useGetData} from "../../hooks/useGetData";
import { useInsertDataImage } from "../../hooks/useInsertData";
import { CREATE_BRAND, GET_ALL_BRAND, GET_ERROR, GET_ONE_BRAND } from "../type";

// Action to get all categories
export const getAllBrand = (limit) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/brands?limit=${limit}`);
        dispatch({
            type: GET_ALL_BRAND,
            payload: response
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Erorr" + e
        })
    }
}

// Action to get all brands with pagination
export const getAllBrandPage = (page) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/brands?limit=5&page=${page}`);
        dispatch({
            type: GET_ALL_BRAND,
            payload: response
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Erorr" + e
        })
    }
}
// Method to create a brand
export const createBrand = (formData) => async (dispatch) => {
    try {
        const response = await useInsertDataImage(`/api/v1/brands`, formData);
        dispatch({
            type: CREATE_BRAND,
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

// Action to get one Brand by id
export const getOneBrand = (brandID) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/brands/${brandID}`);
        dispatch({
            type: GET_ONE_BRAND,
            payload: response
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Erorr" + e
        })
    }
}