import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleLogout = () => {
    axios.get('http://localhost:3000/auth/logout')
      .then(res => {
        if (res.data.status) {
          navigate('/login');
        }
      }).catch(err => {
        console.log(err);
      });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <nav style={{ position: 'absolute', top: 0, width: '90%', height: '70px' , display: 'flex',borderRadius:'5px', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#e8f2fd' }}>
        <img src="/public/vite.png" alt="Logo" style={{ height: '90px' }} />
        <div>
          <button style={{ marginRight: '10px'}}>
            <Link to="/signup" style={{ textDecoration: 'none', color:'inherit'}}>Sign Up</Link>
          </button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      <h1 style={{ fontSize: '3rem' }}>Home</h1>
      <button style={{ padding: '10px 20px', fontSize: '1rem', backgroundColor:'yellow'  }}>
        <Link to="/dashboard" style={{ textDecoration: 'none', color: '#000'}}>Hi, Nice to See you back...</Link>
      </button>
    </div>
  );
};

export default Home;
