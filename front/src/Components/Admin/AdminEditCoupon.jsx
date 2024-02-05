import React from 'react'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import EditCouponHook from '../../hook/coupons/edit-coupon-hook';
import { ToastContainer } from 'react-toastify';

const AdminEditCoupon = () => {

    const { id } = useParams();

    const [name, expire, discount, onChangeDiscount, onChangeName, onChangeExpire, onEditCoupon] = EditCouponHook(id);
  return (
    <div>
          <Row className="justify-content-start ">
              <h2>Edit Coupon</h2>
              <Col sm="8">
                  <FloatingLabel controlId="floatingPassword" label="Coupon Name" className="my-3">
                      <Form.Control type="text" placeholder="Coupon Name" value={name} onChange={onChangeName} />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Coupon Name" className="my-3" >
                      <Form.Control type="date" placeholder="expire Name" value={expire} onChange={onChangeExpire} />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Discount Quantity" className="my-3"  >
                      <Form.Control type="number" placeholder="Discount Quantity" value={discount} onChange={onChangeDiscount} />
                  </FloatingLabel>
              </Col>
          </Row>
          <Row>
              <Col sm="8" className="d-flex">
                  <button className="my-2 btn btn-dark" onClick={onEditCoupon}>Edit Coupon</button>
              </Col>
          </Row>
          <ToastContainer />
    </div>
  )
}

export default AdminEditCoupon
