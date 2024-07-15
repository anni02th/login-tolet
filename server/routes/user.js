import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer'
import { User } from '../models/User.js';
const router = express.Router();

router.post('/signup', async (req, res) => {
   const { username, email, password } = req.body;
   
   try {
      const user = await User.findOne({ email });
      if (user) {
         return res.json({ message: "User already exists" });
      }

      const hashpassword = await bcrypt.hash(password, 10);
      const newUser = new User({
         username,
         email,
         password: hashpassword
      });
      
      await newUser.save();
      return res.json({ status: true, message: "Record registered" });
   } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
   }
});

router.post('/login', async (req, res) => {  // Corrected the path from './login' to '/login'
   const { email, password } = req.body;

   try {
      const user = await User.findOne({ email });
      if (!user) {
         return res.json({ message: "User Not Registered" });
      }

      const validPassword = await bcrypt.compare(password, user.password);  // Corrected 'awit' to 'await'
      if (!validPassword) {
         return res.json({ message: "Password is Incorrect" });
      }

      const token = jwt.sign({ username: user.username }, process.env.KEY, { expiresIn: '1hr' });
      res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });  // Corrected maxAge to 3600000 ms (1 hour)
      return res.json({ status: true, message: "Login Successfully" });
   } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
   }
});

router.post('/forgot-password', async (req, res) => {
   const {email} = req.body;
   try{
      const user = await User.findOne({email})
      if(!user) {
         return res.json({message: "user not registered"})
      }

      const token = jwt.sign({id:user._id}, process.env.KEY,{expiresIn:'5m'})

      var transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
           user: 'dagamore1323@gmail.com',
           pass: 'bvwifruyzqbpzwwm'
         }
       });
       
       
       var mailOptions = {
         from: 'dagamore1323@gmail.com',
         to: email,
         subject: 'Reset Password...',
         text: `http://localhost:5173/resetPassword/${token}`
       };
       
       transporter.sendMail(mailOptions, function(error, info){
         if (error) {
           console.log(error);
         } else {
           return res.json({status: true, message:"Email Sent"})
         }
       });

   }catch(err) {
      console.log(err)
   }
});


// Reset Password Route
router.post('/reset-password/:token', async (req, res) => {
   const { token } = req.params;
   const { password } = req.body;

   try {
      // Verify the token
      const decoded = await jwt.verify(token, process.env.KEY);
      const id = decoded.id;

      // Hash the new password
      const hashPassword = await bcrypt.hash(password, 10);

      // Update the user's password
      await User.findByIdAndUpdate(id, { password: hashPassword });

      return res.json({ status: true, message: "Password updated successfully" });
   } catch (err) {
      console.error("Token verification error:", err); // Log the error for debugging
      return res.json({ status: false, message: "Invalid token" });
   }
});

const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ status: false, message: "No token provided" });
    }

    const decoded = await jwt.verify(token, process.env.KEY);
    req.userId = decoded.id; // Storing the user ID in the request object for further use
    next();
  } catch (err) {
    return res.status(401).json({ status: false, message: "Invalid token" });
  }
};

// Route to verify authorization
router.get("/verify", verifyUser, (req, res) => {
  return res.json({ status: true, message: "Authorized" });
});

router.get('/logout',(req,res) => {
   res.clearCookie('token')
   return res.json({status:true})
})

export { router as UserRouter };
