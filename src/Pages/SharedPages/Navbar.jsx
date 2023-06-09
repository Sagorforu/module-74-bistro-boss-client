import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [, cart] = useCart();
  const [isAdmin] = useAdmin();

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Log out Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .then((error) => console.log(error));
  };

  const navbarOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
        <Link to="/menu">Our Menu</Link>
        <Link to="/order/salad">Order</Link>
        {user ? (
          <>
            {isAdmin ? (
              <Link to="/dashboard/adminHome">Dashboard</Link>
            ) : (
              <Link to="/dashboard/userHome">Dashboard</Link>
            )}
          </>
        ) : (
          ""
        )}
        <Link to="/dashboard/myCart">
          <button className=" gap-2">
            <FaShoppingCart className="text-2xl font-bold"></FaShoppingCart>
            <div className="absolute bottom-9 badge text-white font-bold ">
              +{cart?.length || 0}
            </div>
          </button>
        </Link>
        {user ? (
          <>
            <button onClick={handleLogout} className="btn btn-ghost">
              Log out
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
          </>
        )}
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 max-w-screen-2xl bg-opacity-30 bg-black text-white py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbarOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbarOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
