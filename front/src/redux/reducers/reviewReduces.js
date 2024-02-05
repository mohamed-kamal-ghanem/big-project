import { CREATE_REVIEW, DELETE_REVIEW, VIEW_REVIEW, EDIT_REVIEW } from "../type"
const inital = {
    createReview: [],
    productReview: [],
    deletedReview: [],
    editReview:[],
    loading: true,
}

const reviewReducer = (state = inital, action) => {
    switch (action.type) {
        case CREATE_REVIEW:
            return {
                ...state,
                createReview: action.payload,
                loading: false,
            }
        case VIEW_REVIEW:
            return {
                ...state,
                productReview: action.payload,
                loading: false,
            }
        case DELETE_REVIEW:
            return {
                ...state,
                deletedReview: action.payload,
            }
        case EDIT_REVIEW:
            return {
                ...state,
                editReview: action.payload,
            }
        default:
            return state
    }
}

export default reviewReducer;