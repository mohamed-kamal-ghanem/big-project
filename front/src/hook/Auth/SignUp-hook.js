import { useState } from "react"
import notify from "../useNotification";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createAccount } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
const SignUpHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // States of the variables
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(true);
    // Functions to handle the change 
    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }
    const onChangePhone = (e) => {
        setPhone(e.target.value);
    }
    // Validation functions
    const validationValues = () => {
        if (name.length <= 3) {
            notify("Name length must be greater than 2", "warn");
            return;
        }
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
            notify("Email is not vaild", "error");
            return;
        }
        if (phone.length <= 10) {
            notify("Please Enter Valid Phone Number", "error");
            return;
        }
        if (password !== confirmPassword) {
            notify("Verify that password = Confirm password", "warn");
            return;
        }

    }
    const res = useSelector((state) => state.auth.createUser);
    // Submit Function
    const onSubmit = async (e) => {
        e.preventDefault();
        validationValues();
        setLoading(true)
        await dispatch(createAccount({
            name,
            email,
            password,
            passwordConfirm: confirmPassword,
            phone
        }));
        setLoading(false)
    }


    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res);
                if (res.data.token) {
                    localStorage.setItem("token", res.data.token)
                    notify("Sign Up Successfully", "success");
                    setTimeout(() => {
                        navigate('/login')
                    }, 2000);
                }
                if (res.data.errors) {
                    if (res.data.errors[0].msg === "E-mail already in use") {
                        notify("Email Is Already Used", "error");
                    } else if (res.data.errors[0].msg === "accept only egypt phone numbers") {
                        notify("Please Enter Vaild Eg Phone", "error");

                    } else if (res.data.errors[0].msg === "must be at least 6 chars") {
                        notify("Password must be at least 6 chars", "error");

                    }
                }
            }
        }
    }, [loading])

    return [name, email, password, confirmPassword, phone, onChangeName, onChangeEmail, onChangePassword, onChangeConfirmPassword, onChangePhone, loading, onSubmit]
}

export default SignUpHook