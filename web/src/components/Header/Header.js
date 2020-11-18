import React from 'react'
import './styles.css';
import logo from '../../assets/Halloween.svg'

const Header = () => {
  return (
        <>
          <header>
            <div className="container">
            <img
          src={logo}
          alt=""
        />           
        <nav>
            <ul>
              <li><a href="/">Login</a></li>
              <li><a href="/">Register</a></li>
            </ul>
          </nav>
          </div>
          </header>
          
   </>
  )
}

export default Header
