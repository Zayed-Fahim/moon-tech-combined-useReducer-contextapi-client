import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import TopRated from "../../Pages/TopRated/TopRated";
import Cart from "../../Pages/Cart/Cart";

const Route = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/top-rated",
          element: <TopRated />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={routes}></RouterProvider>
  );
};

export default Route;
