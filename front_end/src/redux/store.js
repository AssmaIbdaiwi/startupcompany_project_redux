import { configureStore } from "@reduxjs/toolkit";
import doctor from './doctorSlice';

import post from './postSlice';
import comment from "./postSlice";
import user from './userSlice';
    


export const store = configureStore({
  reducer: {
    doctor,
    post,
    comment,
    post,user,

  },
});
