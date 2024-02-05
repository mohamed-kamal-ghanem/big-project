import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import EditAddressHook from '../../hook/address/edit-address-hook'
import { useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
const UserEditAdderss = () => {
    const { id } = useParams();
    const [spetificAddRes, alias, city, phone, details, postal, onChangeAlias, onChangeCity, onChangeDetails, onChangePhone, onChangePostal, onEdit] = EditAddressHook(id);
  return (
      <div>
          <Row className="justify-content-start ">
              <h2>Edit Address</h2>
              <Col sm="8">
                  <Form.Label htmlFor="inputAddress5" className='my-1'>Address</Form.Label>
                  <Form.Control
                      type="text"
                      id="inputAddress5"
                      aria-describedby="passwordHelpBlock"
                      onChange={onChangeAlias}
                      value={alias}
                  />
                  <Form.Label htmlFor="inputAddress5" className='my-1'>Address Details</Form.Label>
                  <Form.Control
                      type="textarea"
                      as="textarea"
                      id="inputAddress5"
                      aria-describedby="passwordHelpBlock"
                      onChange={onChangeDetails}
                      value={details}
                  />
                  <Form.Label htmlFor="inputPhone5" className='my-1'>Phone</Form.Label>
                  <Form.Control
                      type="text"
                      id="inputPhone5"
                      aria-describedby="passwordHelpBlock"
                      onChange={onChangePhone}
                      value={phone}
                  />
                  <Form.Label htmlFor="inputPhone5" className='my-1'>City</Form.Label>
                  <Form.Control
                      type="text"
                      id="inputPhone5"
                      aria-describedby="passwordHelpBlock"
                      onChange={onChangeCity}
                      value={city}
                  />
                  <Form.Label htmlFor="inputPhone5" className='my-1'>Postal</Form.Label>
                  <Form.Control
                      type="text"
                      id="inputPhone5"
                      aria-describedby="passwordHelpBlock"
                      onChange={onChangePostal}
                      value={postal}
                  />
              </Col>
          </Row>
          <Row>
              <Col sm="8" className="d-flex mt-2">
                  <button style={{backgroundColor:"black"}} onClick={onEdit}>Save Address</button>
              </Col>
          </Row>
          <ToastContainer />
      </div>
  )
}

export default UserEditAdderss