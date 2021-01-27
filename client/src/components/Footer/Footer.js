import React, {useState, useEffect} from "react";

import {Container, Row, Col, Navbar, Nav, OverlayTrigger, Tooltip} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux"
import ta4m_icon from "../../pages/Landing/img/theApp4me/apple-touch-icon.png"

const Footer = () => {

  const {user: currentUser} = useSelector((state) => state.auth);


  return (
    <footer className="footer px-0 px-lg-3">
      <Container fluid>
        <Row className="mt-4">
          <Col className="m-0">
            <p className="copyright mx-auto mt-0 mb-0 text-center">
              © {new Date().getFullYear()}{" "}
              <a href="http://jdhprogrammer.com">David Harris</a>, a MERN Stack Application
            </p>
          </Col>
        </Row>
      </Container>
      <Navbar className="mb-2" style={{"padding": "10px", "height": "80"}} >
        <Navbar.Brand className="p-0">
          <Link to={"/"} className="navbar-brand m-0 p-0 pl-3">
            theApp4me
                            </Link>
        </Navbar.Brand>

        <Nav >
          <Nav.Link className=" mr-auto ml-3">
            <Link to={"/user"} className="nav-link">My Dashboard</Link>
          </Nav.Link>
        </Nav>
        {currentUser ? (
          <Nav className="ml-auto mr-3">
            <Nav.Link>
              <OverlayTrigger
                key={"top"}
                placement={"top"}
                overlay={
                  <Tooltip classname="p-2" id={`tooltip-top`}>
                    Account Information
                                            </Tooltip>
                }>
                <Link to={"/profile"} className="nav-link">{currentUser.username}</Link>
              </OverlayTrigger>
            </Nav.Link>

          </Nav>
        ) : (
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to={"/login"} className="nav-link">Login</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/register"} className="nav-link">Sign Up</Link>
              </Nav.Link>
            </Nav>
          )}
        <img src={ta4m_icon} className="shadow-sm float-right mr-3" style={{"width": "50px", "border-radius": "10px"}} />

      </Navbar>

    </footer>
  );
}

export default Footer;
