import React from 'react'
import './navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import logo from '../../assets/logo.svg'
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={ logo} alt="app__logo" />
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans"><a href="#home">Home</a></li>
          <li className="p__opensans"><a href="#aboutus">About Us</a></li>
          <li className="p__opensans"><a href="#feature">Features</a></li>
          <li className="p__opensans"><a href="#solution">Solution</a></li>
          
        </ul>
        


        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
              <ul className="app__navbar-smallscreen_links">
                <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setToggleMenu(false)}>About Us</a></li>
                <li><a href="#menu" onClick={() => setToggleMenu(false)}>Features</a></li>
                <li><a href="#awards" onClick={() => setToggleMenu(false)}>Solution</a></li>
                
              </ul>
            </div>
          )}
        </div>
      </nav>
    );
  };
  
  export default Navbar;