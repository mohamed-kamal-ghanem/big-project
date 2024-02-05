import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addProductWishList, removeProductWishList } from "../../redux/actions/wishlistAction";
import notify from "../useNotification";

const ProductCardHook = (id) => {
    const dispatch = useDispatch();
    const [wishListAdded, setWishListAdded] = useState(false);
    const [addLoading, setAddLoading] = useState(true);
    const [removeLoading, setRemoveLoading] = useState(true);
    const onAddProductToWish = async () => {
        setWishListAdded(true);
        setAddLoading(true);
        await dispatch(addProductWishList({
            "productId": id
        }))
        setAddLoading(false);
    }

    

    const addProductRes = useSelector(state => state.wishList.addProductWishlist);

    useEffect(() => {
        if (addLoading === false) {
            if (addProductRes) {
                if (addProductRes.status === 200) {
                    notify("Product Added Successfully", "success")
                } else {
                    notify("Please Try Again", "error")
                }
            }
        }
    }, [addLoading])

    const onRemoveProductToWish = async () => {
        setWishListAdded(false);
        setRemoveLoading(true);
        await dispatch(removeProductWishList(id))
        setRemoveLoading(false);
    }

    const removeProductRes = useSelector(state => state.wishList.removeProductWishlist);

    useEffect(() => {
        if (removeLoading === false) {
            console.log(removeProductRes)
            if (removeProductRes) {
                if (removeProductRes.status === "success" && removeProductRes.message === "Product removed successfully to your wishlist") {
                    notify("Product Removed Successfully", "success")
                } else {
                    notify("Please Try Again", "error")
                }
            }
        }
    }, [removeLoading])
    
    return [addProductRes, onAddProductToWish, onRemoveProductToWish, wishListAdded, setWishListAdded]
}

export default ProductCardHook
