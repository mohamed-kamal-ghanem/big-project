import { ADD_ADDRESS, DELETE_ADDRESS, EDIT_ADDRESS, GET_ADDRESS, GET_SPETIFIC_ADDRESS } from "../type"
const inital = {
    addedAddress: [],
    getAddress: [],
    deleteAddress: [],
    editAddress: [],
    getSpetificAddress: [],
    loading: true,
}

const userAddressReducer = (state = inital, action) => {
    switch (action.type) {
        case ADD_ADDRESS:
            return {
                ...state,
                addedAddress: action.payload,
                loading: false,
            }
        case GET_ADDRESS:
            return {
                ...state,
                getAddress: action.payload,
            }
        case DELETE_ADDRESS:
            return {
                ...state,
                deleteAddress: action.payload,
            }
        case EDIT_ADDRESS:
            return {
                ...state,
                editAddress: action.payload,
            }
        case GET_SPETIFIC_ADDRESS:
            return {
                ...state,
                getSpetificAddress: action.payload,
            }
        default:
            return state
    }
}

export default userAddressReducer;