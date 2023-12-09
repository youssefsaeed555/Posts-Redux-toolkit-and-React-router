import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { routes } from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
