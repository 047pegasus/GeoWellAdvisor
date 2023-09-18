import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import './css/Maps.css';

const Maps = () => {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [isMarkerEnabled, setIsMarkerEnabled] = useState(false);
  var coordinates =null;
  var gpslocation = null;


  function getLocation(){
    // Retrieve coordinates from sessionStorage
    const retrievedJsonString = sessionStorage.getItem('coordinates');
    const coord = JSON.parse(retrievedJsonString);
    
    if (Array.isArray(coord) && coord.length === 2) {
      coordinates =coord;
    }


    const gpsData = sessionStorage.getItem('gpslocation');
    const userLocation = JSON.parse(gpsData);

    if (Array.isArray(userLocation) && userLocation.length === 2) {
      gpslocation = userLocation
    }
  } // Empty dependency array ensures this runs once on component mount

  const Markers = () => {
    useMapEvents({
      click(e) {
        if (isMarkerEnabled) {
          setMarkerPosition(e.latlng);
          console.log(e.latlng);
        }
      },
    });

    return markerPosition === null ? null : <Marker position={markerPosition} />;
  };

  const handleSubmit = () => {
    sessionStorage.removeItem('coordinates');
    sessionStorage.removeItem('gpslocation');
    setisSubmitted(true);
    window.scrollTo(0, 0);
    window.location.href = "/project/dashboard";

  }
  return (
    <div className="maps-body">
      {getLocation()}
      <div className="maps-container shadow-2xl shadow-cyan-500/50">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <span className="maps-heading underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            Map
          </span>
        </h1>
        <div className="maps-content">
          <MapContainer className="map" center={coordinates ? coordinates : gpslocation} zoom={coordinates ? 13 : 16} style={{ background: 'transparent' }}>
            <TileLayer
              className="map-tile"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Markers />
          </MapContainer>
        </div>
        <h1>Your Given Location</h1>
        <div className="map-search">
          <button
            id="toggleSelectModeButton"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={() => setIsMarkerEnabled(!isMarkerEnabled)}
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
  );
};

export default Maps;
