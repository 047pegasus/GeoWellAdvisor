import './css/project.css'
import { List, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import React, { useState } from 'react';
import districts  from '../assets/districts.json';
import blocks  from '../assets/blocks.json';
import { list } from 'postcss';
import Maps from './Maps';
import ScrollToTop from '../ScrollToTop';
import { MapContainer} from 'react-leaflet';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';



const labelStyles = {
  color: 'white', // Set the label color to white
};

function Project() {

  const navigationRef = useRef();
 

  const statesInIndia = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];


  const [location, setLocation] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selecteddistrict, setSelecteddistrict] = useState(null);
  const [selectedblock, setblock] = useState(null);
  const [ListOfDistricts, setListOfDistricts] = useState([]);
  const [ListOfBlocks, setListOfBlocks] = useState([]);
  const [Coordinates, setCoordinates] = useState([]);
  const [isSubmitted, setisSubmitted] = useState(false);


  var choosenState = '';
  var block =[];

  const handleStateChange = (event, value) => {
    setListOfDistricts([]);
    setSelectedState(value);
    if(selectedState!=null && selectedState!='' && selectedState!=undefined){
      choosenState = value;
      setListOfDistricts(prev=> (showDistricts(selectedState)));
      // console.log(value);
    }
  };

  const showDistricts = (selectedState) => {
    if (districts.hasOwnProperty(`${selectedState}`)) {
      // console.log(districts[`${selectedState}`]);
      return districts[`${selectedState}`];
    } else {
        
    }
  }

  const handleDistrictChange = (event, newValue) => {
    setListOfBlocks([]);
    setSelecteddistrict(newValue);
    var choosenState;
    for ( let key in statesInIndia) {
      if(districts[`${statesInIndia[key]}`] == ListOfDistricts){
        choosenState = statesInIndia[key];
      }
    }
    if(selecteddistrict!=null && selecteddistrict!='' && selecteddistrict!=undefined){
      var blocks = showBlocks(choosenState, selecteddistrict);
      setListOfBlocks(prev=> (blocks['sub_divisions']));
      const jsonString = JSON.stringify(blocks);
      sessionStorage.setItem('blocksandcoordinates', jsonString);
      // console.log("blocks:"+blocks);
    }
  };


  const showBlocks = (choosenState, selecteddistrict) => {
    if (blocks.hasOwnProperty(`${choosenState}`)) {
      if(blocks[`${choosenState}`].hasOwnProperty(`${selecteddistrict}`)){
        // console.log(blocks[`${choosenState}`][`${selecteddistrict}`]);
        return blocks[`${choosenState}`][`${selecteddistrict}`];
      }
    } else {

    }
  }

  const handleBlockChange = (event, newValue) => {
    setblock(newValue);
    if(selectedblock!=null && selectedblock!='' && selectedblock!=undefined){
      const retrievedJsonString = sessionStorage.getItem('blocksandcoordinates');
      const blocks = JSON.parse(retrievedJsonString);
      // console.log(selectedblock);
      const index = blocks['sub_divisions'].indexOf(`${selectedblock}`);
      // console.log(index);
      const coordinates = blocks['coordinates'][index];
      // console.log(coordinates);
      setCoordinates(prev=> (coordinates));
      const jsonString = JSON.stringify(coordinates);
      sessionStorage.setItem('coordinates', jsonString);
    }
  };

const handleSubmit = (event) => {
  event.preventDefault();
  if(Coordinates.length!=0){
    setisSubmitted(true);
    navigationRef.current.click();

  }
  else{
    alert("Please select your state, district and block");
  }
}

  const getLocationFromDevice = () => {
    sessionStorage.removeItem('coordinates');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setLocation(userLocation);
          const locationdata = [];
          locationdata.push(userLocation.latitude);
          locationdata.push(userLocation.longitude);
          const JSONstring = JSON.stringify(locationdata);
          sessionStorage.setItem('gpslocation',JSONstring);
          setCoordinates(prev=>(locationdata));
        },
        (error) => {
          console.error(error.message);
          // Handle error here
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser.');
      // Handle lack of support for geolocation
      alert('Geolocation is not supported by your browser, Please fill the details of state, district and block');
    }
  };

  return (
    <>
    <ScrollToTop />
    {isSubmitted ?  <Maps/> : <div>
      <div className="shape-1 "></div>
      <div className="shape-2"></div>
      <div className="shape-3"></div>
      <div className="shape-4"></div>
     
      <div className="body-project">
        <h2 className="text-4xl font-bold dark:text-white">Our Project</h2>
        
        <div className="location-options">
          <p className="mb-3 text-lg text-gray-300 md:text-xl dark:text-gray-100">
            Allow us to get your current Location from your Device or Select it manually
          </p>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-green-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 transition-all duration-200"
            onClick={getLocationFromDevice}
          >
            Get my Location from Device
          </button>

          {location && (
            <div>
              <p>Now you can Submit, We have your Location</p>
            </div>
          )}

          <h2 className="text-3xl font-extrabold dark:text-white">OR</h2>
          
          <form className='form'>
            <div className='location-input'>
            <div className='combobox'>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-white dark:text-gray-200"
              >
                Select Your State:
              </label>
              <Autocomplete disablePortal id="state-autocomplete" onChange={handleStateChange} onSelect={handleStateChange} options={statesInIndia} sx={{ width: 300, '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white !important' }, '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#009dff !important' } }} renderInput={(params) => <TextField {...params} label="Select State" InputLabelProps={{ style: { color: 'white' } }} inputProps={{ ...params.inputProps, style: { color: 'white' } }}   />} />

            </div>
            <div className='combobox'>
              <label
                htmlFor="district"
                className="block text-sm font-medium text-white dark:text-gray-200"
              >
                Select Your District:
              </label>
              <Autocomplete disablePortal id="state-autocomplete"  onChange={handleDistrictChange} onSelect={handleDistrictChange} options={ListOfDistricts} sx={{ width: 300, '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white !important' }, '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#009dff !important' } }} renderInput={(params) => <TextField {...params} label="Select District" InputLabelProps={{ style: { color: 'white' } }} inputProps={{ ...params.inputProps, style: { color: 'white' } }} />} />

            </div>
            <div className='combobox'>
              <label
                htmlFor="block"
                className="block text-sm font-medium text-white dark:text-gray-200"
              >
                Select Your Block:
              </label>
              <Autocomplete disablePortal id="state-autocomplete" onChange={handleBlockChange} onSelect={handleBlockChange} options={ListOfBlocks} sx={{ width: 300, '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white !important' }, '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#009dff !important' } }} renderInput={(params) => <TextField {...params} label="Select Block" InputLabelProps={{ style: { color: 'white' } }} inputProps={{ ...params.inputProps, style: { color: 'white' } }} />} />
              
            </div>
            </div>
 
            <button type="submit" onClick={handleSubmit} class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>
         
        </div>
    
      </div>
     
      <NavLink to="/project/maps" ref={navigationRef} ></NavLink>
      </div>

    }

      
    </>
  );
}

export default Project;
