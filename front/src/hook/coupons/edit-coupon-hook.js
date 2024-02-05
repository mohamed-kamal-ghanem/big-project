import { useEffect } from "react";
import { editCoupon, getOneCoupon } from "../../redux/actions/couponAction";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotification";
import { useNavigate } from "react-router-dom";

const EditCouponHook = (id) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [editLoading, setEditLoading] = useState(true);

    const [name, setName] = useState("")
    const [expire, setExpire] = useState("")
    const [discount, setDiscount] = useState("")
    
    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getOneCoupon(id));
            setLoading(false)
        }
        get()
    }, [])

    const oneCouponRes = useSelector(state => state.coupon.oneCoupon);

    // console.log(oneCouponRes)

    useEffect(() => {
        if (loading === false) {
            if (oneCouponRes.data) {
                setName(oneCouponRes.data.name)
                const date = new Date(oneCouponRes.data.expire.slice(0, 10))
                setExpire(`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`)
                setDiscount(oneCouponRes.data.discount)
            }
        }
    }, [loading])

    const onChangeName = (e) => {
        e.persist();
        setName(e.target.value)
    }
    const onChangeExpire = (e) => {
        e.persist();
        setExpire(e.target.value)
    }
    const onChangeDiscount = (e) => {
        e.persist();
        setDiscount(e.target.value)
    }



    
    

    const onEditCoupon = async () => {
        setEditLoading(true)
        await dispatch(editCoupon(id, {
            name ,
            expire ,
            discount
        }))
        setEditLoading(false)
    }

    const editCouponRes = useSelector(state => state.coupon.editCoupon);

    useEffect(() => {
        if (editLoading === false) {
            if (editCouponRes) {
                if (editCouponRes.status === 200) {
                    notify("Coupon Updated Successfully", "success");
                    setTimeout(() => {
                        navigate("/admin/addcoupon")
                    }, 1500)
                } else {
                    notify("Please Try Again", "error");
                }
            }
        }
    },[editLoading])


    return [ name, expire, discount, onChangeDiscount, onChangeName, onChangeExpire, onEditCoupon]
}

export default EditCouponHook
