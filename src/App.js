import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Products from './components/Pages/Products';
import Countries from './components/Pages/Countries';
import About from './components/Pages/About';
  
function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/Products' element={<Products/>} exact />
          <Route path='/Countries' element={<Countries/>} exact />
          <Route path='/About' element={<About/>} exact />
        </Routes>
    </Router>
  );
}
  
export default App;
