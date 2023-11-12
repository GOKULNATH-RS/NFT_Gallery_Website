import React, { useState } from "react";
import IconBookmark from "../assets/icons/iconBookmark.js";
import { Link } from "react-router-dom";
import useOnline from "../Hooks/useOnline.js";
import { useSelector } from "react-redux";
import Logo from "../assets/Logo.png";

const Header = () => {
  const isOnline = useOnline();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const SavedItems = useSelector((state) => state.saved.items);

  let CurrentUser = "GOKULNATH RS";
  return (
    <nav className="w-full shadow-secondary h-20 Header flex justify-between items-center gap-4 px-8 fixed top-00 z-10">
      <div className="text-white">
        <img src={Logo} alt="logo" className="h-14 w-max lg:h-16" />
      </div>
      <ul className="flex gap-5 lg:gap-8 max-sm:hidden">
        {[
          { name: "NFTs", url: "/" },
          { name: "Collections", url: "/collections" },
          { name: "About", url: "/about" },
          { name: "Contact", url: "/contact" },
        ].map((item) => {
          return (
            <li
              key={item.name}
              className="font text-md lg:text-lg text-white cursor-pointer tracking-wider hover:text-blue-500"
            >
              <Link to={item.url}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-2 items-center">
        {isLoggedIn ? (
          <>
            <Link
              to="/saved"
              className="flex w-max h-8 relative justify-center items-center"
            >
              <IconBookmark fill={SavedItems.length} />
              <span
                className={`h-3 lg:h-4 w-3 lg:w-4 ${
                  !SavedItems.length ? "text-blue-400" : "text-PrimaryDark"
                }   duration-100 rounded-[100%] p-[2px]  text-[12px]  flex justify-center items-center absolute lg:top-[7px] top-[9px] font-bold`}
              >
                {SavedItems.length}
              </span>
            </Link>
            <Link to={`/profile/${CurrentUser}`}>
              <img
                className={`h-10 lg:h-12 w-10 lg:w-12 rounded-full bg-center border-2 ${
                  isOnline ? "border-emerald-500" : "border-red-600"
                }`}
                src="https://i.pinimg.com/564x/d7/f3/2e/d7f32e6c302205c45f082e6de141ef00.jpg"
                alt="profile"
              />
            </Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
