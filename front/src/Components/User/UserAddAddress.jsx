import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import AddAddressHook from '../../hook/address/add-address-hook'
import { ToastContainer } from 'react-toastify';
const UserAddAddress = () => {

    const [alias, details, phone, city, postal, onChangeAlias, onChangeDetails, onChangePhone, onChangeCity, onChangePostal, onAddAddress] = AddAddressHook();
    return (
        <div>
            <Row className="justify-content-start ">
                <h2>Add New Address</h2>
                <Col sm="8">
                    <Form.Label htmlFor="inputAddress5" className='my-1'>Address</Form.Label>
                    <Form.Control
                        type="text"
                        id="inputAddress5"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Address Description(Home-Work)"
                        onChange={onChangeAlias}
                        value={alias}
                    />
                    <Form.Label htmlFor="inputAddress6" className='my-1'>Address Details</Form.Label>
                    <Form.Control
                        type="textarea"
                        as="textarea"
                        id="inputAddress6"
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
                    <Form.Label htmlFor="inputCity5" className='my-1'>City</Form.Label>
                    <Form.Control
                        type="text"
                        id="inputCity5"
                        aria-describedby="passwordHelpBlock"
                        placeholder='Ex : Cairo'
                        onChange={onChangeCity}
                        value={city}
                    />
                    <Form.Label htmlFor="inputPostal5" className='my-1'>Postal Code</Form.Label>
                    <Form.Control
                        type="text"
                        id="inputPostal5"
                        aria-describedby="passwordHelpBlock"
                        onChange={onChangePostal}
                        value={postal}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end mt-2">
                    <button className="btn-dark" style={{ backgroundColor: "black" }} onClick={onAddAddress}>Add Address</button>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    )
}

export default UserAddAddress