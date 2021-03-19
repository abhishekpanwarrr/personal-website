import React from 'react'
import './Header.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export const Header = () => {
    return (
        <div className='header'>
            <div className='header__logoContainer'>
                <img src='https://images.pexels.com/photos/7082512/pexels-photo-7082512.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='header_image' />
            </div>
                <h1>Abhishek Panwar</h1>
                <h4>Developer & trouble shooter</h4>
                <p>
                Heart Winning Developer and Troubleshooter from Gurgaon. Check out my best works below or let's <a href='/aboutc'>start work</a>
                </p>
            <a href='/about'><ExpandMoreIcon/> </a>
        </div>
    )
}
