import {
  FaCalculator,
  FaCalendarAlt,
  FaHome,
  FaShoppingCart,
  FaStar,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { FiMail, FiMenu, FiShoppingBag } from "react-icons/fi";
import { Helmet } from "react-helmet-async";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
  const [, cart] = useCart();


  return (
    <div className="drawer drawer-mobile ">
      <Helmet>
        <title>Bistro Boss | DashBoard</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 text-center text-base-content ">
          <div className="my-10">
            <h1 className="text-4xl tracking-tight font-bold">BISTRO BOOS</h1>
            <h3 className="text-3xl uppercase tracking-widest font-bold">
              Restaurant
            </h3>
          </div>
          <li>
            <NavLink
              to="/dashboard/userHome"
              className="text-xl text-center uppercase font-semibold"
            >
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/reservation"
              className="text-xl text-center uppercase font-semibold"
            >
              <FaCalendarAlt></FaCalendarAlt> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/payment"
              className="text-xl text-center uppercase font-semibold"
            >
              <FaWallet></FaWallet> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myCart"
              className="text-xl text-center uppercase font-semibold"
            >
              <FaShoppingCart></FaShoppingCart> My Cart <span className="badge badge-secondary">+{cart?.length || 0}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/addReview"
              className="text-xl text-center uppercase font-semibold"
            >
              <FaStar></FaStar> Add Review
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myBooking"
              className="text-xl text-center uppercase font-semibold"
            >
              <FaCalculator></FaCalculator> My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink
              to="/"
              className="text-xl text-center uppercase font-semibold"
            >
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className="text-xl text-center uppercase font-semibold"
            >
              <FiMenu className="font-extrabold text-2xl"></FiMenu> Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/order/salad"
              className="text-xl text-center uppercase font-semibold"
            >
              <FiShoppingBag className="font-extrabold text-2xl"></FiShoppingBag>
              shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-xl text-center uppercase font-semibold"
            >
              <FiMail className="font-extrabold text-2xl"></FiMail> contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
