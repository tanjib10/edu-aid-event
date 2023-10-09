import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root";
import ErrorPage from "./ErrorPage/ErrorPage";
import Home from "./Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import CardDetails from "./components/cardDetails/CardDetails";
import Register from "./components/Register/Register";
import AuthProvider from "./Provider/AuthProvider";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About></About>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/serviceData.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
