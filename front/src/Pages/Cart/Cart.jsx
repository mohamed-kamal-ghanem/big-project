import React from 'react'
import "./Cart.scss";
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import CartItem from '../../Components/Cart/CartItem/CartItem';
import CartCheckout from '../../Components/Cart/CartCheckout/CartCheckout';
import GetAllUserCartHook from '../../hook/cart/get-all-user-cart-hook';

const Cart = () => {
    const [allCart, cartNumber, couponName, totalCartPrice, priceAfterDiscount] = GetAllUserCartHook();
    return (
        <Container className='mt-3 mb-3'>
            <Row>
                <Col md="9" xs="12">
                    <div className="cart-title">Cart Products</div>
                    {
                        cartNumber > 0 ? allCart ? allCart.map((cart) => {
                            return (
                                <CartItem key={cart._id} cartItem={cart} />
                            )
                        }) : <Spinner animation="border" variant="primary" /> : <h3 className="cart-title">You Have No Products In Cart</h3>
                    }
                    
                </Col>
                <Col md="3" xs="12">
                    <CartCheckout couponNameRes={couponName} cartItems={allCart} cartNumber={cartNumber} priceAfterDiscount={priceAfterDiscount} totalCartPrice={totalCartPrice} />
                </Col>
            </Row>
        </Container>
    )
}

export default Cart