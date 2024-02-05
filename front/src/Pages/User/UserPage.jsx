import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import UserSideBar from '../../Components/User/UserSideBar';
import { Route, Routes } from 'react-router-dom';
import UserAllProductCom from '../../Components/User/UserAllProductCom';
import UserFavorite from '../../Components/User/UserFavorite';
import UserAdresses from '../../Components/User/UserAdresses';
import UserProfile from '../../Components/User/UserProfile';
import UserAddAddress from '../../Components/User/UserAddAddress';
import UserEditAdderss from '../../Components/User/UserEditAdderss';
const UserPage = () => {
  return (
      <Container className="py-3">
          <Row>
              <Col sm="12" md="3">
                  <UserSideBar />
              </Col>
              <Col sm="12" md="9">
                  <Routes>
                      <Route path="/" element={<UserAllProductCom />} />
                      <Route path="/favorite" element={<UserFavorite />} />
                      <Route path="/addresses" element={<UserAdresses />} />
                      <Route path="/profile" element={<UserProfile />} />
                      <Route path="/add-address" element={<UserAddAddress />} />
                      <Route path="/edit-address/:id" element={<UserEditAdderss />} />

                  </Routes>
              </Col>
          </Row>
      </Container>
  )
}

export default UserPage