import {  CREATE_SUB_CATEGORY,  GET_ERROR, GET_SUB_CATEGORY } from "../type";

const inital = {
    subCategory: [],
    loading: true,

}
// Sub Category Reducer to handle the reducer actions
const subCategoryReducer = (state = inital, action) => {
    switch (action.type) {
        
        case CREATE_SUB_CATEGORY:
            return {
                ...state,
                subCategory: action.payload,
                loading:false
            }
        case GET_SUB_CATEGORY:
            return {
                subCategory: action.payload,
                loading:false
            }
        case GET_ERROR:
            return {
                loading: true,
                subCategory:action.payload
            }
        default:
            return state
    }
}

export default subCategoryReducer;