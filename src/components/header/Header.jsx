import React from 'react'
import './header.css'
import Cta from './Cta'
// import mephoto from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, I am</h5>
        <h1>Renzo Silva</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />  {/* Call To Action */}
        <HeaderSocials/>
        <div className="me">
          {/* <img src={mephoto} alt='mephoto' /> */}
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>

  )
}

export default Header