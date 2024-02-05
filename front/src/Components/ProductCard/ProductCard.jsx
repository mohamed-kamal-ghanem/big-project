import React from 'react'
import "./ProductCard.css"
import { Card, Col } from 'react-bootstrap'
import rate from "../../assets/images/rate.png";
import { Link, useNavigate } from 'react-router-dom';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import ProductCardHook from '../../hook/products/product-card-hook';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
const ProductCard = ({ item, wishList }) => {
    const navigate = useNavigate();
    const [addProductRes, onAddProductToWish, onRemoveProductToWish, wishListAdded, setWishListAdded] = ProductCardHook(item._id);
    const onClickProduct = () => {
        navigate(`/products/${item._id}`)
        window.location.reload()
    }

    useEffect(() => {
        if (wishList.some(ifItem => ifItem === item._id)) {
            setWishListAdded(true)
        } else {
            setWishListAdded(false)
        }
    },[wishList])
    return (
        <Col xs="12" sm="12" md="6" lg="3"  className="d-flex">

            <Card
          className="my-2 card-item"
                style={{
                    
                }}>
                <Link onClick={onClickProduct} style={{ textDecoration: 'none' }}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={`${item.imageCover.startsWith("http") ? item.imageCover : `http://127.0.0.1:8000/products/${item.imageCover}`}`} />
                </Link>
                <div className="wishlist d-flex justify-content-end mx-2 mt-2">
                    {
                        wishListAdded === false ? (
                            <FaRegHeart onClick={onAddProductToWish} />
                        ): (
                            <FaHeart onClick={onRemoveProductToWish} />
                        )
                    }
                </div>
                <Card.Body>
                    <Card.Title>
                        <div className="card-title">
                            {item.title}
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                                <img
                                    className=""
                                    src={rate}
                                    alt=""
                                    height="16px"
                                    width="16px"
                                />
                                <div className="card-rate mx-2">{item.ratingsQuantity}</div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="card-price">{item.price}</div>
                                <div className="card-currency mx-1">$</div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
            <ToastContainer />
        </Col>
    )
}

export default ProductCard
