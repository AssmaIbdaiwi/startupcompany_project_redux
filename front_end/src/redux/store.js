import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import post from './postSlice';
import comment from "./postSlice";

export const store = configureStore({
  reducer: {
    post,
    comment,
=======
import post from "./postSlice";
import user from './userSlice';

export const store = configureStore({
  reducer: {
    post,user,
>>>>>>> 0e6d8a6e11e41c47117b0128c76820073ca4ff35
  },
});
