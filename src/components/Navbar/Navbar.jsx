import React, { useEffect, useRef} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase/init'
import { toast } from 'react-toastify'

const Navbar = () => {

  const navRef = useRef();

  const handleClick = () => {
    toast.error('Not a Working Link');
  }

  const navbarLinks = [
    'Home',
    'TV Shows',
    'Movies',
    'New & Popular',
    'My List',
    'Browse By Language'
  ];

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(navRef.current){

        if (window.scrollY >= 80){
          navRef.current.classList.add('nav-dark');
        }else{
          navRef.current.classList.remove('nav-dark');
        }
      }
    })
  }, [])

  return (
    <div ref={navRef} className='navbar'>
        <img src={logo} alt="Logo" className='logo'/>
      <div className="navbar-left">
        <ul>
          {
            navbarLinks.map((link, index) => (
              <li key={index} onClick={handleClick}>{link}</li>
            ))
          }
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="Search Icon" className="icons" onClick={handleClick} />
        <p>Children</p>
        <img src={bell_icon} alt="Bell Icon" className="icons" onClick={handleClick} />
        <div className="navbar-profile">
          <img src={profile_img} alt='Profile Icon' className='profile'/>
          <img src={caret_icon} alt='caret icon' className="caret-icon" />
          <div className="dropdown">
            <p onClick={() => {logout()}}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
