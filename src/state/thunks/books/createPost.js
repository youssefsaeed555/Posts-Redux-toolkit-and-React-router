import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../../network/common";

export const createPost = createAsyncThunk(
  "books/createPost",
  async (post, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const { auth } = getState();
    post.userId = auth.userId;
    try {
      const { data } = await baseURL.post(`/postsNewVerion`, post);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
