import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/Router/Router";
import ProductProvider from "./context/ProductProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  </React.StrictMode>
);
