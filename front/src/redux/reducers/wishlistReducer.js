import { ADD_PRODUCT_WISHLIST, REMOVE_PRODUCT_WISHLIST, USER_WISHLIST } from "../type"
const inital = {
    userWishlist: [],
    addProductWishlist: [],
    removeProductWishlist: [],
    loading: true,
}

const wishListReducer = (state = inital, action) => {
    switch (action.type) {
        case USER_WISHLIST:
            return {
                ...state,
                userWishlist: action.payload,
            }
        case ADD_PRODUCT_WISHLIST:
            return {
                ...state,
                addProductWishlist: action.payload,
            }
        case REMOVE_PRODUCT_WISHLIST:
            return {
                ...state,
                removeProductWishlist: action.payload,
            }
        default:
            return state
    }
}

export default wishListReducer;