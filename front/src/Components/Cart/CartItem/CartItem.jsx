import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { MdDelete } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import DeleteCartHook from '../../../hook/cart/delete-cart-hook';
const CartItem = ({ cartItem }) => {

    const [show, handleClose, handleShow, onDeleteOneCart, onDeleteAllCart, onChangeCount, count, handleQuantity] = DeleteCartHook(cartItem);
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete This Product Form Cart?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={onDeleteOneCart}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <Col xs="12" className="cart-item-body my-2 d-flex px-2 ">
                <img style={{width:"200px" , height:"180px"}} className='mx-1' src={`http://127.0.0.1:8000/products/${cartItem.product.imageCover}`} alt="" />
                <div className="w-100">
                    <Row className="justify-content-between">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline pt-2 cat-text">{cartItem.product.category.name}</div>
                            <div className="d-flex pt-2 align-items-center" style={{ cursor: "pointer" }} onClick={handleShow}>
                                <MdDelete />
                                <div className="cat-text d-inline me-2 fs-6 mx-1" >Delete</div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-2">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline pt-2 barnd-text">
                                {cartItem.product.title}
                            </div>
                            <div className="d-flex justify-content-center align-items-center gap-1 cat-rate me-2">{
                                cartItem.product.ratingsAverage && (
                                    <>
                                        <span>{cartItem.product.ratingsAverage}</span>
                                        <FaStar />
                                    </>
                                )
                            }
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" className="mt-1">
                            <div className="cat-text d-inline">The Brand :</div>
                            <div className="d-inline mx-1">{cartItem.product.brand.name}</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" className="mt-1 d-flex">
                            <div
                                className="color ms-2 border"
                                style={{ backgroundColor: cartItem.color }}></div>
                        </Col>
                    </Row>

                    <Row className="justify-content-between">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-flex pt-2 align-items-center mb-2">
                                <div className="cat-text  d-inline">Quantity</div>
                                <input
                                    className="mx-2 "
                                    type="number"
                                    value={count}
                                    onChange={onChangeCount}
                                    style={{ width: "40px", height: "25px" }}
                                />
                                <button className='btn btn-dark' onClick={handleQuantity}>implement</button>
                            </div>
                            <div className="d-inline pt-2 barnd-text">{cartItem.price} EGP</div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </>
        
    )
}

export default CartItem