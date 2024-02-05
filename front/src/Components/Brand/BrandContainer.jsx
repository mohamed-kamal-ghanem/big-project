import React from 'react'
import "./Brand.css"
import { Container, Row, Spinner } from 'react-bootstrap'
import BrandCard from './BrandCard'
import com1 from "../../assets/images/brand1.png"
import com2 from "../../assets/images/brand2.png"
import com3 from "../../assets/images/brand3.png"



const BrandContainer = ({data,loading}) => {
  return (
      <Container>
            <div className="admin-content-text">All Brands</div>
      <Row className="my-1 justify-content-around d-flex">
        {
                    loading === false ?
                        data ? (
                            data.map((item, index) => {
                                return (
                                    <BrandCard key={index}  img={item.image} />
                                )
                        })
                    ) : (<h4>There Is no Brands</h4>)
                        : <Spinner animation="border" variant="primary" />
                }
                
            </Row>
    </Container>
  )
}


export default BrandContainer