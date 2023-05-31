import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg' 

const Navbar = () => {
  return (
    <div className='jarvis_navbar'>
      <div className='jarvis_navbar-links'>
        
        <div className='jarvis_navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div>
        
        <div className='jarvis_navbar-links_container'>
          <p><a href="#home"> Home </a></p>
          <p><a href="#wjarvis"> What is Jaris?</a></p>
          <p><a href="#openai"> Open AI </a></p>
          <p><a href="#casestudy"> Case Studies </a></p>
          <p><a href="#library"> Library </a></p>
        </div>

        <div className='jarvis_navbar-sign'>
          <p> Sign in</p>
          <button> Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar