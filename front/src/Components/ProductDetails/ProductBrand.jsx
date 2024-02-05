import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import SubTitle from '../uttilies/subTitle/SubTitle'
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import WishListProductHook from '../../hook/products/wishList-product-hook';
import GetAllProductBrand from '../../hook/products/get-all-product-brand';

const ProductBrand = () => {
    const { id } = useParams();
    const [productBrand, loading, pagination, onPress] = GetAllProductBrand(id);
    const [wishList] = WishListProductHook();
    return (
        <Container>
            <SubTitle title="Products" pathText="/allcategorie" />
            <Row className="my-2 justify-content-around d-flex xx">
                {
                    loading === false ? productBrand.data && productBrand.data.length >0 ? (
                        productBrand.data.slice(0, 6).map((item, index) => {
                            return (
                                <ProductCard key={index} item={item} wishList={wishList} />
                            )
                        })
                    ) : <h4 className='cart-title'>There Is no products for this Brand</h4>
                        : <Spinner animation="border" variant="primary" />
                }
            </Row>
        </Container>
    )
}

export default ProductBrand
