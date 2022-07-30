import { configureStore } from "@reduxjs/toolkit";
import post from "./postSlice";

export const store = configureStore({
  reducer: {
    post,
  },
});
