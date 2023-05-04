import React,{useState} from 'react'
import logoimg from '../../images/logo.svg'
import './Header.css'

const Header = () => {
    const [open, setopen] = useState(false)

    const openmenu=()=>{
        setopen(!open)            
    }
  return (
    <header>
        <div className="header">
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


            <div className='logo-menu' onClick={openmenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <nav className={`nav-mobile ${open?'show':''}`}>
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
        </div>

    </header>
  )
}

export default Header