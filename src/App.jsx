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
// import MapComponent from './components/testmap';


function App() {

  return (
    <>
      <div className='body-app' >
            <ScrollToTop />
          <nav>
            <NavBar />
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/project/maps" element={<Maps />} />
          </Routes>
          <Footer/>

      </div>
      <div className="body-mobile">
        <Mobile />
        <Footer />
      </div>
    </>
  )
}

export default App
