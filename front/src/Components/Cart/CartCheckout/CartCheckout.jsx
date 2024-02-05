import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import DeleteCartHook from '../../../hook/cart/delete-cart-hook'
import ApplyCouponCartHook from '../../../hook/cart/apply-coupon-cart-hook'
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
const CartCheckout = ({ couponNameRes, cartItems, cartNumber, priceAfterDiscount, totalCartPrice }) => {
    const navigate = useNavigate();
    const [show, handleClose, handleShow, , onDeleteAllCart] = DeleteCartHook();
    const [couponName, onChangeCouponName, onApplyCoupon, handelCheckout] = ApplyCouponCartHook(cartItems);

    useEffect(() => {
        if (couponNameRes) {
            onChangeCouponName(couponNameRes)
        }
    }, [couponNameRes])

    return (
      <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete All The Products From Cart?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={onDeleteAllCart}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
                <Col xs="12" className="d-flex  flex-column  ">
                    <div className="d-flex  ">
                        <input
                            className="copon-input  text-center "
                            placeholder="discount code"
                            value={couponName}
                            onChange={(e)=>onChangeCouponName(e.target.value)}
                        />
                        <button className="copon-btn d-inline" onClick={onApplyCoupon}>Check</button>
                    </div>
                    <div className="product-price w-100 my-3  border fs-4">
                        {
                                priceAfterDiscount >= 1 ?
                                <><del>{totalCartPrice}</del>-{priceAfterDiscount}EGP</> :
                                `${totalCartPrice}EGP`
                        }
                    </div>
                    {
                        cartNumber > 0 && <button className="btn btn-dark px-2 my-2" onClick={handelCheckout}>Buy</button>
                        
                    }
                    {
                        cartNumber > 0 && <button className="btn btn-dark px-2 my-2" onClick={handleShow}> Clear Cart</button> 
                    }
                        
                    
                </Col>
            </Row>
            <ToastContainer />
      </>
      
  )
}

export default CartCheckout