import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './css/NavBar.css';
import logo from '../assets/logo.jpg';


function NavBar() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

const GetStartedButton = () => {
  const currentPath = window.location.pathname;

  // Check if the currentPath is one of the specified paths
  if (currentPath === '/project' || currentPath === '/dashboard' || currentPath === '/maps') {
    return (
      <NavLink
        to="#"
        className={`text-white opacity-0 pointer-events-none focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-opacity-90 dark:hover:bg-opacity-100 dark:focus:ring-gray-800 ${activeLink === 'project' ? 'active' : ''}`}
        onClick={(e) => e.preventDefault()} // Prevent navigation
        style={{ backgroundImage: 'radial-gradient(at right top, rgb(0, 0, 0), rgb(75, 85, 99), rgb(63, 63, 70))' }}
      >
        GET STARTED
      </NavLink>
    );

  }

  // If the currentPath is not one of the specified paths, return the JSX code
  return (
    <NavLink
      to="/project"
      className={`text-white hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-opacity-90 dark:hover:bg-opacity-100 dark:focus:ring-gray-800 ${activeLink === 'project' ? 'active' : ''}`}
      onClick={() => handleLinkClick('project')}
      style={{ backgroundImage: 'radial-gradient(at right top, rgb(0, 0, 0), rgb(75, 85, 99), rgb(63, 63, 70))' }}
    >
      GET STARTED
    </NavLink>
  );
};



  return (
    <>
      <nav className="nav-body bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 backdrop-filter backdrop-blur-lg bg-opacity-40">

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="/"
            exact
            className={`flex items-center ${activeLink === 'home logoandname' ? 'active logoandname' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
                <div className="logo-nav">
                  <img width='40' height='40' src={logo} className="logo-mobile"/>
                </div>
                <h1 className="mb-2 text-lg font-extrabold text-900 dark:text-white md:text-2xl lg:text-3xl 
            sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                <span className="span-app  text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  GeoWellAdvisor
                </span>{' '}
                AI
              </h1>

          </NavLink>
          <div className="flex md:order-2">
            <GetStartedButton />
            {/* <NavLink
              to="/project"
              className={`text-white hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-opacity-90 dark:hover:bg-opacity-100 dark:focus:ring-gray-800 ${activeLink === 'project' ? 'active' : ''}`}
              onClick={() => handleLinkClick('project')}
              style={{ backgroundImage: 'radial-gradient(at right top, rgb(0, 0, 0), rgb(75, 85, 99), rgb(63, 63, 70))' }}
            >
              GET STARTED
            </NavLink> */}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-opacity-100 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ${activeLink === '' ? 'no-active-link' : ''}`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-opacity-0 dark:bg-opacity-0 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  exact
                  className={`block py-2 pl-3 pr-4 text-white rounded md:bg-opacity-0 md:text-white md:p-0 md:dark:text-gray-100 hover:text-blue-700 ${activeLink === 'home' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('home')}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={`block py-2 pl-3 pr-4 text-white rounded md:bg-opacity-0 md:text-white md:p-0 md:dark:text-gray-100 hover:text-blue-700 ${activeLink === 'about' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('about')}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/project"
                  className={`block py-2 pl-3 pr-4 text-white rounded md:bg-opacity-0 md:text-white md:p-0 md:dark:text-gray-100 hover:text-blue-700 ${activeLink === 'project' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('project')}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={`block py-2 pl-3 pr-4 text-white rounded md:bg-opacity-0 md:text-white md:p-0 md:dark:text-gray-100 hover:text-blue-700 ${activeLink === 'contact' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('contact')}
                >
                  Developers
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
