import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import ErrorPage from './pages/404.jsx';
import ProductsPage from './pages/products';
import { ProfilePage } from './pages/profile';
import { DetailProductPage } from './pages/detailProduct';
// customHooks buat panggil store
import { Provider } from 'react-redux';
import store from './reactRedux/store';
import { Navbar } from './component/layout/navbar';

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
  {
    path: '/Profile',
    element: <ProfilePage />,
  },
  {
    path: '/Product/:id',
    element: <DetailProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Navbar /> */}
      {/* membuat semua router dalam naungan store */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
