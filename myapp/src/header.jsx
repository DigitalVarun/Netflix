import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "./NetflixLogo.png"
import { BiSearch } from "react-icons/bi";
import "./header.scss"

const Header = () => {
  return (
    <nav className='header'>

      <Link to="/" ><img src={Logo} alt='Logo' /></Link>

      <div className='navItems'>
        <Link to="/tvshows" >TV Shows</Link>
        <Link to="/movies" >Movies</Link>
        <Link to="/recentlyadded" >Recently Added</Link>
        <Link to="/mylist" >My List</Link>
      </div>

      <BiSearch />
    </nav>
  )
}

export default Header