import useDeleteData from "../../hooks/useDelete";
import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import { USER_WISHLIST, ADD_PRODUCT_WISHLIST, REMOVE_PRODUCT_WISHLIST } from "../type";

// funciton to Get User WishList
export const getUserWishlist = () => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/wishlist`);
        dispatch({
            type: USER_WISHLIST,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: USER_WISHLIST,
            payload: e.response
        })
    }
}
// funciton to Add Product To  WishList
export const addProductWishList = (body) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/wishlist`,body);
        dispatch({
            type: ADD_PRODUCT_WISHLIST,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: ADD_PRODUCT_WISHLIST,
            payload: e.response
        })
    }
}
// funciton to Remove Product To  WishList
export const removeProductWishList = (prodID) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/wishlist/${prodID}`);
        dispatch({
            type: REMOVE_PRODUCT_WISHLIST,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: REMOVE_PRODUCT_WISHLIST,
            payload: e.response
        })
    }
}