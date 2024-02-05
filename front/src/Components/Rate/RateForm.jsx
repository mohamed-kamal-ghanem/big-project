import "./Rate.scss";
import { Col, Row } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating'
import AddReviewHook from '../../hook/review/add-review-hook';
import { useParams } from 'react-router-dom';

const RateForm = ({ reviews }) => {
    const { id } = useParams();
    const [setRate, onChangeReview, onSubmit, rate, review, user] = AddReviewHook(id);

    let name;
    if (user) {
        name =user.name
    }
    // Catch Rating value
    const handleRating = (rate) => {
        setRate(rate)
    }
    return (
        <div>
            <Row className="mt-3 ">
                <Col sm="12" className="me-5  d-flex align-items-center">
                    <div className="rate-name  d-inline ms-3 mt-1 mx-2">{name}</div>
                    <Rating
                        onClick={handleRating}
                        size={20}
                        initialValue={rate} />
                </Col>
            </Row>
            <Row className="border-bottom mx-2">
                <Col className="d-felx me-4 pb-2">
                    <textarea
                        className="input-form-area p-2 mt-3 w-100"
                        placeholder="Write Comment...."
                        onChange={onChangeReview}
                        value={review}
                    />
                    <div className="d-flex al">
                        <div className="btn btn-outline-dark text-center rounded-pill" onClick={onSubmit}>Add Comment</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default RateForm