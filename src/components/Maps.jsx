import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import './css/Maps.css';

import { NavLink } from 'react-router-dom';
import { useRef } from 'react';


const Maps = () => {
  const navigationRef = useRef();

  const [markerPosition, setMarkerPosition] = useState(null);
  const [isMarkerEnabled, setIsMarkerEnabled] = useState(false);
  var coordinates =null;
  var gpslocation = null;
  var givenCoordinates = null;


  function getLocation(){
    // Retrieve coordinates from sessionStorage
    const retrievedJsonString = sessionStorage.getItem('coordinates');
    const coord = JSON.parse(retrievedJsonString);
    
    if (Array.isArray(coord) && coord.length === 2) {
      coordinates =coord;
      // setCoordinates(coordinates);
    }


    const gpsData = sessionStorage.getItem('gpslocation');
    const userLocation = JSON.parse(gpsData);

    if (Array.isArray(userLocation) && userLocation.length === 2) {
      gpslocation = userLocation;
      // setCoordinates(gpslocation);
    }
  } // Empty dependency array ensures this runs once on component mount

  function setCoordinates() {
    givenCoordinates = coordinates ? coordinates : gpslocation;
    // sessionStorage.setItem('coordinates', JSON.stringify(givenCoordinates));
    // console.log(givenCoordinates);
  }
  const Markers = () => {
    useMapEvents({
      click(e) {
        if (isMarkerEnabled) {
          setMarkerPosition(e.latlng);
          // console.log(e.latlng);
        }
      },
    });

    return isMarkerEnabled && markerPosition !== null ? (
      <Marker position={markerPosition} />
    ) : null;

  };

  const handleSubmit = () => {
    var jsonCoordinates = null;
    if(isMarkerEnabled){
      if(markerPosition){
        jsonCoordinates = {"latitude": markerPosition.lat, "longitude": markerPosition.lng};
        sessionStorage.setItem('givencoordinates', JSON.stringify(jsonCoordinates));
        sessionStorage.removeItem('coordinates');
        sessionStorage.removeItem('gpslocation');
        navigationRef.current.click();
      }
      else{
        alert("Please select a location on the map or Disable Marker");
      }
    }
    else{
      jsonCoordinates = {"latitude": givenCoordinates[0], "longitude": givenCoordinates[1]};
      sessionStorage.setItem('givencoordinates', JSON.stringify(jsonCoordinates));
      sessionStorage.removeItem('coordinates');
      sessionStorage.removeItem('gpslocation');
      navigationRef.current.click();
    }
    console.log(jsonCoordinates);
  }
  return (
    <div>
      <div className="shape-maps-1 "></div>
      <div className="shape-maps-2"></div>
      <div className="shape-maps-3"></div>
    <div className="maps-body">
      {getLocation()}
      <div className="maps-container shadow-2xl shadow-cyan-600/50 ">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
          <p className="maps-heading underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            Map
          </p>
        </h1>
        <div className="maps-content">
          <MapContainer className="map" center={(coordinates ? coordinates : gpslocation) ? (coordinates ? coordinates : gpslocation) : [20.5937, 78.9629]  } zoom={(coordinates ? coordinates : gpslocation) ? (coordinates ? 13 : 16) : 4  } style={{ background: 'transparent' }}>
            <TileLayer
              className="map-tile"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
            <Markers />
          </MapContainer>
        </div>
              {setCoordinates()}
        {/* <h1>Your Given Location</h1> */}
          <h1 className='info-map text-white font-semibold font-sans'>The location you provided in the last section is shown in this map section.</h1>
        <h1 className='info-map text-gray-500 font-normal font-sans'>*You can Enable Marker to mark a specific location on the map</h1>
        <div className="map-search">
          <button
            id="toggleSelectModeButton"
            className={isMarkerEnabled ? 'bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-700 rounded' : 'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'} 
            onClick={() => { setIsMarkerEnabled(!isMarkerEnabled); 
              if(isMarkerEnabled){
                setMarkerPosition(null);
              }
            }}
          >
            {isMarkerEnabled ? 'Disable Marker' : 'Enable Marker'}
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-800 hover:border-blue-600 rounded"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
    <NavLink to="/dashboard" ref={navigationRef} ></NavLink>
    </div>
  );
};

export default Maps;