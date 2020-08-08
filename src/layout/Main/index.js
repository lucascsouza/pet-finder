import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Main() {
  const logout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">PetFinder</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/pets">Buscar Pets</Nav.Link>
            <Nav.Link href="/user/pets">Meus Pets</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Main;
