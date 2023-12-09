import { createSlice } from "@reduxjs/toolkit";

import { getPosts } from "../thunks/books/getPosts";
import { deletePost } from "../thunks/books/deletePost";
import { createPost } from "../thunks/books/createPost";
import { getPost } from "../thunks/books/getPost";
import { editPost } from "../thunks/books/editPost";

const initialState = { posts: [], post: {} };

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    resetPost: (state) => {
      state.post = null;
    },
  },
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },

    [getPost.fulfilled]: (state, action) => {
      state.post = action.payload;
    },

    [createPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload);
    },

    [editPost.fulfilled]: (state, action) => {
      state.post = action.payload;
    },

    [deletePost.fulfilled]: (state, action) => {
      state.posts = state.posts.filter((post) => post.id != action.payload);
    },
  },
});

export const { resetPost } = postSlice.actions;
