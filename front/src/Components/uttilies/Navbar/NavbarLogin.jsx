import "./NavbarLogin.scss";
import logo from "../../../assets/images/logo.png";
import { FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarSearchHook from "../../../hook/search/navbar-search-hook";
import { NavDropdown } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import GetAllUserCartHook from "../../../hook/cart/get-all-user-cart-hook";
const NavbarLogin = () => {
  const [onChangeWord,] = NavbarSearchHook();
  let word = ""
  if (sessionStorage.getItem("searchedWord") !== null) {
    word = sessionStorage.getItem("searchedWord");
  }
  const [user, setUser] = useState("")

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")))
    } else {
      setUser("")
    }
  },[])

  

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
  }

  const [allCart, cartNumber] = GetAllUserCartHook();


  return (
    <div className="dark">
      <Container>
        <Navbar expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt="Logo Navbae" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Form className="d-flex">
                <Form.Control
                  value={word}
                  onChange={onChangeWord}
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
              <Nav className="me-auto">
                {
                  user!=="" ? (
                    <NavDropdown title={user.name} id="basic-nav-dropdown">
                      {
                        user.role === "admin" ? (<NavDropdown.Item href="/admin">Admin Dashboard</NavDropdown.Item>) : (<NavDropdown.Item href="/user/profile">Profile</NavDropdown.Item>)
                      }
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={logOut} href="/">Log Out</NavDropdown.Item>
                    </NavDropdown>
                  ) :
                    (
                      <Nav.Link href='/login'
                      className="nav-text d-flex  justify-content-center align-items-center">
                      <FaUser />
                      <p className="mb-0" style={{ color: "white" }}>Log In</p>
                    </Nav.Link>)
                }
                <Nav.Link href="/cart" className="cart">
                  <span className="count">{cartNumber }</span>
                  <AiOutlineShoppingCart className="material-icons" />
                </Nav.Link>

                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  )
}

export default NavbarLogin