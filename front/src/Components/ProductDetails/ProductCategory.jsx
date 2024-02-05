import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import SubTitle from '../uttilies/subTitle/SubTitle'
import GetAllProductCategory from '../../hook/products/get-all-product-category';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import WishListProductHook from '../../hook/products/wishList-product-hook';

const ProductCategory = () => {
    const { id } = useParams();
    const [productCategory, loading] = GetAllProductCategory(id);
    const [wishList] = WishListProductHook();
  return (
      <Container>
          <SubTitle title="Products" />
          <Row className="my-2 justify-content-around d-flex">
              {
                  loading === false ? productCategory.data && productCategory.data.length > 0 ? (
                      productCategory.data.slice(0, 6).map((item, index) => {
                          return (
                              <ProductCard key={index} item={item} wishList={wishList} />
                          )
                      })
                  ) : (<h4 className='cart-title'>There Is no products for this category</h4>)
                      : <Spinner animation="border" variant="primary" />
              }
          </Row>
      </Container>
  )
}

export default ProductCategory
