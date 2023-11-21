import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLoggedIn, setUser } from "../redux/userSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSetLoggedIn = (isLoggedIn, user) => {
    dispatch(setLoggedIn({ isLoggedIn }));
    dispatch(
      setUser({
        displayName: user.displayName,
        userName: user.userName,
        email: user.email,
      })
    );
  };

  const handleLoginUser = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/login`,
      {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let data = await response.json();

    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("userEmail", data.user.email);

    if (response.status === 200) {
      await handleSetLoggedIn(true, data.user);
      navigate("/");
    }
  };

  return (
    <>
      <nav className="w-full shadow-secondary h-20 Header flex items-center  px-8 fixed top-00 z-10">
        <Link to="/" className="text-white">
          Back
        </Link>
      </nav>
      <div className="bg-PrimaryDark text-Primary h-screen w-screen flex items-center justify-center flex-col gap-6">
        <div>
          <h2>Login</h2>
        </div>
        <div>
          <form
            className="flex flex-col gap-8"
            onSubmit={(e) => handleLoginUser(e)}
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-md ">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@company.com"
                  className="bg-slate-200 bg-opacity-10 p-2 px-4 w-96 rounded-lg text-sm h-12 "
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="password" className="text-md ">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-slate-200 bg-opacity-10 p-2 px-4 w-96 rounded-lg text-sm h-12 "
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Link
                  to="/forgotpassword"
                  className="text-xs text-blue-400 self-end"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                className="bg-transparent border-[1px] border-opacity-20 border-white hover:border-opacity-70 text-white p-2 px-4 rounded-lg w-96"
                type="submit"
              >
                Login
              </button>

              <div className="flex gap-2 items-center">
                <p className="text-sm">Don't have an account yet? </p>
                <Link to="/register" className="text-sm text-blue-400">
                  Register
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
