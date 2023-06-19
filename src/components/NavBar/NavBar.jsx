import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  const logoImg = process.env.PUBLIC_URL + "/assets/img/Makalu-logo.png";
  return (
    <Navbar bg="light" expand="lg" className="shadow-lg">
      <div className="container-fluid">
        <div className="d-block d-lg-none">
          <Link to={"/"}>
            <Navbar.Brand>
              <img
                src={logoImg}
                alt="Logo"
                className="d-inline-block align-text-top logo-header"
              />
            </Navbar.Brand>
          </Link>
        </div>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mx-auto mb-2 mb-lg-0 text-center">
            <Nav.Link as={NavLink} to={"/"} className="mx-4 nav-link-bold">
              Inicio
            </Nav.Link>

            <NavDropdown title="Productos" id="basic-nav-dropdown" className="mx-4 nav-link-bold">
              <NavDropdown.Item as={NavLink} to={"/categoria/fotocopiadoras"}>
                Fotocopiadoras
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={"/categoria/impresoras"}>
                Impresoras
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={"/categoria/tonners"}>
                Tonners
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to={"/"} className="mx-4 nav-link-bold"> 
              Servicios
            </Nav.Link>
          </Nav>
          <div className="d-none d-lg-block">
            <Link to={"/"}>
              <Navbar.Brand>
                <img
                  src={logoImg}
                  alt="Logo"
                  className="d-inline-block align-text-top logo-header"
                />
              </Navbar.Brand>
            </Link>
          </div>
          <Nav className="mx-auto mb-2 mb-lg-0 text-center">
            <Nav.Link as={NavLink} to={"/"} className="mx-4 nav-link-bold">
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/"} className="mx-4 nav-link-bold">
              Contacto
            </Nav.Link>
            <li className="nav-item mx-5">
              <Link to={"/carrito"}>
                <CartWidget />
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
