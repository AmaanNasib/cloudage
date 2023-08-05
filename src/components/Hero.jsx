import React from 'react'
import styled from 'styled-components'
import Background from "../assets/bg-image.png"
import Banner from "../assets/banner-image.png"
import Header from './Header'

const Hero = () => {
    const Hero = styled.section`
    background: url(${Background});
    background-size: cover;
    background-position: center;
    height:100vh;
    position: absolute;
    z-index: -1;
    top: 0px;
    .banner_section{
        display:flex;
        height: 100%;
        .banner_item{
            width:50%;
            height:100%;
                img{
                    width: 80%;
                }
        }
        .banner-image{
            display: flex;
            justify-content:center;
            align-items: center;
        }
        .banner-content {
            display: flex;
            justify-content: center;
            flex-direction: column;
            text-align:left;
            padding: 0px 2rem;
            gap: 15px;
            h2 {
                font-size: 40px;
                color: var(--dark-blue);
            }
            h5 {
                font-size: 15px;
                text-transform: uppercase;
                letter-spacing: 2px;
            }
            p {
                font-size: 20px;
            }
        }
    }
    `
  return (
    <Hero>
        <section className='banner_section'>
            <div className='banner-content banner_item'>
                <h5>CloudAge</h5>
                <h2>Welcome To <br/>The World of Opportunities !</h2>
                <p>  Enable the AI-first Enterprise with CloudAge</p>
            </div>
            <div className='banner-image banner_item'>
                <img src={Banner}/>
            </div>
        </section>
    </Hero>
  )
}

export default Hero