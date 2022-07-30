import { configureStore } from "@reduxjs/toolkit";
import post from './postSlice';
import comment from "./postSlice";

export const store = configureStore({
  reducer: {
    post,
    comment,
  },
});
