import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import loader from "../assets/others/loader2.gif";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <img className="mx-auto" src={loader} alt="" />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
