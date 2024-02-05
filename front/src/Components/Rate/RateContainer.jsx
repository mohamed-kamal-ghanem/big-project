import React from 'react'
import "./Rate.scss";
import { Col, Container, Row } from 'react-bootstrap'
import rate from "../../assets/images/rate.png";
import RateComments from './RateComments';
import RateForm from './RateForm';
import Paginate from '../uttilies/Pagination/Pagination';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';
import ViewReviewHook from '../../hook/review/view-review-hook';
const RateContainer = () => {
    const { id } = useParams()
    const [allReview, reviews, onPress] = ViewReviewHook(id)
    return (
        <Container className="rate-container">
            <Row>
                <Col className="d-flex">
                    <div className="sub-tile d-inline p-1 ">Rates</div>
                    <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">4.3</div>
                    <div className="rate-count d-inline p-1 pt-2">({reviews ? reviews.length : "0"} Rate) </div>
                </Col>
            </Row>
            <RateForm reviews={reviews} />
            {
                reviews ? reviews.map((review) => {
                    return (
                        <RateComments review={review} key={review._id} />
                    )
                }) : null
            }
            
            {
                allReview.paginationResult && allReview.paginationResult.numberOfPages >= 2 ? (<Paginate pageCount={allReview.paginationResult ? allReview.paginationResult.numberOfPages : 0} onPress={onPress} />) : null
            }
            <ToastContainer /> 
        </Container>
    )
}

export default RateContainer