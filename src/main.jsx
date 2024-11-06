import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import './reset.css'
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <div>Test default</div>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
