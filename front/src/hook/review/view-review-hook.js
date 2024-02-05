import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewProductReview } from '../../redux/actions/reviewAction';
import { useState } from 'react';

const ViewReviewHook = (id) => {
    const dispatch = useDispatch();


    const [loading, setLoading] = useState(true)

    const allReview = useSelector((state) => state.review.productReview)

    useEffect(() => {
        setLoading(true)
        dispatch(viewProductReview(id, 1, 5))
        setLoading(false)
    }, [id])

    let reviews;
    if (allReview.data) {
        reviews = allReview.data
    }

    const onPress = async (page) => {
        await dispatch(viewProductReview(id, page, 5))
    }

    return [allReview ,reviews, onPress]
}

export default ViewReviewHook
