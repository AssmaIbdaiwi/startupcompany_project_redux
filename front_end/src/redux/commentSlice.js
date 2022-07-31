import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";


export const getComments = createAsyncThunk("comment/getComments", async () => {
  const api = await fetch("http://127.0.0.1:8000/api/apicomment");
  const response = await api.json();
  console.log(response);
  return response;
});


export const addComment = createAsyncThunk(
  "comment/addComment",
  async (args, thunkAPI) => {
    const api = await axios.post("http://127.0.0.1:8000/api/addComment", args);

    if (api.status == 200) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Contact Has been sent Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
);


const commentSlice = createSlice({
  name: "comment",
  initialState: { comments:[], status: null },
  extraReducers: {
    //get item from api
    [getComments.fulfilled]: (state, action) => {
      console.log(action);
      state.status = "success fetch data";
      state.comments = action.payload;
    },
    [getComments.pending]: (state) => {
      state.status = "pending  fetch data";
    },
    [getComments.rejected]: (state) => {
      state.status = "rejected  fetch data";
    },

    // addcomment to api

    [addComment.fulfilled]: (state, action) => {
        console.log(action)
      state.status = "success send data";
      state.comments.push(action.payload);
    },
    [addComment.pending]: (state) => {
      state.status = "pending send data";
    },
    [addComment.rejected]: (state) => {
      state.status = "rejected send data";
    },
  },
});

export default commentSlice.reducer;
