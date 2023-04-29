import React from 'react'
import logoimg from '../../images/logo.svg'
import './Header.css'

const Header = () => {
  return (
    <header>
        <div className='logo'>
            <img src={logoimg} />
        </div>
        <nav>
            <ul className='nav-link'>
                <li><a href="">Features</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Resources</a></li>
            </ul>
            <div className='btn'>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </nav>
    </header>
  )
}

export default Header