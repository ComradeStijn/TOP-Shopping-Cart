import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import './reset.css'
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { router } from './router.jsx';
import { CartProvider } from './components/Context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
)
