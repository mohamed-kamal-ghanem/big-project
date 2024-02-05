import React from 'react'
import FilterCount from '../../Components/uttilies/FilterCount/FilterCount'
import { Col, Container, Row } from 'react-bootstrap'
import SideBar from '../../Components/uttilies/SideBar/SideBar'
import CardProductsCon from '../../Components/CardProductsCon/CardProductsCon'
import ViewSearchProductHook from '../../hook/products/view-search-product-hook'
import Paginate from '../../Components/uttilies/Pagination/Pagination'

const ProductsShop = () => {

    const [items, pagination, onPress, getProduct] = ViewSearchProductHook()
    
    if (pagination) {
        var pageCount = pagination
    } else {
        pageCount = 0
    }


    return (
        <div style={{ minHeight: "50vh" }}>
            <Container>
                <FilterCount products={items} getProduct={getProduct} />

                <Row>
                    <Col sm="2" xs="3" md='2'>
                        <SideBar />
                    </Col>
                    <Col sm="9" xs="9" md='10'>
                        <CardProductsCon products={items} />
                    </Col>
                </Row>

                {
                    pageCount > 1 ? (
                        <Paginate pageCount={pageCount} onPress={onPress} />
                    ) : null
                }
            </Container>
        </div>
    )
}

export default ProductsShop