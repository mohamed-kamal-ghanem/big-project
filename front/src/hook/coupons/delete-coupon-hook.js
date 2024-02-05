import { useState } from 'react';
import { deleteCoupon } from '../../redux/actions/couponAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import notify from '../useNotification';

const DeleteCouponHook = (id) => {
    const dispatch = useDispatch();
    // Logic To Delete
    const [show, setShow] = useState(false);
    const [delLoading, setDelLoading] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onDeleteCoupon = async (e) => {
        setDelLoading(true)
        await dispatch(deleteCoupon(id))
        setDelLoading(false)
    }

    const delCouponRes = useSelector(state => state.coupon.deleteCoupon);

    useEffect(() => {
        if (delLoading === false) {
            if (delCouponRes === "") {
                notify("Coupon Deleted Successfully", "success");
                setTimeout(() => {
                    window.location.reload()
                }, 1500)
            } else {
                notify("Please Try Again" , "error")
            }
        }
    }, [delLoading])

    return [ handleClose, handleShow, show, onDeleteCoupon]

}

export default DeleteCouponHook
