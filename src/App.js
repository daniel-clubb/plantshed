import React from "react";
//Router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//bootstrap
import { Navbar, Nav, Container } from "react-bootstrap";
//Pages
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import Countries from "./components/Pages/Countries";
import About from "./components/Pages/About";
//Plantshed Logo
import logo from "./images/plantshedLogo.png";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <>
          <Navbar bg="light" variant="light">
            <Container>
              <Navbar.Brand as={Link} to="/" exact='true'>
                <img src={logo} alt="Plantshed logo" />
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/Products" exact='true'>
                  Products
                </Nav.Link>
                <Nav.Link as={Link} to="/Countries" exact='true'>
                  Countries
                </Nav.Link>
                <Nav.Link as={Link} to="/About" exact='true'>
                  About
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/Products" element={<Products />} exact />
            <Route path="/Countries" element={<Countries />} exact />
            <Route path="/About" element={<About />} exact />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
