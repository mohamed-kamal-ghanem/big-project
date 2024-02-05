import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import notify from "../useNotification";
import { changeOrderDeliver, changeOrderPaid } from "../../redux/actions/orderAction";
const ChangeOrderStatusHook = (id) => {
    const [loading, setLoading] = useState(true);
    const [loadingDeliver, setLoadingDeliver] = useState(true);
    const dispatch = useDispatch();
    const [paid, setPaid] = useState("0");
    const [deliver, setDeliver] = useState("0");

    const onChangePaid = (e) => {
        setPaid(e.target.value)
    }

    const onChangeDeliver = (e) => {
        setDeliver(e.target.value)
    }

    const handleChangePaid = async () => {
        if (paid === "true") {
            setLoading(true)
            await dispatch(changeOrderPaid(id))
            setLoading(false)
        } else if(paid==="0"){
            notify("Please Select Method" , "warn")
        }
    }

    const handleChangeDeliver = async () => {
        if (deliver === "true") {
            setLoadingDeliver(true)
            await dispatch(changeOrderDeliver(id))
            setLoadingDeliver(false)
        } else if (deliver === "0") {
            notify("Please Select Method", "warn")
        }
    }

    const paidRes = useSelector(state => state.order.changePay)
    const deliverRes = useSelector(state => state.order.changeDeliver)

    useEffect(() => {
        if (loading === false) {
            if (paidRes) {
                if (paidRes.status === 200) {
                    notify("The Order Paided Successsfully", "success")
                    setTimeout(() => {
                        window.location.reload()
                    }, 1500);
                } else {
                    notify("Please Try Again", "error")
                }
            }
        }
    }, [loading])
    
    useEffect(() => {
        if (loadingDeliver === false) {
            if (deliverRes) {
                if (deliverRes.status === 200) {
                    notify("The Order Delivered Successsfully", "success")
                    setTimeout(() => {
                        window.location.reload()
                    }, 1500);
                } else {
                    notify("Please Try Again", "error")
                }
            }
        }
    }, [loadingDeliver])

    return [paid, deliver, onChangeDeliver, onChangePaid, handleChangePaid, handleChangeDeliver];
}

export default ChangeOrderStatusHook
