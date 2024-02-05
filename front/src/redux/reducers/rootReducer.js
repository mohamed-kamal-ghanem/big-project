import {combineReducers} from 'redux'
import categoryReducer from './categoryReducer'
import brandReducer from './brandReducer'
import subCategoryReducer from './subCategoryReducer'
import productReducer from './productReducer'
import authReducer from './authReducer'
import reviewReducer from './reviewReduces'
import userAddressReducer from './userAddressReducer'
import wishListReducer from './wishlistReducer'
import couponReducer from './couponReducer'
import cartReducer from './cartReducer'
import orderReducer from './orderReducer'

export default combineReducers ({
    allCategory: categoryReducer,
    allBrand: brandReducer,
    subCategory: subCategoryReducer,
    allProduct: productReducer,
    auth: authReducer,
    review: reviewReducer,
    userAddress: userAddressReducer,
    wishList: wishListReducer,
    coupon: couponReducer,
    cart: cartReducer,
    order: orderReducer
})