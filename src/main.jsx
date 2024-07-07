import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login.jsx';
import ForgetPassword from './ForgetPassword.jsx';
import Register from './Register.jsx';
import './index.css';
import './styles.css'

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const renderForm = () => {
    switch (currentForm) {
      case 'login':
        return <Login />;
      case 'forgetPassword':
        return <ForgetPassword />;
      case 'register':
        return <Register />;
      default:
        return <Login />;
    }
  };

  return (
    <div className=" mx-auto my-[120px] rainbow">
      <h1 className="text-2xl p-4">Login</h1>
      {renderForm()}
      <div className="flex justify-between mb-4 w-[75%]">
        <button onClick={() => setCurrentForm('forgetPassword')} className=' hover:text-[#6cc1b6]'>Forget Password?</button>
        <button onClick={() => setCurrentForm('register')} className=' hover:text-[#6cc1b6]' >Register</button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
