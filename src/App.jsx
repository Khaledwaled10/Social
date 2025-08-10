import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import Protectedroute from "./components/Protectedroute";
import Postdetails from "./pages/Postdetails";
import Profile from "./pages/Profile";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Login></Login> },
        { path: "/register", element: <Register></Register> },
        { path: "/home", element: <Protectedroute><Home></Home></Protectedroute> },
        { path: "/post/:id", element: <Protectedroute><Postdetails></Postdetails></Protectedroute> },
        { path: "/profile/:id", element: <Protectedroute><Profile></Profile></Protectedroute> },
        { path: "*", element: <Notfound></Notfound> },
      ],
    },
  ]);

  return <>
  
  <RouterProvider router={routes}></RouterProvider>
  
  </>;
}

export default App;
