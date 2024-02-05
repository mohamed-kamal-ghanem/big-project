import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { createReview } from "../../redux/actions/reviewAction";
import { useEffect } from "react";
import notify from "../useNotification";

const AddReviewHook = (id) => {
    const dispatch = useDispatch();
    const [review, setReview] = useState("");
    const [rate, setRate] = useState(0);
    const [loading, setLoading] = useState(true);
    let user = "";
    if (localStorage.getItem("user") !== null) {
        user = JSON.parse(localStorage.getItem("user"));
    }
    // Function to handle on change review text
    const onChangeReview = (e) => {
        setReview(e.target.value)
    }


    const onSubmit = async (e) => {
        e.preventDefault();
        if (review === "") {
            notify("Please Enter Review Text" , "warn")
            return;
        }
        if (rate === 0) {
            notify("Please Enter Rate", "warn")
            return;
        }
        setLoading(true)
        await dispatch(createReview(id,{
            review,
            rating: rate,
        }
        ))
        setLoading(false);
    }
    const res = useSelector(state => state.review.createReview);

    useEffect(() => {
        if (loading===false) {
            if (res) {
                if (res.status && res.status === 201) {
                    notify("Rate Added Successfully", "success")
                    setTimeout(() => {
                        window.location.reload(false)
                    },1500)
                } else if (res.status && res.status === 403) {
                    notify("It Is Not Allowed For Admin To Rate" , "warn")
                } else if (res.status && res.status === 400) {
                    notify("You CanNot Rate Again", "error")
                }
            }
        }
    },[loading])


    return [setRate, onChangeReview, onSubmit,rate,review , user];
    
}

export default AddReviewHook
