import axios from 'axios';
import React, { useEffect } from 'react'; // Import useEffect
import { useNavigate } from 'react-router-dom'; 

const DashBoard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:3000/auth/verify')
      .then(res => {
        if (res.data.status) { // Fix typo: resizeBy -> res
          // Handle successful verification
        } else {
          navigate('/');
        }
      })
      .catch(error => {
        console.error("Error verifying authentication:", error);
        // Handle potential errors during the request
      });
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    <div>DashBoard</div>
  );
}

export default DashBoard;