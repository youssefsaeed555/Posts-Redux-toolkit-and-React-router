import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../../network/common";

export const getPost = createAsyncThunk(
  "books/getPost",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await baseURL.get(`/postsNewVerion/${id}`);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
