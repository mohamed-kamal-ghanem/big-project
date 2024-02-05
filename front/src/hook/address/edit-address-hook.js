import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { editAddresses, getSpetificAddresses } from "../../redux/actions/userAddressAction";
import { useState } from "react";
import notify from "../useNotification";
import { useNavigate } from "react-router-dom";

const EditAddressHook = (id) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // The States
    const [alias, setAlias] = useState("")
    const [details, setDetails] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [postal, setPostal] = useState("")
    const [loading, setLoading] = useState(true)
    const [editLoading, setEditLoading] = useState(true)

    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getSpetificAddresses(id));
            setLoading(false)
        }
        get();
    }, [id])

    const spetificAddRes = useSelector((state) => state.userAddress.getSpetificAddress);

    useEffect(() => {
        if (loading === false) {
            // console.log(spetificAddRes)
            if (spetificAddRes.status === 'success' && spetificAddRes.data) {
                setAlias(spetificAddRes.data.alias)
                setCity(spetificAddRes.data.city)
                setDetails(spetificAddRes.data.details)
                setPostal(spetificAddRes.data.postalCode)
                setPhone(spetificAddRes.data.phone)
            }
        }
    },[loading])

    const onChangeAlias = (e) => {
        setAlias(e.target.value)
    }
    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }
    const onChangeDetails = (e) => {
        setDetails(e.target.value)
    }
    const onChangeCity = (e) => {
        setCity(e.target.value)
    }
    const onChangePostal = (e) => {
        setPostal(e.target.value)
    }

    // console.log(spetificAddRes)



    const onEdit = async (e) => {
        e.preventDefault();
        setEditLoading(true)
        await dispatch(editAddresses(id, {
            alias,
            details,
            phone,
        }))
        setEditLoading(false);
    }

    const editAddRes = useSelector((state) => state.userAddress.editAddress);

    useEffect(() => {
        if (editLoading === false) {
            console.log(editAddRes)
            if (editAddRes) {
                if (editAddRes.status === 200 && editAddRes.data.message === "Address updated successfully") {
                    notify("Address updated successfully", "success");
                    setTimeout(() => {
                        navigate("/user/addresses")
                    },3000)
                } else {
                    notify("Please Try Again", "error");
                }
            }
        }
    }, [editLoading])

    return [spetificAddRes, alias, city, phone, details, postal, onChangeAlias, onChangeCity, onChangeDetails, onChangePhone, onChangePostal, onEdit];
    
}

export default EditAddressHook
