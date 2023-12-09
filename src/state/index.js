import { configureStore } from "@reduxjs/toolkit";

//slices
import { postSlice, resetPost } from "./slices/postSlice";
import { authSlice } from "./slices/authSlice";

//thunks
import { getPosts } from "./thunks/books/getPosts";
import { deletePost } from "./thunks/books/deletePost";
import { createPost } from "./thunks/books/createPost";
import { getPost } from "./thunks/books/getPost";
import { editPost } from "./thunks/books/editPost";

const store = configureStore({
  reducer: {
    posts: postSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;

export { getPosts, deletePost, createPost, getPost, editPost, resetPost };
