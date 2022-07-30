import { configureStore } from "@reduxjs/toolkit";
import post from "./postSlice";
import user from './userSlice';

export const store = configureStore({
  reducer: {
    post,user,
  },
});