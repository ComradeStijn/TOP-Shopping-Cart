import Layout from "./components/Layout";
import fetchItems from "./components/Home/fetch";
import Home from "./components/Home/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetchItems(8),
      }
    ]
  }
]);