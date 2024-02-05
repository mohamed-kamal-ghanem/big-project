import React from 'react'
import { Row, Col } from "react-bootstrap";
import mobile from "../../assets/images/mobile.png";
import { FaStar } from 'react-icons/fa';
const UserProductItem = ({ item }) => {
    return (
        <div className='cart-item-body p-1 my-2'>
            <Row className="d-flex mb-2">
                <Col xs="3" md="2" className="d-flex justify-content-start">
                    <img width="93px" height="120px" src={`http://127.0.0.1:8000/products/${item.product.imageCover}`} alt="" />
                </Col>
                <Col xs="8" md="10">
                    <div className="d-flex justify-content-between">
                        <div className="d-inline pt-2 cat-title">
                            {item.product.title}
                        </div>
                        <div className="d-flex align-items-center gap-1 pt-2 cat-rate me-2">
                            {item.product.ratingsAverage}
                            <FaStar />
                        </div>
                    </div>
                    <div className="rate-count d-inline p-1 pt-2">(Rate {item.product.ratingsQuantity})</div>
                    <div className="mt-3">
                        <div className="cat-text  d-inline">quantity : {item.count }</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserProductItem