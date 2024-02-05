import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import { getUserWishlist } from '../../redux/actions/wishlistAction'
const WishListProductHook = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState();
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getUserWishlist())
            setLoading(false)
        }
        get();
    }, [])

    const wishListRes = useSelector((state) => state.wishList.userWishlist)

    useEffect(() => {
        if (loading === false) {
            if (wishListRes.data.length >=1) {
                setWishList(wishListRes.data.map((item => item._id)))
            } else {
                setWishList([])
            }
        }
    }, [loading])

    return [wishList]
}

export default WishListProductHook
