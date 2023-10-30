import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import LogIn from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import AddProduct from './components/AddProduct/AddProduct';
import MyCart from './components/MyCart/MyCart';
import Profile from './components/Profile/Profile';
import AuthProvider from './components/Provider/AuthProvider';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import AllProduct from './components/AllProduct/AllProduct';
import ProductsDetails from './components/ProductDetails/ProductsDetails';
import Update from './components/Update/Update';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter>,
      },
      {
        path: "/allProduct",
        element: <PrivateRouter><AllProduct></AllProduct></PrivateRouter>,
        loader: () => fetch('https://crafter-server-a4hvq8zpl-gazi2050.vercel.app/products')
      },
      {
        path: "/productDetails/:id",
        element: <PrivateRouter><ProductsDetails></ProductsDetails></PrivateRouter>,
        loader: ({ params }) => fetch(`https://crafter-server-a4hvq8zpl-gazi2050.vercel.app/products/${params.id}`)
      },
      {
        path: "/Update/:id",
        element: <PrivateRouter><Update></Update></PrivateRouter>,
        loader: ({ params }) => fetch(`https://crafter-server-a4hvq8zpl-gazi2050.vercel.app/products/${params.id}`)
      },
      {
        path: "/myCart",
        element: <PrivateRouter><MyCart></MyCart></PrivateRouter>
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/profile",
        element: <PrivateRouter><Profile></Profile></PrivateRouter>
      },
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
