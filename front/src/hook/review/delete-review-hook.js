import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductReview } from "../../redux/actions/reviewAction";
import notify from "../useNotification";

const DeleteReviewHook = (review) => {
    const dispatch = useDispatch();

    const [isUser , setIsUser]=useState(false)
    const [loading, setLoading] = useState(true)

    const [showDelete, setShowDelete] = useState(false);
    // Two Funs to handle close and open modal
    const handleClose = () => setShowDelete(false);
    const handleShow = () => setShowDelete(true);
    // getting user
    let user;
    if (localStorage.getItem("user") !== null) {
        user = JSON.parse(localStorage.getItem("user"));        
    }
    useEffect(() => {
        try {
            if (review.user._id === user._id) {
                setIsUser(true);
            }
        }catch(e){}
    }, [])
    // on delection function

    const onDelete = async () => {
        setLoading(true)
        await dispatch(deleteProductReview(review._id))
        setLoading(false)
        handleClose();
    }

    const res = useSelector((state) => state.review.deletedReview)

    useEffect(() => {
        if (loading === false) {
            console.log(res)
            if (res === "") {
                notify("Review Deleted Successfully", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            }
            else {
                notify("Deletion Error", "error")
            }
        }
    }, [loading])
    
    return [isUser ,onDelete , handleClose, handleShow , showDelete ]
}

export default DeleteReviewHook
