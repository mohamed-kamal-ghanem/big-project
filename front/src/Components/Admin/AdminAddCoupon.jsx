import React from 'react'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import AddCouponHook from '../../hook/coupons/add-coupon-hook'
import CouponCard from './CouponCard'

const AdminAddCoupon = () => {
    const [coupons, currentDate, onChangeName, onChangeExpire, onChangeDiscount, couponName, discount, expire, onAddCoupon] = AddCouponHook();
    // console.log(coupons);
  return (
    <div>
          <Row className="justify-content-start ">
              <h2>Add Coupon</h2>
              <Col sm="8">
                  <FloatingLabel controlId="floatingPassword" label="Coupon Name" className="my-3" onChange={onChangeName} value={couponName}>
                      <Form.Control type="text" placeholder="Coupon Name"  />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Coupon expire" className="my-3" onChange={onChangeExpire} value={expire}>
                      <Form.Control type="date" placeholder="expire"  min={currentDate}/>
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Discount Quantity" className="my-3" onChange={onChangeDiscount} value={discount}>
                      <Form.Control type="number" placeholder="Discount Quantity" />
                  </FloatingLabel>
              </Col>
          </Row>
          <Row>
              <Col sm="8" className="d-flex">
                  <button className="my-2 btn btn-dark" onClick={onAddCoupon}>Add Coupon</button>
              </Col>
          </Row>

          {
              coupons.length >= 1 && coupons.map((coupon) =>  <CouponCard key={coupon._id} coupon={coupon} />)
          }

          <ToastContainer />
    </div>
  )
}

export default AdminAddCoupon
