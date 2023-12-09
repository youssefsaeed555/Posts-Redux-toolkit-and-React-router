import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: { userId: 1, isLoggedIn: true },
  reducers: {},
});
