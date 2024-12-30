import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { css } from "@emotion/react";
import "./index.css";
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <NextUIProvider>
        <App />
        <ToastContainer position="top-center" />
      </NextUIProvider>
    </AuthProvider>
  </StrictMode>
);
