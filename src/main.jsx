import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login.jsx';
import ForgetPassword from './ForgetPassword.jsx';
import Register from './Register.jsx';
import './index.css';

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
    <div className="h-full max-w-[20rem] m-auto flex flex-col justify-center items-center border-solid border-4 border-yellow-600 rounded-lg bg-blue-400">
      <h1 className="text-2xl p-4">Login</h1>
      {renderForm()}
      <div className="flex justify-between mb-4 w-[75%]">
        <button onClick={() => setCurrentForm('forgetPassword')}>Forget Password?</button>
        <button onClick={() => setCurrentForm('register')}>Register</button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
