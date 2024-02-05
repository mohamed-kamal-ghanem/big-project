import { CREATE_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, GET_ALL_PRODUCTS, GET_ERROR, GET_PRODUCT_LIKE, GET_ONE_PRODUCTS, GET_SIMILER_PRODUCTS, GET_ALL_PRODUCTS_CATEGORY, GET_ALL_PRODUCTS_BRAND } from "../type";

const inital = {
    products: [],
    allProducts: [],
    oneProduct: [],
    similerProducts: [],
    deleteProducts: [],
    editProduct: [],
    productsLike: [],
    productsCategory:[],
    productsBrand: [],
    loading: true,

}
// Product Reducer to handle the reducer actions
const productReducer = (state = inital, action) => {
    switch (action.type) {
        case CREATE_PRODUCT:
            return {
                ...state,
                products: action.payload,
                loading: false,
            }
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
                loading: false,
            }
        case GET_SIMILER_PRODUCTS:
            return {
                similerProducts: action.payload,
                loading: false,
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                deleteProducts: action.payload,
                loading: false,
            }
        case EDIT_PRODUCT:
            return {
                ...state,
                editProduct: action.payload,
                loading: false,
            }
        case GET_ONE_PRODUCTS:
            return {
                oneProduct: action.payload,
                loading: false,
            }
        case GET_PRODUCT_LIKE:
            return {
                ...state,
                productsLike: action.payload,
                loading: false,
            }
        case GET_ALL_PRODUCTS_CATEGORY:
            return {
                ...state,
                productsCategory: action.payload,
                loading: false,
            }
        case GET_ALL_PRODUCTS_BRAND:
            return {
                ...state,
                productsBrand: action.payload,
                loading: false,
            }
        case GET_ERROR:
            return {
                loading: true,
                products:action.payload
            }
        default:
            return state
    }
}

export default productReducer;