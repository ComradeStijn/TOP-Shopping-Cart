import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Browse from "./components/Browse/Browse";

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
      }
    ]
  }
]);