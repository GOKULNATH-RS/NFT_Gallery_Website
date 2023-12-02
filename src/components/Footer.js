import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-32 w-full bg-[#090e34] relative bottom-0 flex justify-around overflow-hidden">
      <div className="flex-center">
        <img className="h-28 w-28" src={Logo} />
        <p className="font-bold flex flex-col text-2xl">
          NFTs
          <span className="text-blue-500 leading-3">Gallery</span>
        </p>
      </div>
      <div className="flex-center">
        <div className="flex  max-sm:flex-col gap-6 max-sm:gap-4">
          <a
            className="flex gap-2 items-center"
            href="https://www.instagram.com/"
          >
            <img
              src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
              alt="Instagram"
            />
          </a>
          <a
            className="flex gap-2 items-center"
            href="https://www.facebook.com/"
          >
            <img
              src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
              alt="Facebook"
            />
          </a>
          <a
            className="flex gap-2 items-center"
            href="https://www.twitter.com/"
          >
            <img
              src="https://img.icons8.com/fluent/48/000000/twitter.png"
              alt="Twitter"
            />
          </a>
          <a
            className="flex gap-2 h-12 w-12 items-center bg-white rounded-full"
            href="https://github.com/GOKULNATH-RS/NFT_Gallery_Website"
          >
            <img
              className="scale-110"
              src="https://cdn.iconscout.com/icon/free/png-512/free-github-online-project-hosting-website-logo-46235.png?f=webp&w=256"
              alt="Twitter"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
