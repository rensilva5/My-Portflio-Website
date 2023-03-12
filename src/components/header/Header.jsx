import React from "react";
import "./header.css";
import Cta from "./Cta";
// import mephoto from '../../assets/me.png'
// import mephoto from '../../assets/mephotoME.jpg'
// import mephoto from "../../assets/egypt.jpeg";
import HeaderSocials from "./HeaderSocials";
// import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      {/* <div className="container header_container"> */}
      {/* <h5>Hello, I am</h5>
        <h1>Renzo Silva</h1>
        <h5 className="text-light">Fullstack Developer</h5> */}
      {/* Call To Action */}
      <Cta />
      <div className="hero-image">
      <div className="hero-text">
  <h5>Hello, I am</h5>
  <h1><span>R</span><span>e</span><span>n</span><span>z</span><span>o</span> <span>S</span><span>i</span><span>l</span><span>v</span><span>a</span></h1>
  <h5 className="text-light"><span>F</span><span>u</span><span>l</span><span>l</span><span>s</span><span>t</span><span>a</span><span>c</span><span>k</span> <span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span></h5>
</div>
        {/* <div className="hero-text"> */}
          {/* <h5>Hello, I am</h5> */}
          {/* <h1>Renzo Silva</h1> */}
          {/* <h5 className="text-light">Fullstack Developer</h5> */}
        {/* </div> */}
        {/* <div className="me"> */}
          {/* <img className='me_pic' src={mephoto} alt='mephoto' /> */}
        {/* </div> */}
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