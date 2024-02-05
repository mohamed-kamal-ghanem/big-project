import { Card, Col, Row, Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteProduct } from '../../redux/actions/productAction';
import { useNavigate } from "react-router-dom";
const AdminAllCards = ({ product }) => {
    // Use Naviagte to naviagte to next item
    const navigate = useNavigate();
    // Dispatch Action
    const dispatch = useDispatch();
    // State to manage the show and hide of modal
    const [show, setShow] = useState(false);
    // function to handle the show and hide of modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // Deleteion function
    const handleDelete = async () => {
        await dispatch(deleteProduct(product._id));
        setShow(false);
        window.location.reload();
    }
    return (
        <Col xs="12" sm="6" md="6" lg="3" className="d-flex">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>You are sure about the deletion process for the product?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <Card
                className="my-2 card-item card"
                style={{
                    width: "100%",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                }}>
                <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between">
                        <div className="d-inline item-delete-edit" onClick={handleShow}>Delete</div>
                        <div className="d-inline item-delete-edit" onClick={()=>navigate(`/admin/editProduct/${product._id}`)}>Edit</div>
                    </Col>
                </Row>
                <Link   style={{ textDecoration: "none" }}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={product.imageCover} />
                    <Card.Body>
                        <Card.Title>
                            <div className="card-title">
                                {product.title}
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="card-rate">4.5</div>
                                <div className="d-flex align-items-center">
                                    <div className="card-currency mx-1">$</div>
                                    <div className="card-price">{product.price}</div>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    )
}

export default AdminAllCards