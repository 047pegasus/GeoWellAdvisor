import { useState } from 'react'
import './App.css'
import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Project from './components/project';
import About from './components/About';
import ScrollToTop from './ScrollToTop';
import Maps from './components/Maps';
import 'leaflet/dist/leaflet.css';
import Mobile from './components/mobile-screen';
import Contact from './components/Contact/index';
import Dashboard from './components/Dashboard/src/pages/Dashboard/Dashboard';
import Layout from './components/Dashboard/src/components/Layout/Layout';
// import MapComponent from './components/testmap';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className='body-app' >
          <ScrollToTop />
            <nav className='nav-bar'>
                  <NavBar />
            </nav>
    
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/project/maps" element={<Maps />} />
            <Route path="/dashboard" element={<Layout/>}/>
            <Route path="/dashboard/data" element={<Dashboard/>}/>

            <Route path="/dashboard" element={<Layout/>}/>
            <Route path="/dashboard/data" element={<Dashboard/>}/>


          </Routes>
          <Footer/>

      </div>
      <div className="body-mobile">
        <Mobile />
      </div>
    </>
  )
}

export default App
