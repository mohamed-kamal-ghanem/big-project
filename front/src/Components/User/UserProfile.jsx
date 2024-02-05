import React from 'react'
import { Row, Col,Form, FloatingLabel, Modal, Button } from 'react-bootstrap'
import deletion from '../../assets/images/delete.png';
import { useState, useEffect } from 'react';
import UpdateUserPass from '../../hook/Auth/update-user-pass';
import { ToastContainer } from 'react-toastify';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { FaEdit } from "react-icons/fa";
import UpdateUserDetailsHook from '../../hook/Auth/update-user-details-hook';
const UserProfile = () => {

  const [user, setUser] = useState("")
  const [passType, setPassType] = useState(true);
  
  const [onChangePass, onChangeConfirmPass, onChangeOldPass, newPass, confirmNewPass, oldPass, onUpdate] = UpdateUserPass();
  const [show, handleClose, handleShow, onChangeName, onChangeEmail, onChangePhone, phone, name, email, onUpdateDetails] = UpdateUserDetailsHook();

  const pasIconClick = () => {
    setPassType(!passType)
  }


  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")))
    }
  }, [])


  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            onChange={onChangeName}
            value={name}
            type="text"
            className='font w-100 mt-2 p-2'
            style={{ border: 'none' }}
          />
          <input
            onChange={onChangeEmail}
            value={email}
            type="text"
            className='font w-100 mt-2 p-2'
            style={{ border: 'none' }}
          />
          <input
            onChange={onChangePhone}
            value={phone}
            type="text"
            className='font w-100 mt-2 p-2'
            style={{ border: 'none' }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={onUpdateDetails}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <h2 className='fw-bold my-2'>Profile</h2>
      <div className="user-address-card my-3 p-2">
        <Row className="d-flex justify-content-between pt-2">
          <Col xs="12" className="d-flex justify-content-between">
            <div className='fw-bold'>Information</div>
            <div className="d-flex mx-2 align-items-center" style={{ cursor: "pointer" }} onClick={handleShow}>
              <FaEdit />
              <p className="mb-0 pe-auto mx-1">Edit</p>
            </div>
          </Col>
          <Col xs="12" className="d-flex align-items-center flex-wrap">
            <div className="p-2">Name:</div>
            <div className="p-1">{user.name}</div>
          </Col>
          
        </Row>

        <Row className="">
          <Col xs="12" className="d-flex align-items-center flex-wrap">
            <div className="p-2">Phone:</div>
            <div className="p-1">{user.phone }</div>
          </Col>
        </Row>
        <Row className="">
          <Col xs="12" className="d-flex align-items-center flex-wrap">
            <div className="p-2">Email:</div>
            <div className="p-1">{user.email }</div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs="10" sm="8" md="6" className="">
            <h4 className="fw-bold">Change Password</h4>
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3 password-label" onChange={onChangeOldPass} value={oldPass}>
              <Form.Control type={`${passType === true ? "password" : "text"}`} placeholder="Password" />
              {
                passType === false
                  ? <BsEyeFill className='eye' style={{ display: `${oldPass !== "" ? "block" : "none"}` }} onClick={pasIconClick} />
                  : <BsEyeSlashFill className='eye' style={{ display: `${oldPass !== "" ? "block" : "none"}` }} onClick={pasIconClick} />
              }
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword1" label="New Password" className="mb-3 password-label" onChange={onChangePass}
              value={newPass}>
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword2" label="Confirm Password" className="mb-3 password-label" onChange={onChangeConfirmPass}
              value={confirmNewPass}>
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col xs="10" sm="8" md="6" className="d-flex">
            <button className="mt-2 btn btn-dark rounded-pill" onClick={onUpdate}>Save Password</button>
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </div>
  )
}

export default UserProfile