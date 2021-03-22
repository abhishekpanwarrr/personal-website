import React from 'react'
import './Footer.css'
import FooterImage from '../11.jpg'
function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className='footer__box'>
               <div className='footer__boxImage'>
                <img src={FooterImage} alt='footer_image' />
               </div>
                <a href="mailto:abhishekpanwar1718@gmail.com" >abhishekpanwar1718@gmail.com</a>
            </div>
            <div className='footer__bottom'>
                <div className='footer__bottomLeft'>
                    <a href='/'>Facebook</a>
                    <a href='/'>Github</a>
                    <a href='/'>Behance</a>
                </div>
                <div className='footer__bottomRight'>
                    <p>152 Gurugram</p>
                    <p>Haryana 123401</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
