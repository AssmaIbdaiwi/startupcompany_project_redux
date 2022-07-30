import { configureStore } from "@reduxjs/toolkit";
import doctor from './doctorSlice';

export const store = configureStore({
  reducer: {
    doctor,
  },
});
