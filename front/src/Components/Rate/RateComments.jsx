import React from 'react'
import "./Rate.scss";
import { Row, Col, Modal, Button } from 'react-bootstrap'
import rate from '../../assets/images/rate.png';
import { MdDelete } from "react-icons/md";
import { Rating } from 'react-simple-star-rating'
import { FiEdit } from "react-icons/fi";
import DeleteReviewHook from '../../hook/review/delete-review-hook';
import EditReviewHook from '../../hook/review/edit-review-hook';
const RateComments = ({ review }) => {
    const [isUser, onDelete, handleClose, handleShow, showDelete] = DeleteReviewHook(review)
    const [showEdit, handleCloseEdit, handleShowEdit, onEdit, onChageRateText, newRateText, onChageRateValue, newRateValue] = EditReviewHook(review);
    return (
        <>
            <Modal show={showDelete} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Review Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do You Want To Delete The review ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={onDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header >
                    <Modal.Title> <div className='font'>Edit Review</div></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Rating
                        onClick={onChageRateValue}
                        value={newRateValue}
                        size={20}
                        initialValue={rate} />
                    <input
                        onChange={onChageRateText}
                        value={newRateText}
                        type="text"
                        className='font w-100 mt-2 p-2'
                        style={{ border: 'none' }}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>
                        Close
                    </Button>
                    <Button variant="success" onClick={onEdit}>
                        Edit
                    </Button>
                    
                </Modal.Footer>
            </Modal>
                    <div>
                        <Row className="mt-3">
                            <Col className="d-felx me-5 align-items-center">
                        {
                            review.user !== null && <div className="rate-name  d-inline mx-2">{review.user.name}</div>
                        }
                                <img className="" src={rate} alt="" height="16px" width="16px" />
                                <div className="cat-rate  d-inline  p-1 pt-2">{review.rating}</div>
                            </Col>
                        </Row>
                        <Row className="border-bottom mx-2">
                            <Col className="d-felx me-4 pb-2">
                                <div className="rate-description  d-inline ms-2">
                                    {review.review}
                                </div>
                            </Col>
                            <Col className='rate-icons d-flex justify-content-end gap-2 fs-5'>
                                {
                                    isUser && (
                                        <>
                                            <MdDelete onClick={handleShow} />
                                            <FiEdit onClick={handleShowEdit}/>
                                        </>
                                    )
                                }
                            </Col>
                        </Row>
                    </div>
        </>
  )
}

export default RateComments