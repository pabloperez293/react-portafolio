import logo from "../assets/PabloPerez.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import React from "react";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-3 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareFacebook />
      </div>
    </nav>
  );
};

export default Navbar;
