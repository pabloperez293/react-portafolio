import logo from "../assets/icon-coffe.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-red-300 mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center w-20'>
        <img src={logo} alt="logo" className=" "/>
        </div>
        div
        <FaLinkedin />
        <FaGithub />
    </nav>
  )
}

export default Navbar