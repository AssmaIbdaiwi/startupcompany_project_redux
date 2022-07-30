import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("post/getPosts", async () => {
  const api = await fetch("http://127.0.0.1:8000/api/apiposts");
  const response = await api.json();

  return response;
});

const postSlice = createSlice({
  name: "post",
  initialState: { posts: [], status: null },
  extraReducers: {
    //get item from api
    [getPosts.fulfilled]: (state, action) => {
      console.log(action);
      state.status = "success fetch data";
      state.posts = action.payload;
    },
    [getPosts.pending]: (state) => {
      state.status = "pending  fetch data";
    },
    [getPosts.rejected]: (state) => {
      state.status = "rejected  fetch data";
    },
  },
});

export default postSlice.reducer;