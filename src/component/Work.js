import React from 'react'
import { Cards } from './Cards'
import './Work.css'

export const Work = () => {
    return (
        <div className='work' id='work' >
            <h1>Profile</h1>
            <div className='work__container'>
                <Cards link='https://abhishekk-twitter-clone.netlify.app/' title='Twitter Clone' desc='Twitter clone app with login functionality. Back-end for project is Firebase. Libaries used are :- #react-flip-move, #react-twitter-embed.
                For more information go to link below' img='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcnet3.cbsistatic.com%2Fimg%2Fn5ZAj2xmfJ-sAhlSUUsogto3K_A%3D%2F970x0%2F2014%2F06%2F12%2F95e98438-6657-4d87-9843-02ef7d70c8eb%2Ftwitter-logo.jpg&f=1&nofb=1' />
                <Cards link='https://abhi-react-redux-todo.netlify.app/' title='To Do App ' desc='Daily work app for listing your works. Libaries used are :- #firebase, #ract-redux, #moment. For more information go to link below' img='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.pcmag.com%2Fmedia%2Fimages%2F547668-the-best-to-do-list-apps.jpg%3Fthumb%3Dy%26width%3D810%26height%3D456&f=1&nofb=1' />
                <Cards link='https://abhi-netflix-redux-clone.netlify.app/' title='Netflix Clone App' desc='Video streaming app clone. Libaries used are :- #firebase, #ract-redux, #axios. For more information go to link below' img='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdigitalstrategies.tuck.dartmouth.edu%2Fwp-content%2Fuploads%2F2016%2F11%2FNetflix-Logo.png&f=1&nofb=1' />
            </div>
        </div>
    )
}
