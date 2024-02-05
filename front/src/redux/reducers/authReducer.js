import { CREATE_ACCOUNT, FORGET_PASSWORD, LOGIN, UPDATE_USER_DETAILS, UPDATE_USER_PASSWORD } from "../type"
const inital = {
    createUser: [],
    loginUser: [],
    forgetPassword: [],
    updatePassword: [],
    updateUserDetails:[],
    loading: true,
}

const authReducer = (state = inital, action) => {
    switch (action.type) {
        case CREATE_ACCOUNT:
            return {
                ...state,
                createUser: action.payload,
                loading: false,
            }
        case LOGIN:
            return {
                ...state,
                loginUser: action.payload,
            }
        case FORGET_PASSWORD:
            return {
                ...state,
                forgetPassword: action.payload,
            }
        case UPDATE_USER_PASSWORD:
            return {
                ...state,
                updatePassword: action.payload,
            }
        case UPDATE_USER_DETAILS:
            return {
                ...state,
                updateUserDetails: action.payload,
            }
        default:
            return state
    }
}

export default authReducer;