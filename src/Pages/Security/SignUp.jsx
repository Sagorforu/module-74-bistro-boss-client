import { useForm } from "react-hook-form";
import signUpImg from "../../assets/others/authentication2.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
    .then(result => {
      const newUser = result.user;
      console.log(newUser)
    })
  };

  return (
    <>
    <Helmet>
      <title>Bistro Boss | Sign Up</title>
    </Helmet>
    <div className="hero min-h-screen bg-base-400">
      <div className="hero-content grid lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <img src={signUpImg} alt="" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body bg-slate-100">
            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                {...register("name")}
                type="text"
                name="name"
                placeholder="your name"
                className="px-4 py-3 rounded"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="email"
                className="px-4 py-3 rounded"
              />
              {errors.email && (
                <span className="text-red-600 mt-2">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                type="password"
                name="password"
                placeholder="password"
                className="px-4 py-3 rounded"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600 mt-2">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600 mt-2">
                  Password must be in 6 characters
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600 mt-2">
                  Password must be less than 20 characters
                </p>
              )}
            </div>
            <div className="form-control mt-6 ">
              <input
                className="bg-[#D1A054B2] cursor-pointer rounded text-white font-bold px-4 py-3"
                type="submit"
                value="Sign Up"
              />
            </div>
            <p className="text-[#D1A054]">
              Already have an account?{" "}
              <Link to="/login" className="font-bold">
                Go to log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default SignUp;
