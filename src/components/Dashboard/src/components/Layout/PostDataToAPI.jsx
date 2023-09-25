import React, { useState, useEffect } from 'react';
import './PostDataToAPI.css'
import Dashboard from '../../pages/Dashboard/Dashboard';


const PostDataToAPI = ()=> {
    const [postData, setPostData] = useState({});
    const [error, setError] = useState(null);


    const jsonCoordinates = sessionStorage.getItem('givencoordinates');
    const coordinates = JSON.parse(jsonCoordinates);
    const requestData = {
      "latitude": coordinates["latitude"],
      "longitude": coordinates["longitude"]
    };
  
    const [isLoading, setIsLoading] = useState(true); // Add loading state
    const [data, setData] = useState(null);
  
    const fetchData = async () => {
      try {
        const response = await fetch('https://047pegasus.pythonanywhere.com/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const responseData = await response.json();
        setData(responseData);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false); // Set loading state to false when the request is complete
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    // Render loading text while isLoading is true
    if (isLoading) {
      return <div className='loader-body'> <div class="spinner">
      <h3><span class="visually-hidden">visuallyhidden</span></h3>
    </div>
    </div>

    }
  
    // Render data or error based on state
    if (data) {
    //   return <div className="postdata">Data Received: {JSON.stringify(data)}</div>;
    return <Dashboard details={data} />;

    } else if (error) {
    //   return <div className="postdata">Error: {error}</div>;
    return <Dashboard/>;

        
    } else {
        return null; // Render nothing if neither data nor error
        }
    }

export default PostDataToAPI;