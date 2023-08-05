import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {

    const Nav = styled.div`
        .nav_list{
            list-style:none;
            display: flex;
            gap :1.5rem;
            a{
                text-decoration: none;
                color: var(--extra);
                font-size: 16px;
                font-weight: 600;
                letter-spacing: 1px;
                padding:0.5rem 0px;
                position: relative;
                &:before{
                    content:'';
                    position: absolute;
                    bottom: 0px;
                    width: 0%;
                    height:3px;
                    background: var(--light-blue);
                    transition:0.5s;
                }
                &:hover:before{
                    width: 100%;
                    transition:0.5s;
                }
            }
        }
    `

  return (
    <Nav>
        <ul className='nav_list'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='about'>About Us</NavLink></li>
            <li><NavLink href=''>Service</NavLink></li>
            <li><NavLink href=''>Corporate Training</NavLink></li>
            <li><NavLink href=''>Futuristic Technologies</NavLink></li>
            <li><NavLink href=''>Alumni</NavLink></li>
            <li><NavLink href=''>Contact</NavLink></li>
        </ul>
    </Nav>
  )
}

export default Nav