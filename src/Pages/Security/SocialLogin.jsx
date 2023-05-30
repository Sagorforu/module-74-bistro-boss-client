import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const googleLoggedUser = result.user;
        const googleSaveUser = {
          name: googleLoggedUser.displayName,
          email: googleLoggedUser.email,
          photo: googleLoggedUser.photoURL,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(googleSaveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle text-2xl hover:bg-[#f1950bb2] bg-[#d19234b2] text-white"
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
