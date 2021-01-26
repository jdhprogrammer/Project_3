import React from "react";
import {useStoreContext} from "../../utils/GlobalState";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"


function NavBar(props) {
  const [store] = useStoreContext();

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">TheAppForMe</Navbar.Brand>
      {/* {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>} */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Notes</Nav.Link>
          <Nav.Link href="#link">Fitness</Nav.Link>
          <Nav.Link href="#link">Budget</Nav.Link>
          <Nav.Link href="#link">Food</Nav.Link>
          <Nav.Link href="#link">Photos</Nav.Link>
          <Nav.Link href="#link">Memories</Nav.Link>
          {props.NavLinks}
        </Nav>
</Navbar>
  );
}

export default NavBar;
