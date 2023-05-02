import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./Pages/Home";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detials from "./Pages/Details";
import { AuthProvider } from "./Provider/AuthProvider";
import RegisterForm from "./Pages/Register";
import LoginForm from "./Pages/Login";
import ProtectedRoute from "./Provider/ProtectedRouter";
import Blog from "./Components/Blog/Blog";

function allChefLoader({ request }) {
  return fetch("http://localhost:5000/alldata", {
    signal: request.signal,
  });
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: allChefLoader,
  },
  {
    path: "details/:chefid",
    element: <ProtectedRoute><Detials /></ProtectedRoute> ,
  },
  {
    path: "/register",
    element: <RegisterForm />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
