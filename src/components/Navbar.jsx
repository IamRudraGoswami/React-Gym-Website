import React, {useState} from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {

  const [nav, setnav] = useState(false);

  const changeBackground = ()  => {
    if (window.scrollY >= 50){
         setnav(true);
    }else{
          setnav(false);
    }
  }
  window.addEventListener('scroll', changeBackground);

  return (
   
    <nav className={nav ? "nav active" :"nav"}>
      <link href="#" className="logo" to="#" smooth={true} duration={2000}/>
       <img src={logo} alt="" />
      

      <input type="checkbox" id='menu-btn' className="menu-btn" />
        <label for="menu-btn" className='menu-icon'>
          <span className='nav-icon'></span>
        </label>
        <ul className="menu">

          <li><Link to= 'main' smooth={true} duration={1000}>Header</Link></li>
          <li><Link to= 'features' smooth={true} duration={1000}>Features</Link></li>
          <li><Link to= 'presentation' smooth={true} duration={1000}>Offers</Link></li>
          <li><Link to= 'about' smooth={true} duration={1000}>About</Link></li>
          <li><Link to= 'contact' smooth={true} duration={1000}>contacts</Link></li>
          
          
        </ul>
    </nav>
    
  )
}

export default Navbar;
