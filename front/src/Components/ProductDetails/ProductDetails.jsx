import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductGallery from './ProductGallery/ProductGallery'
import ProductText from './ProductText/ProductText'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    return (
        <Row className="py-3">
            <Col lg='4' md="6" sm="12">
                <ProductGallery  />
            </Col>
            <Col lg='8' md="6" sm="12">
                <ProductText />
            </Col>
        </Row>
    )
}

export default ProductDetails