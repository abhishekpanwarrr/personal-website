import React from 'react'
import Box  from './Box'
import './Job.css'
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball'
import GitHubIcon from '@material-ui/icons/GitHub'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'
export const Job = () => {
    return (
        <div className='job'>
            <h1>What I Do</h1>
            <div className='job__container'>
                <Box Icon={SportsBasketballIcon} title="I build websites that don't fly."/>
                <Box Icon={GitHubIcon} title="I write code that doesn't bite." />
                <Box Icon={SportsEsportsIcon} title="I design games that don't fail." />
            </div>
        </div>
    )
}
