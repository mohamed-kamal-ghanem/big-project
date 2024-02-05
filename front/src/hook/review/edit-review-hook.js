import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductReview, editProductReview } from "../../redux/actions/reviewAction";
import notify from "../useNotification";

const EditReviewHook = (review) => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true)

    const [newRateText, setNewRateText] = useState(review.review);
    const [newRateValue, setNewRateValue] = useState(review.rating);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
    // fucntions to handle edit review
    const onChageRateText = (e) => {
        setNewRateText(e.target.value)
    }

    const onChageRateValue = (newRate) => {
        setNewRateValue(newRate)
    }

    // on delection function

    const onEdit = async () => {
        setLoading(true)
        await dispatch(editProductReview(review._id, {
            review: newRateText,
            rating: newRateValue
        }))
        setLoading(false)
        handleCloseEdit();
    }

    const res = useSelector((state) => state.review.editReview)

    useEffect(() => {
        if (loading === false) {
            console.log(res)
            if (res.status && res.status === 200) {
                notify("Edited Successfully", "success");
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            }
            else {
                notify("Edit Failed", "error")
            }
                
        }
    }, [loading])

    return [showEdit, handleCloseEdit, handleShowEdit, onEdit, onChageRateText, newRateText, onChageRateValue, newRateValue]

}

export default EditReviewHook
