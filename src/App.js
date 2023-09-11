import Navbar from './components/layout/Navbar';
import './App.css';
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

function App() {
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const headerElement = document.getElementById("header");
    const footerElement = document.getElementById("footer");

    if (!headerElement) {
      console.error("Header element not found.");
    }

    if (!footerElement) {
      console.error("Footer element not found.");
    }

    const headerHeight = headerElement?.clientHeight || 0;
    const footerHeight = footerElement?.clientHeight || 0;
    const calculatedContentHeight =
      window.innerHeight - (headerHeight + footerHeight);

    setContentHeight(calculatedContentHeight);
  }, []);
  return (
    <div >
  <Navbar/>
 
  <div style={{ minHeight: `${contentHeight}px` }}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
  <Footer/>

    </div>
  );
}

export default App;
