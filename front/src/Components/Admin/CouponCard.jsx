import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import DeleteCouponHook from '../../hook/coupons/delete-coupon-hook'

const CouponCard = ({ coupon }) => {
    const navigate = useNavigate();
    const [handleClose, handleShow, show, onDeleteCoupon] = DeleteCouponHook(coupon._id);
    return (
        <div className="user-address-card my-3 p-2">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete Coupon?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={onDeleteCoupon}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <Row className="d-flex justify-content-between  align-items-center">
                <Col>
                    <div className="">Name : {coupon.name}</div>
                </Col>
                <Col xs="4" className="d-flex justify-content-end">
                    <div className="d-flex align-items-center">
                        <div className="d-flex mx-2 align-items-center" style={{ cursor: "pointer" }} onClick={() => navigate(`/admin/editcoupon/${coupon._id}`)}>
                            <FaEdit />
                            <Link style={{ textDecoration: "none" }}>
                                <p className="item-delete-edit mb-0 mx-1">Edit</p>
                            </Link>
                        </div>
                        <div className="d-flex align-items-center" style={{ cursor: "pointer" }} onClick={handleShow}>
                            <MdDelete />
                            <p className="item-delete-edit mb-0 mx-1">Delete</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs="12 mt-3">
                    <div>
                        <b>Expire Date</b> : {coupon.expire.slice(0,10)}
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs="12 mt-3">
                    <div>
                        <b>Discount</b> : {coupon.discount}%
                    </div>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    )
    
}

export default CouponCard
