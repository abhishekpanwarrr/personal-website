import React from 'react'
import './Box.css'

function Box ({title,Icon}){
    return (
        <div className='box'>
            <div className='box__iconContainer'>
                <Icon className='box__icon' />
            </div>
                <p>{title}</p>
        </div>
    )
}

export default Box