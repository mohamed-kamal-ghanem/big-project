import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {updateUserDetails } from "../../redux/actions/authAction";
import { useEffect } from "react";
import notify from "../useNotification";

const UpdateUserDetailsHook = () => {

    const dispatch = useDispatch();
    let user;
    if (localStorage.getItem("user") !== null) {
        user = JSON.parse(localStorage.getItem("user"));
    }

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [loading, setLoading] = useState(true);
    // Function to handle the modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        
    },[])


    // Functions to handle the changes of the passwords
    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const onUpdateDetails = async (e) => {
        e.preventDefault();
        let body;
        if (user.email === email) {
            body = {
                name: name,
                phone: phone
            }
        } else {
            body = {
                name: name,
                email: email,
                phone: phone
            }
        }
        
        setLoading(true)
        await dispatch(updateUserDetails(body))
        setLoading(false)
        handleClose();
    }

    const res = useSelector((state) => state.auth.updateUserDetails);

    useEffect(() => {
        if (loading === false) {
            if (res) {
                if (res.status === 400 && res.data.errors[0].msg === "Incorrect current password") {
                    notify("Please Enter correct Current Password", "warn")
                } else if (res.status === 200) {
                    notify("User Details Updated Suucessfully", "success")
                    localStorage.setItem("user", JSON.stringify(res.data.data.user))
                    setTimeout(() => {
                        window.location.reload(false);
                    }, 1500);
                }
            }
        }
    }, [loading])


    return [show, handleClose, handleShow, onChangeName, onChangeEmail, onChangePhone,phone, name, email, onUpdateDetails]
}

export default UpdateUserDetailsHook
