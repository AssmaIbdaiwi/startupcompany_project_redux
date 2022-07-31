import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";





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
  initialState: { comment: [], status: null },
  extraReducers: {

    //addcomment to api

    [addComment.fulfilled]: (state, action) => {
        console.log(action)
      state.status = "success send data";
      state.comment.push(action.payload);
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
