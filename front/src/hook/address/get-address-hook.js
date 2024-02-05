import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getLoggedUserAddresses, removeAddresses } from "../../redux/actions/userAddressAction";
import { useState } from "react";
import notify from "../useNotification";

const GetAddressHook = (add) => {
    const dispatch = useDispatch();
    const [getLoading, setGetLoading] = useState(true);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const get = async () => {
            setGetLoading(true)
            await dispatch(getLoggedUserAddresses());
            setGetLoading(false)
        }
        get()
    }, [])
    
    const address = useSelector((state) => state.userAddress.getAddress);
    
    // Function to handle the delteion 

    const onDeleteAddress = async () => {
        setLoading(true)
        await dispatch(removeAddresses(add._id))
        setLoading(false)
        handleClose()
    }
    const deleteRes = useSelector((state) => state.userAddress.deleteAddress);

    useEffect(() => {
        if (loading === false) {
            if (deleteRes) {
                if (deleteRes.status === "success") {
                    notify("Address Deleted Successfully", "success")
                    setTimeout(() => {
                        window.location.reload()
                    },1000)
                } else {
                    notify("Please Try Again", "error")
                }
            }
        }
    }, [loading])
    // --------------------------------------------------------------

    return [address, onDeleteAddress, show, handleClose, handleShow]
}

export default GetAddressHook
