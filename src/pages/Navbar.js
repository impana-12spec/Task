import React from 'react';
import './Navbar.css';

import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className="wrapper">
    
    </div>

   

    <div className=" navbar-header" >
         <input type="checkbox" name="" id="check" />
            <div className= 'nav-btn' >
                <div className="nav-links">
                    <ul>
                    <li className="nav-link" style={{ '--i': '0.85s' }}>
                          <a href="/">Home</a>
                         
                        </li>
                        <li className="nav-link" style={{ '--i': '0.85s' }}>
                          <a href="/about">About</a>
                         
                        </li>
                        <li className="nav-link" style={{ '--i': '0.85s' }}>
                            <Link to='/HeadTail'>Head & Tail </Link>
                        </li>
                       
                        
                    </ul>
                </div>
             

            </div>
            <div className="hamburger-menu-container " >
                <div className="hamburger-menu">
                    <div></div>
                </div>
            </div>
            </div>

    </div>
  )
}

export default Navbar