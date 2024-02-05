import React from 'react'
import "./Brand.css"
import { Container, Row, Spinner } from 'react-bootstrap'
import SubTitle from '../uttilies/subTitle/SubTitle'
import BrandCard from './BrandCard'
import HomeBrandHook from '../../hook/brand/home-brand-hook'



const BrandFeatured = ({ title, btnTitle }) => {
  
  const [brand, loading] = HomeBrandHook();
  return (
    <Container>
            <SubTitle title={title} btntitle={btnTitle} pathText="/allbrand" />
      <Row className="my-1 justify-content-around d-flex">
        
        {
          loading === false ? brand.data ? (
            brand.data.slice(0, 5).map((item,index) => {
              return (
                <BrandCard key={index} brand={item} />
              )
            })
          ) : (<h4>There Is no Brands</h4>)
            : <Spinner animation="border" variant="primary" />
        }
            </Row>
    </Container>
  )
}

export default BrandFeatured