import './sidebar.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Sidebar(){

    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }
    return(
        <div className='cntnr'>
            <div className='hider'>
                <div className="logo1"><a href="/"><img src="images/logo.jpg" alt="" /></a></div>
                <div className="setings1">
                    <i className="bi bi-gear-wide-connected"></i>
                </div>
            
                <button className='menu-btn' onClick={toggleSidebar}><i class="fa-solid fa-bars"></i></button>
            </div>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <button className='close-btn' onClick={toggleSidebar}><i class="fa-solid fa-circle-xmark"></i></button>
                
                    <nav>
                        <ul className='listsidebar'>
                            <Link to="/" className="linkwork"><li  >Home</li></Link>
                            <Link to="/works" className="linkwork"><li>My Work</li></Link>
                            <Link to="/about" className="linkwork"><li>About Me</li></Link>
                            <Link to="/contact" className="linkwork"><li>contact Us</li></Link>

                        </ul>
                    </nav>
            </div>
            
            
               
        </div>

        
    )
}
export default Sidebar;