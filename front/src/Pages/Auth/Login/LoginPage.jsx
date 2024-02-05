import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import LoginHook from '../../../hook/Auth/Login-hook';
import { useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { ToastContainer } from 'react-toastify';
const LoginPage = () => {
  const [passType, setPassType] = useState(true);
  const [email, password, loading, onChangeEmail, onChangePassword, onSubmit] = LoginHook();

  const pasIconClick = () => {
    setPassType(!passType)
  }
  return (
    <Container className="mt-5 mb-5">
      <Row className="container justify-content-center align-items-center" >
        <Form className='col-12 col-md-6'>
          <h2 className="text-center">Log In</h2>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
            value={email}
            onChange={onChangeEmail}
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3 password-label" onChange={onChangePassword} value={password}>
            <Form.Control type={`${passType === true ? "password" : "text"}`} placeholder="Password" />
            {
              passType === false
                ? <BsEyeFill className='eye' style={{ display: `${password !== "" ? "block" : "none"}` }} onClick={pasIconClick} />
                : <BsEyeSlashFill className='eye' style={{ display: `${password !== "" ? "block" : "none"}` }} onClick={pasIconClick} />
            }
          </FloatingLabel>
          <Button variant="dark" type="submit" className="w-100" onClick={onSubmit}>
            Submit
          </Button>
          <div className='w-100 text-center py-1'>Have No Account ? <Link to="/register">Register</Link> </div>
        </Form>
      </Row>
      <ToastContainer />
    </Container>

  )
}

export default LoginPage