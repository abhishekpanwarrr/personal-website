import React from 'react'
import { Cards } from './Cards'
import './Work.css'

export const Work = () => {
    return (
        <div className='work' >
            <h1>Profile</h1>
            <div className='work__container'>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </div>
    )
}
