import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useThunk } from "./useThunk";
import { getPost } from "../state";

export const usePostDetails = () => {
  const { id } = useParams();
  const [getPostThunk, isLoadingPost, loadingPostError] = useThunk(getPost);
  //useSelector like state when data is changed it caused rerender
  const { post } = useSelector((state) => state.posts);

  useEffect(() => {
    getPostThunk(id);
  }, [id]);

  return { post, isLoadingPost, loadingPostError };
};
