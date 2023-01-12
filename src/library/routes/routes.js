import React from "react";
import Container from "../../components/container";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Container /> },
  { path: "/cart", element: <p>cart/checkout page</p> },
]);

export default router;
