import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { FiCheckCircle } from "react-icons/fi"
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FiXCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import SignUpHook from '../../../hook/Auth/SignUp-hook';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

const Register = () => {
    const [name, email, password, confirmPassword, phone,
        onChangeName, onChangeEmail, onChangePassword, onChangeConfirmPassword, onChangePhone, loading, onSubmit] = SignUpHook();
    const [passType, setPassType] = useState(true);
    const [confirmpassType, setConfirmPassType] = useState(true);

    const pasIconClick = () => {
        setPassType(!passType)
    }
    const confirmPasIconClick = () => {
        setConfirmPassType(!confirmpassType)
    }
    return (
        <Container>

            <Row className="container justify-content-center align-items-center" style={{ height: "70vh" }}>
                <Form className='col-12 col-md-6'>
                    <h2 className="text-center">Sign Up</h2>
                    <FloatingLabel
                        controlId="floatingName"
                        label="User Name"
                        className="mb-3"
                        value={name}
                        onChange={onChangeName}
                    >
                        <Form.Control type="text" placeholder="name" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                        value={email}
                        onChange={onChangeEmail}
                    >
                        <Form.Control type="email" placeholder="name@example.com" />

                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3" onChange={onChangePhone} value={phone}>
                        <Form.Control type="text" placeholder="Phone" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingConfirm" label="Password" className="mb-3 password-label" onChange={onChangePassword} value={password}>
                        <Form.Control type={`${passType === true ? "password" : "text"}`} placeholder="Password" />
                        {
                            passType === false
                                ? <BsEyeFill className='eye' style={{ display: `${password !== "" ? "block" : "none"}` }} onClick={pasIconClick} />
                                : <BsEyeSlashFill className='eye' style={{ display: `${password !== "" ? "block" : "none"}` }} onClick={pasIconClick} />
                        }
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Confirm Password" className="mb-3 password-label" onChange={onChangeConfirmPassword} value={confirmPassword}>
                        <Form.Control type={`${confirmpassType === true ? "password" : "text"}`} placeholder="Password" />
                        {
                            confirmpassType === false
                                ? <BsEyeFill className='eye' style={{ display: `${confirmPassword !== "" ? "block" : "none"}` }} onClick={confirmPasIconClick} />
                                : <BsEyeSlashFill className='eye' style={{ display: `${confirmPassword !== "" ? "block" : "none"}` }} onClick={confirmPasIconClick} />
                        }
                        <Form.Text className="text-muted">
                            {
                                password !== "" && confirmPassword !== "" ?
                                    password !== confirmPassword ? <p><FiXCircle className='text-danger' /> Not Equal </p> : <p><FiCheckCircle className='text-success' />Equal</p> : <></>
                            }
                        </Form.Text>
                    </FloatingLabel>



                    <Button variant="dark" type="submit" className="w-100" onClick={onSubmit}>
                        Submit
                    </Button>
                    <div className='w-100 text-center py-2'>Have Account ? <Link to="/login">Login</Link> </div>
                </Form>
            </Row>
            <ToastContainer />
        </Container>

    )
}

export default Register