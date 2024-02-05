import { GET_ALL_ORDER, UPDATE_ORDER_DELIVER, UPDATE_ORDER_PAY, GET_ONE_ORDER, CREATE_ORDER_CASH } from '../type'

const inital = {
    createOrderCash:[],
    getAllOrders: [],
    getOneOrder: [],
    changePay: [],
    changeDeliver: []
}
const orderReducer = (state = inital, action) => {
    switch (action.type) {
        case GET_ALL_ORDER:
            return {
                ...state,
                getAllOrders: action.payload,
            }
        case GET_ONE_ORDER:
            return {
                ...state,
                getOneOrder: action.payload,
            }
        case UPDATE_ORDER_PAY:
            return {
                ...state,
                changePay: action.payload,
            }
        case UPDATE_ORDER_DELIVER:
            return {
                ...state,
                changeDeliver: action.payload,
            }
        case CREATE_ORDER_CASH:
            return {
                ...state,
                createOrderCash: action.payload,
            }
        default:
            return state;
    }
}
export default orderReducer