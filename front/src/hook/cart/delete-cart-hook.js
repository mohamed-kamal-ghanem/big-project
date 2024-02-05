import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {  changeQuantityCart, deleteAllCart, deleteOneCart, getAllCart } from "../../redux/actions/cartAction";
import notify from "../useNotification";
const DeleteCartHook = (cartItem) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // --------------------------------------------
    // Delete One Prdocut
    const onDeleteOneCart = async () => {
        setLoading(true);
        await dispatch(deleteOneCart(cartItem._id))
        setLoading(false);
        handleClose()
    }
    const delCartRes = useSelector(state => state.cart.deleteOneCart);

    useEffect(() => {
        if (loading === false) {
            console.log(delCartRes)
            if (delCartRes) {
                if (delCartRes.status === "success") {
                    notify("Product Deleted Successfully", "success")
                    setTimeout(() => {
                        window.location.reload()
                    }, 1500);
                }
            }
        }
    }, [loading])
    
    // --------------------------------------------
    // Delete All products

    const [AllLoading, setAllLoading] = useState(true);
    

    const onDeleteAllCart = async () => {
        setAllLoading(true);
        await dispatch(deleteAllCart())
        setAllLoading(false);
        handleClose()
    }
    const delAAllCartRes = useSelector(state => state.cart.deleteAllCart);

    useEffect(() => {
        if (AllLoading === false) {
            if (delAAllCartRes === "") {
                notify("Cart Cleared", "success")
                setTimeout(() => {
                    window.location.reload();
                },1500)
            } else {
                notify("Error , Please try Again", "error")
            }
        }
    }, [AllLoading])


    // ----------------------------------------
    // Logic to handle the quantity

    const [count, setCount] = useState(1);
    const [countLoading, setCountLoading] = useState(true);

    useEffect(() => {
        if (cartItem)
            setCount(cartItem.count)
    }, [])

    const onChangeCount = (e) => {
        setCount(e.target.value)
    }

    const handleQuantity =async () => {
        setCountLoading(true);
        await dispatch(changeQuantityCart(cartItem._id, {
            count: count
        }))
        setCountLoading(false);
        window.location.reload();
    }

   




    return [show, handleClose, handleShow, onDeleteOneCart, onDeleteAllCart, onChangeCount, count, handleQuantity]
}

export default DeleteCartHook
