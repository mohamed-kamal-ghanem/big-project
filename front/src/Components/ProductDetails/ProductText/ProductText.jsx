import "./ProductText.scss";
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ViewProductsDetalisHook from "../../../hook/products/view-product-details-hook";
import { useParams } from "react-router-dom";
import AddCartHook from "../../../hook/cart/add-cart-hook";
import { ToastContainer } from "react-toastify";

const ProductText = () => {

  const { id } = useParams();
  
  const [item, images, cat, brand, prod] = ViewProductsDetalisHook(id)
  const [onChangeColor, indexColor, onAddProductCart] = AddCartHook(id, item);
  

  return (
    <div>
      <Row className="mt-2">
        <div className="cat-text">Electronics :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline fs-4 fw-bold">
            {item.title}
          </div>
            <div className="cat-rate d-inline mx-3">4.5</div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-2">
          <div className="cat-text d-inline">Type :</div>
          <div className="barnd-text d-inline mx-1">IPhone </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-2">
          <div className="cat-text d-inline">Brand :</div>
          <div className="barnd-text d-inline mx-1">{brand.name} </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {
            item.availableColors ? (item.availableColors.map((color, index) => {
              return (<div
                onClick={()=>onChangeColor(index ,  color)}
                key={index}
                className="color ms-2"
                style={{ backgroundColor: color, border: indexColor === index ? '3px solid yellow' : 'none' }}></div>)
            })) : null
          }
        </Col>
      </Row>
      <Row className="mt-4">
        <div className="cat-text">Details :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            {
              item.description
            }
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">{item.price} EGP</div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3" onClick={onAddProductCart}>Add To Cart</div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  )
}

export default ProductText