import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import SubTitle from '../uttilies/subTitle/SubTitle'
import ProductCard from '../ProductCard/ProductCard'
import WishListProductHook from '../../hook/products/wishList-product-hook'


const CardProductsCon = ({ btnTitle, title, pathText, products }) => {
    const [wishList] = WishListProductHook();

    return (
        <Container>
            <SubTitle title={title} btntitle={btnTitle} pathText="/products" />
            <Row className="my-2 justify-content-around d-flex">
                    {
                    products ?  (
                        products.map((item, index) => <ProductCard key={index} item={item} wishList={wishList} />)
                    ) : <Spinner animation="border" variant="primary" /> 
                    }

            </Row>
        </Container>
    )
}

export default CardProductsCon