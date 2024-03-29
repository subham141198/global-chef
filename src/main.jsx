import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./Pages/Home";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detials from "./Pages/Details";
import { AuthProvider } from "./Provider/AuthProvider";
import RegisterForm from "./Pages/Register";
import LoginForm from "./Pages/Login";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Blog from "./Pages/Blog";
import PhoneLoginForm from "./Pages/PhoneNoLogin";
import Favourite from "./Pages/Favoruite";

function allChefLoader({ request }) {
  return fetch("https://global-chef-server-debabratachakraborty880-gmailcom.vercel.app/alldata", {
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
    loader: allChefLoader,
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
  {
    path: "/phonesignin",
    element: <PhoneLoginForm />,
  },
  {
    path: "/favourite",
    element: <Favourite />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
