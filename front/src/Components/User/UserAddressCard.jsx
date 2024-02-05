import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { FaEdit } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import GetAddressHook from '../../hook/address/get-address-hook';
import { ToastContainer } from 'react-toastify';
const UserAddressCard = ({ add }) => {
  const navigate = useNavigate();

  const [address, onDeleteAddress, show, handleClose, handleShow] = GetAddressHook(add);
  return (
    <div className="user-address-card my-3 p-2">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete address?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={onDeleteAddress}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Row className="d-flex justify-content-between  align-items-center">
        <Col>
          <div className="">{add.alias}</div>
        </Col>
        <Col xs="4" className="d-flex justify-content-end">
          <div className="d-flex align-items-center">
            <div className="d-flex mx-2 align-items-center" style={{ cursor: "pointer" }} onClick={() => navigate(`/user/edit-address/${add._id}`)}>
              <FaEdit />
              <Link  style={{ textDecoration: "none" }}>
                <p className="item-delete-edit mb-0 mx-1">Edit</p>
              </Link>
            </div>
            <div className="d-flex align-items-center" style={{cursor:"pointer"}} onClick={handleShow}>
              <MdDelete />
              <p className="item-delete-edit mb-0 mx-1">Delete</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12 mt-3">
          <div>
            <b>City</b> : {add.city}
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12 mt-3">
          <div>
            <b>Location</b> : {add.details}
          </div>
        </Col>
      </Row>

      <Row className="mt-3 d-flex flex-row">
        <Col xs="12">
          <div>
            <b>Phone</b> : {add.phone}
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  )
}

export default UserAddressCard