import React from 'react'
import Logo from '../assets/cloudage_logo.png'
import styled, { css } from 'styled-components'


const Header = () => {
    const Wrapper = styled.section`

    .header_section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
            height: 100px;
            img {
                height: 100%;
                object-fit: cover;
            }
        }
    }
    `

  return (
    <Wrapper>
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
    </Wrapper>
  )
}

export default Header