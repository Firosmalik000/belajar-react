import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import ErrorPage from './pages/404.jsx';
import ProductsPage from './pages/products';

const router = createBrowserRouter([
  {
    //yang ditampilkan adalah yang disini, ex= localhost:300/Login
    path: '/',
    element: <div>hello world</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/Login',
    element: <LoginPage />,
  },
  {
    path: '/Register',
    element: <RegisterPage />,
  },
  {
    path: '/Products',
    element: <ProductsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
