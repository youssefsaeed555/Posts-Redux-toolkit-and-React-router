import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { usePostDetails } from "../hooks/use-post-details";
import Loading from "../components/Loading";
import { resetPost } from "../state";

function DetailsPost() {
  const dispatch = useDispatch();

  const { post, isLoadingPost, loadingPostError } = usePostDetails();
  useEffect(() => {
    return () => {
      dispatch(resetPost());
    };
  }, []);

  return (
    <Loading loading={isLoadingPost} error={loadingPostError}>
      <div>
        <p>Title: {post?.title}</p>
        <p>Description: {post?.description}</p>
      </div>
    </Loading>
  );
}

export default DetailsPost;
