import React from 'react'
import { Col,Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
const BrandCard = ({ brand }) => {
  const navigate = useNavigate();
    return (
        <Col
        xs="6"
        sm="6"
        md="4"
        lg="2"
        style={{cursor:"pointer"}}
        onClick={() => navigate(`/products/brand/${brand._id}`)}
        className="my-2 d-flex justify-content-center">
        <Card
          className="my-1 brand-card"
          style={{
            width: "100%",
            height: "151px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
          }}>
          <Card.Img style={{ width: "100%", height: "151px" }} src={brand.image} />
        </Card>
      </Col>
    )
}

export default BrandCard