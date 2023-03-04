// import { Button } from '@mui/material'
import React, { useEffect, useState } from "react";
// import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
// import { FaCode } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MdReorder } from 'react-icons/md'
import "./navbarCommon.css";

const NavbarCommon = () => {
  const [expandNavbar, setExpandNavbar] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setExpandNavbar(false)
  }, [location])

  return (
    <div className="navbarCommon" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => {
          setExpandNavbar((prev) => !prev)
        }}><MdReorder/></button>
      </div>
      <div className="navbar-links">
        <Link to="/" className="link">
          {/* <AiOutlineHome /> */}
        Home
        </Link>
        {/* <Link to="/about" className="link"> */}
          {/* <AiOutlineUser /> */}
        {/* About */}
        {/* </Link> */}
        <Link to="/portfolio" className="link">
          {/* <FaCode /> */}
        Projects
        </Link>
        <Link to="/WorkExperience" className="link">
          {/* <FaCode /> */}
        Work Experience
        </Link>
      </div>
    </div>
  );
};

export default NavbarCommon;
