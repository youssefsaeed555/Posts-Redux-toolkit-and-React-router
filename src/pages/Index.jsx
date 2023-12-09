import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import PostList from "../components/PostList";
import { useThunk } from "../hooks/useThunk";
import { getPosts } from "../state/thunks/books/getPosts";
import Loading from "../components/Loading";

function Index() {
  const [fetchPosts, isLoadingPostList, loadingPostError] = useThunk(getPosts);
  useEffect(() => {
    fetchPosts();
  }, []);

  const { posts } = useSelector((state) => state.posts);

  return (
    <Loading loading={isLoadingPostList} error={loadingPostError}>
      <PostList data={posts} />
    </Loading>
  );
}

export default Index;
