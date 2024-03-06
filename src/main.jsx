import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Login from './screens/Login/Login.jsx';
import Signup from './screens/Signup/Signup.jsx';
import { CartProvider } from './components/contextReducer.jsx';
import Cart from './screens/Cart.jsx';
import MyOrders from './screens/MyOrders.jsx';
import Shops from "./screens/Shops/Shop.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    // loader:rootLoader,
    // action:rootAction,
    errorElement:<ErrorPage/>,
    // children:[{
    //   path:'/contacts/:contactID',
    //   element: <Contact/>,
      
    // }],

  },

  {
    path:'/login',
    element:<Login/>

  },
  {
    path:'/signup',
    element:<Signup/>

  },
  {
    path:'/myOrders',
    element:<MyOrders/>
  },
  {
    path: '/shops',
    element: <Shops/>
  }

 
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
     <RouterProvider router={router}/>
    {/* <App /> */}

  </React.StrictMode>,
)
