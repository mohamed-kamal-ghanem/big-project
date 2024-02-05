import { CREATE_COUPON, DELETE_COUPON, GET_ALL_COUPON, GET_ONE_COUPON, UPDATE_COUPON} from "../type";

const inital = {
    createCoupon: [],
    allCoupons: [],
    deleteCoupon: [],
    oneCoupon: [],
    editCoupon: [],
    loading: true,
}

const couponReducer = (state = inital, action) => {
    switch (action.type) {
        case CREATE_COUPON:
            return {
                ...state,
                createCoupon: action.payload,
                loading: false,
            }
        case GET_ALL_COUPON:
            return {
                ...state,
                allCoupons: action.payload,
                loading: false,
            }
        case DELETE_COUPON:
            return {
                ...state,
                deleteCoupon: action.payload,
                loading: false,
            }
        case GET_ONE_COUPON:
            return {
                ...state,
                oneCoupon: action.payload,
                loading: false,
            }
        case UPDATE_COUPON:
            return {
                ...state,
                editCoupon: action.payload,
                loading: false,
            }
        default:
            return state
    }
}

export default couponReducer;