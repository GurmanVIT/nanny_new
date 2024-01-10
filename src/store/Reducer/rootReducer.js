import { combineReducers } from '@reduxjs/toolkit';
//import authReducer from './path/to/authSlice';
import loginReducer from '../apiSlice/LoginSlice'
import signupReducer from '../apiSlice/Signupnannyslice';
import  otpReducer from '../apiSlice/Otpslice';
import cardsReducer from '../apiSlice/NcategoriesSlice';
import ForgotpasdReducer from '../apiSlice/ForgotpasswordSlice'

const rootReducer = combineReducers({
  login: loginReducer,
  signUp:signupReducer,
  otp: otpReducer,
  cards:cardsReducer,
  Forgotpasd:ForgotpasdReducer,
  // Add other reducers as needed
});

export default rootReducer;
