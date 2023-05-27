import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import loginImg from "../../assets/others/authentication2.png"
import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';


const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const currentRef = useRef(null);
    const { signIn } = useContext(AuthContext)

    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => console.log(error))
    }
    const handleValidateCaptcha = () => {
        const userCaptcha = currentRef.current.value;
        if (validateCaptcha(userCaptcha)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }

    }

  return (
    <>
    <Helmet>
      <title>Bistro Boss | Login</title>
    </Helmet>
    <div className="hero min-h-screen bg-base-400">
      <div className="hero-content grid lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body bg-slate-100">
          <h1 className="text-3xl text-center font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="px-4 py-3 rounded"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="px-4 py-3 rounded"
              />
            </div>
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input
                 ref={currentRef}
                type="text"
                name="captcha"
                placeholder="type captcha"
                className="px-4 py-3 rounded"
              />
              <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs bg-[#D1A054B2] rounded text-white font-bold mt-3'>Validate</button>
            </div>
            <div className="form-control mt-6 ">
              <input disabled={disabled} className={disabled ? "bg-[#afafafb2] rounded text-white font-bold px-4 py-3" : "bg-[#D1A054B2] cursor-pointer rounded text-white font-bold px-4 py-3"} type="submit" value="Login" />
            </div> 
            <p className='text-[#D1A054]'>New here? <Link to="/signUp" className='font-bold'>Create a New Account</Link></p>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
