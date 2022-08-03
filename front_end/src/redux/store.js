import { configureStore } from "@reduxjs/toolkit";
import doctor from './doctorSlice';

import post from './postSlice';

import comment from "./commentSlice";
import user from './userSlice';  
import login from './userLoginSlice';
export const store = configureStore({
  reducer: {
    doctor,
   
    comment,
    post,user,
   
   
   
   login,

  },
});
