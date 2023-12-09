import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../../network/common";

export const editPost = createAsyncThunk(
  "books/editPost",
  async (post, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await baseURL.patch(`/postsNewVerion/${post.id}`, post);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
