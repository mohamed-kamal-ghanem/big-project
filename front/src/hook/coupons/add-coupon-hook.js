import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { createCoupons, getAllCoupons } from "../../redux/actions/couponAction";
import { useState } from "react";
import notify from "../useNotification";

const AddCouponHook = (id) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [addLoading, setAddLoading] = useState(true);


    const [couponName, setCouponName] = useState("");
    const [discount, setDiscount] = useState(0);
    const [expire, setExpire] = useState("");

    

    const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
    

    const onChangeName = (e) => {
        e.persist();
        setCouponName(e.target.value)
    }
    const onChangeExpire = (e) => {
        e.persist();
        setExpire(e.target.value)
    }
    const onChangeDiscount = (e) => {
        e.persist();
        setDiscount(e.target.value)
    }

    const onAddCoupon = async (e) => {
        e.preventDefault();
        if (couponName === "" || discount <= 0|| expire === "") {
            notify("Please Fill The Form" , "error")
            return;
        } 
        setAddLoading(true)
        await dispatch(createCoupons({
            name: couponName,
            expire: expire ,
            discount: discount
        }))
        setAddLoading(false)
    }
    const addCouponRes = useSelector(state => state.coupon.createCoupon);

    useEffect(() => {
        if (addLoading === false) {
            if (addCouponRes) {
                if (addCouponRes.status === 201) {
                    notify("Coupon Added Successfully", "success");
                    setTimeout(() => {
                        window.location.reload()
                    },1500)
                } else {
                    notify("Please Try Again" , "error")
                }
            }
        }
    },[addLoading])

    // ----------------------------------------------------
    // Logic to get all coupons

    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getAllCoupons());
            setLoading(false)
        }
        get()
    }, [])

    const couponRes = useSelector(state => state.coupon.allCoupons);

    

    let coupons = []
    try {
        if (couponRes && couponRes.data.length >= 1)
            coupons = couponRes.data
    } catch (e) { }

    
    return [coupons, currentDate, onChangeName, onChangeExpire, onChangeDiscount, couponName, discount, expire, onAddCoupon]
}

export default AddCouponHook
