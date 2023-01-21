import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom';
import logo from "../Components/assets/logo.png"

const Navbar = () => {
  return (
    
      <section className="top-nav">
      <div className="go">
            <img
            src={logo}
            alt=""
            className="logo"
          />
          </div>
    <div>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
    </label>
    <ul class="menu">
    <li><NavLink onClick={() => {document.getElementById("menu-toggle").click()}} to='/'>HOME</NavLink></li>
      <li><NavLink onClick={() => {document.getElementById("menu-toggle").click()}} to='/about'>ABOUT</NavLink></li>
      <li><NavLink onClick={() => {document.getElementById("menu-toggle").click()}}  to='/cv'>CV</NavLink></li>
      <li><NavLink onClick={() => {document.getElementById("menu-toggle").click()}}  to='/projects'>PORTFOLIO</NavLink></li>
      <li><NavLink onClick={() => {document.getElementById("menu-toggle").click()}}  to='/contact'>CONTACT</NavLink></li>
      

    </ul>
  </section>

  )
}

export default Navbar