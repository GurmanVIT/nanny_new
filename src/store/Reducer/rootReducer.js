import { combineReducers } from '@reduxjs/toolkit';
//import authReducer from './path/to/authSlice';
import loginReducer from '../apiSlice/LoginSlice'
import signupReducer from '../apiSlice/Signupnannyslice';
import  otpReducer from '../apiSlice/Otpslice';
import cardsReducer from '../apiSlice/NcategoriesSlice';
import ForgotpasdReducer from '../apiSlice/ForgotpasswordSlice';
import signUpfamilyReducer from '../apiSlice/SignupfamilySilce';
import NlistReducer from '../apiSlice/NanylistSlice';
import bookNannyReducer from '../apiSlice/BooknannySlice';
import EarningReducer from '../apiSlice/EarningSlice';
import NannyproReducer from '../apiSlice/NannyprofileSlice';

const rootReducer = combineReducers({
  login: loginReducer,
  signUp:signupReducer,
  otp: otpReducer,
  cards:cardsReducer,
  Forgotpasd:ForgotpasdReducer,
  signUpfamily:signUpfamilyReducer,
  Nlist:NlistReducer,
  bookNanny:bookNannyReducer,
  Earning:EarningReducer,
  Nannypro:NannyproReducer,

  // Add other reducers as needed
});

export default rootReducer;
