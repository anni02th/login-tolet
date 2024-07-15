import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home.jsx'
import Signup from './Components/Signup.jsx'
import Login from './Components/Login.jsx'
import ForgotPassword from './Components/ForgotPassword.jsx'
import ResetPassword from './Components/ResetPassword.jsx'
import DashBoard from './Components/DashBoard.jsx'
function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={ <Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/resetPassword/:token" element={<ResetPassword />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>

        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
