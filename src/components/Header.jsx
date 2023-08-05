import React from 'react'
import Logo from '../assets/cloudage_logo.png'
import styled, { css } from 'styled-components'
import Nav from './Nav'


const Header = () => {
    const Wrapper = styled.section`

    .header_section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 20px;
        .logo {
            height: 85px;
            img {
                height: 100%;
                object-fit: cover;
            }
        }
        
        .apply_btn{
            button{
                padding: 8px 16px;
                background: none;
                border: 2px solid var(--light-blue);
                border-radius: 5px;                
                font-size: 14px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 3px;
                color: var(--light-blue);
                cursor: pointer;
                transition:0.5s;
                &:hover{
                    transform: scale(1.1);
                    transition:0.5s;
                    background: var(--light-blue);
                    color: white;
                    
                }
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
                <Nav />
            </div>
            <div className='apply_btn'>
                <button>Enroll Now</button>
            </div>
        </div>
    </Wrapper>
  )
}

export default Header