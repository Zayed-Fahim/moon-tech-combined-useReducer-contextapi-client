import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import About from '../../Pages/About/About';
import Cart from '../../Pages/Cart/Cart';
import Home from '../../Pages/Home/Home';
import TopRated from '../../Pages/TopRated/TopRated';

const Route = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "top-rated",
            element: <TopRated />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
        ],
      },
    ]);
    return (
        <RouterProvider router={router}>
            
        </RouterProvider>
    );
};

export default Route;