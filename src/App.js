import React from "react";
//Router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//bootstrap
import { Navbar, Nav, Container } from "react-bootstrap";
//Pages
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import Countries from "./components/Pages/Countries";
import AboutUs from "./components/Pages/AboutUs";
//Plantshed Logo
import logo from "./images/plantshedLogo.png";
//App CSS
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
              <Navbar.Brand as={Link} to="/" exact="true">
                <img src={logo} alt="Plantshed logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">              
                <Nav className="me-auto">
                  <Nav.Link className='products' as={Link} to="/Products" exact="true">
                    Products
                  </Nav.Link>
                  <Nav.Link className='countries' as={Link} to="/Countries" exact="true">
                    Countries
                  </Nav.Link>
                  <Nav.Link className='aboutus' as={Link} to="/AboutUs" exact="true">
                    About Us
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/Products" element={<Products />} exact />
            <Route path="/Countries" element={<Countries />} exact />
            <Route path="/AboutUs" element={<AboutUs />} exact />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

/*<Form className="d-flex">
<FormControl
type="search"
placeholder="Search"
className="me-2"
aria-label="Search"
/>
<Button variant="outline-success">Search</Button>
</Form>
*/