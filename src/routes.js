import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

import RootLayout from "./pages/RootLayout";
import Index from "./pages/Index";
import ErrorPage from "./pages/ErrorPage";

const paramsHandler = ({ params }) => {
  if (isNaN(params.id)) {
    throw new Response("Bad Request", {
      statusText: "params must be number only",
      status: 400,
    });
  }
};

const AddPost = lazy(() => import("./pages/AddPost"));
const EditPost = lazy(() => import("./pages/EditPost"));
const DetailsPost = lazy(() => import("./pages/DetailsPost"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      { path: "post", element: <Index /> },
      {
        path: "post/add",
        element: (
          <Suspense fallback={<div>loading please wait...</div>}>
            <AddPost />
          </Suspense>
        ),
      },
      {
        path: "post/:id/edit",

        element: (
          <Suspense fallback={<div>loading please wait...</div>}>
            <EditPost />
          </Suspense>
        ),
        loader: paramsHandler,
      },
      {
        path: "post/:id/details",
        element: (
          <Suspense fallback={<div>loading please wait...</div>}>
            <DetailsPost />
          </Suspense>
        ),
        loader: paramsHandler,
      },
    ],
  },
]);
