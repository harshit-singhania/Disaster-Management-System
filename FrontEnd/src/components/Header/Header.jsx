// import React from 'react'
import Button from "../Buttons/Button"
import {GiShieldBash} from "../../Assets/Icons"
const Header = () => {
  return (
    <div>
      <div className="navbar backdrop-filter mix-blend-normal bg-opacity-30 absolute z-[3]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="font-Rajdhani menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">ABOUT</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-Rajdhani"><GiShieldBash size="2rem"/>ThreatSense</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-Rajdhani text-lg">
            <li><a href="/">HOME</a></li>
            <li><a href="/services">SERVICES</a></li>
            <li><a href="/about">ABOUT</a></li>
          </ul>
        </div>
        <div className="navbar-end">
        <Button/>
          </div>
          </div>
          </div>
  )
}

export default Header