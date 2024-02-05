import React from 'react'
import "./PaymentPage.scss";
import { Row, Col, Container, Form } from 'react-bootstrap'
import GetAddressHook from '../../hook/address/get-address-hook';
import OrderPayCashHook from '../../hook/checkout/order-pay-cash-hook';
import { ToastContainer } from 'react-toastify';

const PaymentPage = () => {
    const [address, onDeleteAddress, show, handleClose, handleShow] = GetAddressHook();

    const [handleChooseAddress, addressDetails, handleCreateCashOrder] = OrderPayCashHook();

    
    return (
        <Container className='PaymentPage'>
            <div className="admin-content-text pt-5">Choose Payment</div>
            <Form>
                <div className='form-check-dev'>
                    <input type="radio" id="card" name="fav_language" value="Paying by credit card" />
                    <label htmlFor="card">Paying by credit card</label>
                </div>
                <div className='form-check-dev'>
                    <input type="radio" id="delivery" name="fav_language" value="Cash on delivery" />
                    <label htmlFor="delivery">Cash on delivery</label>
                    
                    
                </div>
                {
                    address.data && <select name="address" id="address" className="select select-address px-2 " onChange={handleChooseAddress}>
                        <option value="0">Select Address</option>
                        {address.data.map((add) => {
                            return (
                                <option key={add._id} value={add._id}>{add.alias}</option>
                            )
                        })}
                    </select>
                }
            </Form>


            <Row>
                <Col xs="12" className="d-flex flex-column gap-2">
                    <div className="product-price d-inline border">34000EGP</div>
                    <div className="product-cart-add px-3 pt-2 d-inline me-2" onClick={handleCreateCashOrder}>Buy</div>
                </Col>
            </Row>

            <ToastContainer />
        </Container>
    )
}

export default PaymentPage