import { Col } from 'react-bootstrap'
import "./CategorieCard.css";
import { useNavigate } from 'react-router-dom';

const CategorieCard = ({ category , background }) => {
    const navigate = useNavigate();
    return (
        <Col
            xs="6"
            sm="6"
            md="4"
            lg="2"
            onClick={() => navigate(`/products/category/${category._id}`)}
            style={{cursor:"pointer"}}
            className="my-4 d-flex justify-content-around ">
            <div className="allCard mb-3 ">
                <div
                    className="categoty-card "
                    style={{ backgroundColor: `${background}` }}></div>{" "}
                <img alt="zcv" src={category.image} className="categoty-card-img" />
                <p className="categoty-card-text my-2">{category.name}</p>
            </div>
        </Col>
    )
}

export default CategorieCard