import {useGetData} from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import { CREATE_SUB_CATEGORY, GET_ERROR, GET_SUB_CATEGORY } from "../type";



// funciton to create a sub category
export const createSubCategory = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/subcategories`, data);
        dispatch({
            type: CREATE_SUB_CATEGORY,
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


// funciton to get specific sub category
export const getSpetificSubCategory = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/categories/${id}/subcategories`);
        dispatch({
            type: GET_SUB_CATEGORY,
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