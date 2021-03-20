import React from 'react'
import './Profile.css'

export const Profile = () => {
    return (
        <div className='profile'>
            <h3>My Profile</h3>
            <div className='profile__container'>
                <div className='proflie__first'>
                    <p className='profile__bold'>I am Abhishek Panwar as I've said it already and I am from Gurugram .</p>
                    <p>Now this is going to be a long paragraph of some complete nonsense text and I suggest you not to read it because why would you waste your time reading something that adds nothing to you. Any way its just a suggestion and who am I to stop you from wasting your time.</p>
                    <p>Now this is going to be a long paragraph of some complete nonsense text and I suggest you not to read it because why would you waste your time reading something that adds nothing to you. Any way its just a suggestion and who am I to stop you from wasting your time. Now this is going to be a long paragraph of some complete nonsense text and I suggest you not to read it because why would you waste your time reading something that adds nothing to you. Any way its just a suggestion and who am I to stop you from wasting your time.</p>
                    <p>Also, please do care to look at my experience and awards I received over a decade of my very beaufiful career.</p>
                </div>
                <div className='profile__experience'>
                    <h3>WORK & EXPERIENCE</h3>
                    <div  className='profile__ul'>
                        <ul>
                            <li>Web Developer</li>
                            <li>React Js</li>
                            <li>Javascript</li>
                            <li>Firebase</li>
                        </ul>
                        <ul>
                            <li>Firebase</li>
                            <li>SQL</li>
                        </ul>
                    </div>


                    {/* <h3 className='awards'>WORK & EXPERIENCE</h3>
                    <div  className='profile__ul none_border'>
                        <ul>
                            <li>Design & Content Lead</li>
                            <li>Design & Content Lead</li>
                            <li>Design & Content Lead</li>
                            <li>Design & Content Lead</li>
                        </ul>
                        <ul>
                            <li>Design & Content Lead</li>
                            <li>Design & Content Lead</li>
                            <li>Design & Content Lead</li>
                            <li>Design & Content Lead</li>
                        </ul>
                    </div> */}
                   
                </div>
            </div>
        </div>
    )
}
