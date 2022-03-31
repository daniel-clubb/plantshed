import React from "react";
//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import Countries from "./components/Pages/Countries";
import AboutUs from "./components/Pages/AboutUs";
//App CSS
import "./App.css";
import Checkout from "./components/Pages/Checkout";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
<<<<<<< HEAD
        <Header />
=======
        <>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
              <Navbar.Brand as={Link} to="/" exact="true">
                <img src={logo} alt="Plantshed logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <div className="nav-pages">
                    <Nav.Link
                      className="products"
                      as={Link}
                      to="/Products"
                      exact="true"
                    >
                      Products
                    </Nav.Link>
                    <Nav.Link
                      className="countries"
                      as={Link}
                      to="/Countries"
                      exact="true"
                    >
                      Countries
                    </Nav.Link>
                    <Nav.Link
                      className="aboutus"
                      as={Link}
                      to="/AboutUs"
                      exact="true"
                    >
                      About Us
                    </Nav.Link>
                  </div>

                  <Nav.Link
                    className="checkout"
                    as={Link}
                    to="/Checkout"
                    exact="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cart"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
>>>>>>> c99793d06f9046c81b1d19f16bc0ea2ae24e79b9
        <div className="routes">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/Products" element={<Products />} exact />
            <Route path="/Countries" element={<Countries />} exact />
            <Route path="/AboutUs" element={<AboutUs />} exact />
            <Route path="/Checkout" element={<Checkout />} exact />
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
