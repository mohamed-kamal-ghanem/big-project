import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const AdminAllOrdersItem = ({ order }) => {
    return (
        <>
                
            <Col sm="12" className=''>
                <Link to={`/admin/order/${order._id}`}
                    className="cart-item-body my-2 px-1 d-flex px-2 p-1"
                    style={{ textDecoration: "none" }}>
                    <div className="w-100">
                        <Row className="justify-content-between">
                            <Col sm="12" className=" d-flex flex-row justify-content-between">
                                <div className="d-inline pt-2 cat-text">Order No {order.id}</div>
                            </Col>
                        </Row>
                        <Row className="justify-content-center mt-2">
                            <Col sm="12" className=" d-flex flex-column align-items-start">
                                <div className="d-inline pt-2 cat-title">
                                    Order Form {order.user.name || ''}
                                </div>
                                <div style={{ color: 'black' }} className="d-inline pt-2 cat-rate me-2">  {order.user.email || ''}</div>
                            </Col>
                        </Row>

                        <Row className="d-flex justify-content-between">
                            <Col xs="6" className="d-flex flex-column">
                                <div>
                                    <div style={{ color: 'black' }} className="d-inline">Delivered</div>
                                    <div className="d-inline mx-2 stat">{order.isDelivered === true ? 'Delivered ' : 'Not Delivered'}</div>
                                </div>
                                <div>
                                    <div style={{ color: 'black' }} className="d-inline">Paid</div>
                                    <div className="d-inline mx-2 stat">{order.isPaid === true ? 'Paid ' : 'Not Paid'}</div>
                                </div>

                                <div>
                                    <div style={{ color: 'black' }} className="d-inline">payment Method </div>
                                    <div className="d-inline mx-2 stat">{order.paymentMethodType === 'cash' ? 'cash' : 'Creidt Card'}</div>
                                </div>
                            </Col>
                            <Col xs="6" className="d-flex justify-content-end">
                                <div>
                                    <div className="barnd-text">{order.totalOrderPrice || 0} جنية</div>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </Link>
            </Col >
                    
        </>
        

    )
}

export default AdminAllOrdersItem