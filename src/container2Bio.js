import React from 'react';
import './container2Bio.css';
import Portrait from './img/portrait.jpg';

export default class ContainerBio extends React.Component {
    render() {
        return (
            <div className="container-bio">
                <div className="bio-item1">
                    <img src={Portrait} alt='' className='avatar' />
                </div>
                <div className="bio-item2">
                    <h1>About Pai</h1>
                    <p>Hello! I am a junior developer. I am an avid learner of technology, and I am now learning JavaScript and React. Very soon, I will enhance my skills to the professional level, and become full-stack developer.</p>
                    <p>     I love coding because delivering objectives with a nice set of code is a wonderful experience! Furthermore, coding can help to make a better world for us. Therefore, I believe that the benefits of technology should be shared by everyone in the society.</p>
                </div>
            </div>
        )
    }
}