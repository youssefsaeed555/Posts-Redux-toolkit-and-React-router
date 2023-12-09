import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { createPost } from "../state/thunks/books/createPost";
import { useThunk } from "../hooks/useThunk";
import Loading from "../components/Loading";
import withGuard from "../utils/withGuard";
import { formSchema } from "../utils/fromValidation";

function AddPost() {
  const [addPostThunk, isLoadingAddPost, loadingAddPostError] =
    useThunk(createPost);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: (values) => {
      const id = Math.ceil(Math.random() * 500);
      addPostThunk(
        { id, title: values.title, description: values.description },
        () => navigate("/")
      );
    },
    validationSchema: formSchema,
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
      <Loading loading={isLoadingAddPost} error={loadingAddPostError}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Loading>
    </Form>
  );
}

export default withGuard(AddPost);
