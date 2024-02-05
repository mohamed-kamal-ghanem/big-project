import { ADD_CART, ALL_CART, APPLY_COUPON_CART, QUANTITY_CART, REMOVE_ALL_CART, REMOVE_ONE_CART} from "../type";

const inital = {
    addCart: [],
    AllCart: [],
    deleteAllCart: [],
    deleteOneCart: [],
    applyCouponCart: [],
    quantityCart:[],
    loading: true,
}

const cartReducer = (state = inital, action) => {
    switch (action.type) {
        case ADD_CART:
            return {
                ...state,
                addCart: action.payload,
                loading: false,
            }
        case ALL_CART:
            return {
                ...state,
                AllCart: action.payload,
                loading: false,
            }
        case REMOVE_ONE_CART:
            return {
                ...state,
                deleteOneCart: action.payload,
                loading: false,
            }
        case REMOVE_ALL_CART:
            return {
                ...state,
                deleteAllCart: action.payload,
                loading: false,
            }
        case APPLY_COUPON_CART:
            return {
                ...state,
                applyCouponCart: action.payload,
                loading: false,
            }
        case QUANTITY_CART:
            return {
                ...state,
                quantityCart: action.payload,
                loading: false,
            }
        default:
            return state
    }
}

export default cartReducer;