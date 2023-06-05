import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Security/Login";
import SignUp from "../Pages/Security/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/SharedPages/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../DashBoardPages/DashBoard/MyCart";
import Payment from "../DashBoardPages/DashBoard/Payment";
import AllUsers from "../DashBoardPages/AllUsers/AllUsers";
import AdminHome from "../DashBoardPages/AdminHome/AdminHome";
import AddItems from "../DashBoardPages/AddItems/AddItems";
import ManageItems from "../DashBoardPages/ManageItems/ManageItems";
import ManageBookings from "../DashBoardPages/ManageBookings/ManageBookings";
import AdminRoute from "./AdminRoute";
import PaymentStripe from "../DashBoardPages/PaymentStripe/PaymentStripe";
import UserHome from "../DashBoardPages/UserHome/UserHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signUp',
          element: <SignUp></SignUp>
        },
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'userHome',
        element: <UserHome></UserHome>
      },
      {
        path: 'myCart',
        element: <MyCart></MyCart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymentStripe',
        element: <PaymentStripe></PaymentStripe>
      },
      // admin routes
      {
        path: 'allUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'addItem',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: 'manageBookings',
        element: <AdminRoute><ManageBookings></ManageBookings></AdminRoute>
      }
    ]
  }
]);
