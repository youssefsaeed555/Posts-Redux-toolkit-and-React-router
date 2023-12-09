import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../../network/common";

export const deletePost = createAsyncThunk(
  "books/deletePost",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      await baseURL.delete(`/postsNewVerion/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
