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
import ongoingReducer from '../apiSlice/OngoingSlice';
import upcommingReducer from '../apiSlice/UpcommingSlice';
import nannyProfileReducer from '../apiSlice/NannyprofileSlice';
import NannyEditprofileReducer from '../apiSlice/NeditProfileSlice';
import UserProfileReducer from '../apiSlice/UserprofileSlice';
import changePasswordReducer from '../apiSlice/ChangePasswordSlice';
import UserEditprofileReducer from '../apiSlice/EditUserProfileSlice';
import NannyupcommingReducer from '../apiSlice/NannyUpcomingSlice';
import NannyOngoingReducer from '../apiSlice/OngoingNannySlice';
import NannyPastReducer from '../apiSlice/NannypastSlice';
import UpdateBookingStatusReducer from '../apiSlice/UpdateBookingStatusSlice';
import getAllCategoriesReducer from '../apiSlice/ManageservicesSlice';
import DocumentsnannyReducer from '../apiSlice/DocumentsnannySlice';
import uploadFileReducer from '../apiSlice/uploadFileSlice';
import uploadDocumentsReducer from '../apiSlice/UpdateDocumentSlice';



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
  ongoingReducer:ongoingReducer,
  upcommingReducer:upcommingReducer,
  nannyProfileReducer:nannyProfileReducer,
  NannyEditprofileReducer:NannyEditprofileReducer,
  UserProfileReducer:UserProfileReducer,
  changePasswordReducer:changePasswordReducer,
  UserEditprofileReducer:UserEditprofileReducer,
  NannyupcommingReducer:NannyupcommingReducer,
  NannyOngoingReducer:NannyOngoingReducer,
  NannyPastReducer:NannyPastReducer,
  UpdateBookingStatusReducer:UpdateBookingStatusReducer,
  getAllCategoriesReducer:getAllCategoriesReducer,
  DocumentsnannyReducer:DocumentsnannyReducer,
  uploadFileReducer:uploadFileReducer,
  uploadDocumentsReducer:uploadDocumentsReducer,

  
  // Add other reducers as needed
});

export default rootReducer;
