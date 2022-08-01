import { configureStore } from "@reduxjs/toolkit";
import post from './postSlice';
import comment from "./commentSlice";
import user from './userSlice';
import login from './userLoginSlice';
export const store = configureStore({
  reducer: {
    post,
    comment,
    user,
   login,

  },
});
