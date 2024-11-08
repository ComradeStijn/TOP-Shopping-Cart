import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Browse from "./components/Browse/Browse";
import Cart from "./components/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/browse',
        element: <Browse />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
]);