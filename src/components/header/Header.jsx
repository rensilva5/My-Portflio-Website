import React from "react";
import "./header.css";
import Cta from "./Cta";
// import mephoto from '../../assets/me.png'
// import mephoto from '../../assets/mephotoME.jpg'
import mephoto from "../../assets/egypt.jpeg";
import HeaderSocials from "./HeaderSocials";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      {/* <div className="container header_container"> */}
      {/* <h5>Hello, I am</h5>
        <h1>Renzo Silva</h1>
        <h5 className="text-light">Fullstack Developer</h5> */}
      {/* Call To Action */}
      <Cta />
      <div class="hero-image">
        <div class="hero-text">
          <h5>Hello, I am</h5>
          <h1>Renzo Silva</h1>
          <h5 className="text-light">Fullstack Developer</h5>
        </div>
        <div className="me">
          {/* <img className='me_pic' src={mephoto} alt='mephoto' /> */}
        </div>
      </div>
      <HeaderSocials />
      <a href="#contact" className="scroll_down">
        Scroll Down
        {/* <small><BsFillArrowDownCircleFill /></small> */}
      </a>
    </header>
  );
};

export default Header;