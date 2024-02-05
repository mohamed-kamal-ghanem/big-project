import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { updatePassword } from "../../redux/actions/authAction";
import { useEffect } from "react";
import notify from "../useNotification";
import { useNavigate } from "react-router-dom";

const UpdateUserPass = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirmNewPass, setConfirmNewPass] = useState("");
    const [loading, setLoading] = useState(true);

    let user;
    if (localStorage.getItem("user") !== null) {
        user = JSON.parse(localStorage.getItem("user"));
    }
    // Functions to handle the changes of the passwords
    const onChangeOldPass = (e) => {
        setOldPass(e.target.value)
    }
    const onChangePass = (e) => {
        setNewPass(e.target.value)
    }
    const onChangeConfirmPass = (e) => {
        setConfirmNewPass(e.target.value)
    }

    const onUpdate = async (e) => {
        e.preventDefault();
        if (newPass === "") {
            notify("Please Enter New Password", "warn")
            return;
        }
        if (newPass !== confirmNewPass) {
            notify("Please Make Password Equal Confirm password", "warn")
            return;
        }
        setLoading(true)
        await dispatch(updatePassword(user._id, {
            currentPassword: oldPass,
            password: newPass,
            passwordConfirm: confirmNewPass
        }))
        setLoading(false)
    }

    const res = useSelector((state) => state.auth.updatePassword);

    useEffect(() => {
        if (loading === false) {
            if (res.data) {
                if (res.status === 400 && res.data.errors[0].msg === "Incorrect current password") {
                    notify("Please Enter correct Current Password", "warn")
                } else if (res.status === 200) {
                    notify("Password Updated Suucessfully", "success")
                    setTimeout(() => {
                        localStorage.removeItem("user")
                        localStorage.removeItem("token")
                        navigate('/login')
                        window.location.reload()
                    }, 1500);
                }
            }
        }
    }, [loading])


    return [onChangePass, onChangeConfirmPass, onChangeOldPass, newPass, confirmNewPass, oldPass, onUpdate]
}

export default UpdateUserPass
