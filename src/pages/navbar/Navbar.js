import React from 'react'
import './style.css'
import logo from './shared/logo.svg'
import hamburgerIcon from './shared/icon-hamburger.svg'
import closeIcon from './shared/icon-close.svg'
import { Link } from 'react-router-dom'

function Navbar() {

  
  
  
  
  function toggleMenu(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
  }
  function close(){
    const nav = document.querySelector('nav');
    nav.classList.remove('show');
  }
  React.useEffect(()=>{
    const links = document.querySelectorAll('.links');
    links.forEach(link => {
      link.addEventListener('click',close)
    });
  },[])
  return (
    <header className='header'>
      <nav>
          <Link to='/'><img src={logo} alt='logo'/></Link>
          <hr className='navbar-hr'/>
          <ul>
              <Link to='/'><li className='links'><span>00</span> Home</li></Link>
              <Link to='/destination'><li className='links'><span>01</span> Destination</li></Link>
              <Link to='/crew'><li className='links'><span>02</span> Crew</li></Link>
              <Link to='/technology'><li className='links'><span>03</span> Technology</li></Link>
          </ul>
          <div onClick={toggleMenu} className='menu'>
            <img className='hamburger' src={hamburgerIcon} alt='hamburger'/>
            <img className='close' src={closeIcon} alt='close'/>
          </div>
      </nav>
    </header>
  )
}

export default Navbar