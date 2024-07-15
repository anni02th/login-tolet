import React,{useState} from 'react';
import Axios from 'axios';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {

   const [email, setEmail] = useState('')

   const navigate = useNavigate()

   const handleSubmit = (e) => {
      e.preventDefault()
      Axios.post('http://localhost:3000/auth/forgot-password', {email})
      .then(response => {
         if(response.data.status){
            alert("Check your mail to Reset password...")
            navigate('/login')
         }
      }).catch(err => {
         console.log(err);
      })
   }

  return (
   <div className='sign-up-container'>
   <h2>Forgot Password</h2>
      <form className='sign-up-form' onSubmit={handleSubmit}>
    
      <label htmlFor="email"> Email:</label>
      <input type="email" autocomplete='off' placeholder='Email'
      onChange={(e) => setEmail (e.target.value)} />

      <button type='submit' >Send</button>
      </form>
   </div>
  )
}

export default ForgotPassword