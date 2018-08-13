import React from 'react';
import './container2Bio.css';
import Portrait from './img/portrait.jpg';

export default class ContainerBio extends React.Component {
    render() {
        return (
            <div className="container-bio">
                <div className="bio-item1">
                    <h1>About Pai</h1>
                </div>
                <div className="bio-item2">
                    <img src={Portrait} alt='' className='avatar' />
                    <p>Hello! I am a web developer. I am an avid learner of technology. Currently, I am learning several frontend skills, including Html5, CSS3, JavaScript ES6 and beyond, as well as React, an increasingly popular JavaScript library. Meanwhile, I am also quickly picking up a number of backend skills like Node.js, Express.js and MongoDB. My goal is becoming a full-stack developer.</p>
                    <p>     I love coding because using a nice piece of code to deliver a project is a wonderful experience! In the modern world, the coding skills can help to make a better world for us. Therefore, I believe that the benefits of technology should be shared by everyone in the society.</p>
                    <p>     Your online presence is your brand. For businesses, the style and speed of your website will have a huge impact on the size of customers and eventually on the profits of your company. For individuals and other organisations, having a great well-designed website means you can offer faster information and making your work more available to other people. Please do not hesitate to contact me if you  have any questions, have business enquiries, want to share a code, or just want to say hi! ; ) </p>
                </div>
            </div>
        )
    }
}