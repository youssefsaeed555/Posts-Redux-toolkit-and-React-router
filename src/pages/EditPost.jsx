import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { usePostDetails } from "../hooks/use-post-details";
import Loading from "../components/Loading";
import { editPost, resetPost } from "../state";
import { useThunk } from "../hooks/useThunk";
import { formSchema } from "../utils/fromValidation";
import { useFormik } from "formik";

function EditPost() {
  const dispatch = useDispatch();
  const { post, isLoadingPost, loadingPostError } = usePostDetails();
  const [editPostThunk] = useThunk(editPost);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      dispatch(resetPost());
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      title: post?.title || "",
      description: post?.description || "",
    },
    onSubmit: (values) => {
      const id = Math.ceil(Math.random() * 500);
      editPostThunk(
        { id: post.id, title: values.title, description: values.description },
        () => navigate("/")
      );
    },
    validationSchema: formSchema,
    enableReinitialize: true,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          isInvalid={!!formik.errors.title}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid title.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
          isInvalid={!!formik.errors.description}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid description.
        </Form.Control.Feedback>
      </Form.Group>
      <Loading loading={isLoadingPost} error={loadingPostError}>
        <Button variant="primary" type="submit">
          Edit
        </Button>
      </Loading>
    </Form>
  );
}

export default EditPost;
