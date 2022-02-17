import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
  
function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>} exact />
          {/* <Route path='/Products' element={<About/>} />
          <Route path='/Countries' element={<Countries/>} />
          <Route path='/About' element={<About/>} /> */}
        </Routes>
    </Router>
  );
}
  
export default App;
