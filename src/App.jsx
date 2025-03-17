import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Home from './Pages/Home';
import Popup from './Sections/popup';

function App() {
  return (
    <Router>
      <div>
        <Outlet />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<Popup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
