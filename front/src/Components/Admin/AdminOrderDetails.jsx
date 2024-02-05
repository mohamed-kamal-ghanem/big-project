import React from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'
import GetOneOrderHook from '../../hook/order/get-one-order-hook'
import { useParams } from 'react-router-dom'
import UserProductItem from '../User/UserProductItem'
import ChangeOrderStatusHook from '../../hook/order/change-order-status-hook'
import { ToastContainer } from 'react-toastify'

const AdminOrderDetails = () => {
    const { id } = useParams();
    const [orderData, cartItems] = GetOneOrderHook(id)
    const [paid, deliver, onChangeDeliver, onChangePaid, handleChangePaid, handleChangeDeliver] = ChangeOrderStatusHook(id);
    return (
        <>

            <h2>Order Details</h2>
            {
                cartItems.length > 0 ? cartItems.map((item) => {
                    return (
                        <UserProductItem item={item} key={item._id}/>
                    )
                }):<Spinner variant='primary' />
            }
            {/* <UserProductItem item={orderData.cartItems} />  */}
            
            {/* <AdminAllOrdersItem orderItem={orderData} /> */}

            <Row className="justify-content-center mt-4 user-data p-2">
                <Col xs="12" className=" d-flex">
                    <div className="admin-content-text py-2">Customer Details</div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div>
                        Name :
                    </div>
                    <div

                        className="mx-2">
                        {orderData ? orderData.user ? orderData.user.name : '' : ''}
                    </div>
                </Col>

                <Col xs="12" className="d-flex">
                    <div>
                        Phone:
                    </div>

                    <div

                        className="mx-2">
                        {orderData ? orderData.user ? orderData.user.phone : '' : ''}
                    </div>
                </Col>
                <Col xs="12" className="d-flex mb-2">
                    <div>
                        Email :
                    </div>

                    <div

                        className="mx-2">
                        {orderData ? orderData.user ? orderData.user.email : '' : ''}
                    </div>
                </Col>
                <div className=" d-flex justify-content-center align-items-center border">
                    total {orderData.totalOrderPrice} EGP
                </div>
                <div className="d-flex mt-2 justify-content-center align-items-center">
                    <select
                        style={{
                            height: "100%",
                            borderRadius: "12px",
                            padding: "5px",
                            outline: "none",
                            background: "#eee",
                        }}
                        name="languages"
                        id="lang"
                        className="select input-form-area mx-2 text-center"
                        value={paid}
                        onChange={onChangePaid}
                    >
                        <option value="0">Paid</option>
                        <option value="true">Paided</option>
                        <option value="false">Not Paided</option>
                    </select>
                    <button className="btn btn-primary" onClick={handleChangePaid}>Save</button>
                    <select
                        style={{
                            height: "100%",
                            borderRadius: "12px",
                            padding: "5px",
                            outline: "none",
                            background: "#eee",
                        }}
                        name="languages"
                        id="lang"
                        className="select input-form-area mx-2 text-center"
                        value={deliver}
                        onChange={onChangeDeliver}
                    >
                        <option value="0">Deliver</option>
                        <option value="true">Delivered</option>
                        <option value="false">Not Deliver</option>
                    </select>
                    <button className="btn btn-primary" onClick={handleChangeDeliver}>Save</button>
                </div>
            </Row>
            <ToastContainer />
        </>
    )
}

export default AdminOrderDetails