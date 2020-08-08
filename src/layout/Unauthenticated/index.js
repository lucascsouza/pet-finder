import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Main() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">PetFinder</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/pets">Buscar Pets</Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link href="/login">Entrar</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/sign-up">Cadastrar</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Main;
