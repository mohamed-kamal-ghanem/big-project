import React from 'react'
import UserProductItem from './UserProductItem'
import { Row, Col, Spinner } from "react-bootstrap";
import GetAllOrderHook from '../../hook/order/get-all-order-hook';
import Paginate from '../uttilies/Pagination/Pagination';

const UserAllProductCom = () => {

    const [orderData, results, paginate, onPress] = GetAllOrderHook();
    return (
        <>
            {
                orderData ? orderData.map((order) => {
                    return (
                        <div className='user-product-item'>
                            <h4>Hello : {order.user.name}</h4>
                            <div>Phone {order.shippingAddress.phone }</div>
                            <hr />
                            {
                                order.cartItems.map((item) => {
                                    return (
                                        <>
                                            <UserProductItem key={item._id} item={item} />
                                            <hr />
                                        </>
                                    )
                                })
                            }
                            
                            <Row className="d-flex justify-content-between py-2">
                                <Col xs="6" className="">
                                    <div>
                                        <div className="d-inline">State :</div>
                                        <div className="d-inline mx-2 stat">Underway</div>
                                    </div>
                                </Col>
                                <Col xs="6" className="d-flex justify-content-end">
                                    <div>
                                        <div className="barnd-text">{order.totalOrderPrice} EGP</div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )
                }) : <Spinner animation="border" variant="primary" />
            }
            {
                paginate.numberOfPages >= 2 ? (<Paginate onPress={onPress} pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0} />) : null
            }
    </>
        
        
    )
}

export default UserAllProductCom