import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addAddress } from "../../redux/actions/userAddressAction";
import notify from "../useNotification";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddAddressHook = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // The States
    const [alias,setAlias]=useState("")
    const [details, setDetails] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [postal, setPostal] = useState("")
    const [loading, setLoading] = useState(true)


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


    const onAddAddress = async (e) => {
        e.preventDefault();
        if (alias === "" || phone === "" || details === "" || city === "" || postal === "") {
            notify("Please Fill The Form", "warn")
            return;
        }
        setLoading(true)
        await dispatch(addAddress({
            alias,
            details,
            phone,
            city,
            postalCode: postal
        }))
        setLoading(false)
    }

    const res = useSelector((state) => state.userAddress.addedAddress);

    useEffect(() => {
        if (loading === false) {
            if (res) {
                if (res.status === 200) {
                    notify("Address Added Successfully", "success");
                    setTimeout(() => {
                        navigate("/user/addresses")
                    },1000)
                } else {
                    notify("There is an error , please try again", "error");
                }
            }
        }
        
    },[loading])

    return [alias, details, phone, city, postal, onChangeAlias, onChangeDetails, onChangePhone, onChangeCity, onChangePostal, onAddAddress]

}

export default AddAddressHook
