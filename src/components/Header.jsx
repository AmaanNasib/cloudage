import React from 'react'
import Logo from '../assets/cloudage_logo.png'

const Header = () => {
  return (
    <>
        <div className="header_section">
            <div className='logo'>
                <img src={Logo} />
            </div>
            <div className="navigation">
                <ul className='nav_list'>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>About</a></li>
                    <li><a href=''>Service</a></li>
                    <li><a href=''>Contact</a></li>
                </ul>
            </div>
            <div className='apply_btn'>
                <button>Apply Now</button>
            </div>
        </div>
    </>
  )
}

export default Header