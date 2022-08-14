import express from 'express'
const route = express.Router();
import {signupUser, loginUser} from '../controller/userController.js'

route.post('/signup',signupUser);
route.post('/login',loginUser);



export default route;