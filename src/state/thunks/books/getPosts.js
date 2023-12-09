import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../../network/common";

export const getPosts = createAsyncThunk(
  "books/getPosts",
  async (args, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await baseURL.get("/postsNewVerion");
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
