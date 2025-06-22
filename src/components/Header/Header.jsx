import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './header.css';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';




function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
 
 
  
  return (

    
    
    <div className="container">
      
      <Sidebar/>
     
      <div className="listheader">
        <ul>
          <li className="no-hover">
            <div className="logo"><a href="/"><h1>YM</h1></a></div>
          </li>
          <li className="homeli"><Link to="/" className="linkwork">Home</Link> </li>
          <li className='homeli1'><Link to="/works" className="linkwork">My Work </Link></li>
          <li className='homeli1'><Link to="/about" className="linkwork">About Me</Link></li>

          <li className='homeli1'
            onClick={toggleDropdown} 
            style={{ cursor: 'pointer', position: 'relative' }}
          >
            Contact Us{" "}
            <i className={`smbr bi ${isOpen ? "bi-chevron-down" : "bi-chevron-right"}`}></i>

            {isOpen && (
              <ul className="dropdown">
                <li>
                  <Link to="/contact" className="linkwork">
                    <i class="fa-solid fa-paper-plane"></i> <strong>Contact me:</strong> 
                    <p>Have you any Questions? fel free to reach out to me.</p>
                  </Link>
                </li>
                <li>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i> GitHub
                    <p>Explore my Projects and contributions on Github.</p>
                  </a>
                </li>
             
                <li>
                  <a href="mailto:you@example.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-envelope-arrow-up-fill"></i> Email
                    <p> or Send me an email</p>
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className="setings">
        <i className="bi bi-gear-wide-connected"></i>
       
      </div>
      
    </div>
  );
}

export default Header;
