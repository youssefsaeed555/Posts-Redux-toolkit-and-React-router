import React from "react";
import { Table, Button, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { useThunk } from "../hooks/useThunk";
import { deletePost } from "../state/thunks/books/deletePost";
import Loading from "./Loading";

function PostListItems({ data }) {
  const [deletePostThunk, isLoadingDeletePost, loadingDeletePostError] =
    useThunk(deletePost);

  const { isLoggedIn } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const handleDeletePost = (post) => {
    console.log(post);
    if (window.confirm(`Do you really want to delete ${post.title}`)) {
      deletePostThunk(post.id);
    }
  };

  const renderPosts = data?.map((post, idx) => {
    return (
      <tr key={post.id}>
        <td>#{idx + 1}</td>
        <td>
          <Link to={`post/${post.id}/details`}>{post.title}</Link>
        </td>
        <td>
          <ButtonGroup aria-label="Basic example">
            <Button
              variant="success"
              onClick={() => navigate(`post/${post.id}/edit`)}
              disabled={!isLoggedIn}
            >
              Edit
            </Button>
            <Loading
              loading={isLoadingDeletePost}
              error={loadingDeletePostError}
            >
              <Button
                disabled={isLoadingDeletePost || !isLoggedIn}
                variant="danger"
                onClick={() => handleDeletePost(post)}
              >
                Delete
              </Button>
            </Loading>
          </ButtonGroup>
        </td>
      </tr>
    );
  });

  return renderPosts;
}

export default PostListItems;
