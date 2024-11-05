import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setLoggedIn, setUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [userName, setUserName] = useState("");
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

  const handleRegisterUser = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/register`,
      {
        method: "POST",
        body: JSON.stringify({
          displayName: displayName,
          userName: userName,
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    console.log(data);

    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("userEmail", data.email);

    if (response.status === 200) {
      await handleSetLoggedIn(true, data);
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
          <h2>Register</h2>
        </div>
        <div>
          <form className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-md ">Display Name</label>
                <input
                  type="name"
                  name="displayName"
                  id="displayName"
                  placeholder="Your Name"
                  className="bg-slate-200 bg-opacity-10 p-2 px-4 w-96 rounded-lg text-sm h-12 "
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-md ">User Name</label>
                <input
                  type="name"
                  name="userName"
                  id="userName"
                  placeholder="username"
                  className="bg-slate-200 bg-opacity-10 p-2 px-4 w-96 rounded-lg text-sm h-12 "
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-md ">Email</label>
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
                <label className="text-md ">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-slate-200 bg-opacity-10 p-2 px-4 w-96 rounded-lg text-sm h-12 "
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                className="bg-transparent border-[1px] border-opacity-20 border-white hover:border-opacity-70 text-white p-2 px-4 rounded-lg w-96"
                type="submit"
                onClick={(e) => handleRegisterUser(e)}
              >
                Register
              </button>

              <div className="flex gap-2 items-center">
                <p className="text-sm">Already Registered? </p>
                <Link to="/login" className="text-sm text-blue-400">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
