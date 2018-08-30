import React from 'react';
import './container2Bio.less';
import Portrait from '../img/portrait.jpg';

export default class ContainerBio extends React.Component {
    render() {
        return (
            <div className="container-bio">
                <div className="bio-item1">
                    <h1>About Pai</h1>
                </div>
                <div className="bio-item2">
                    <img src={Portrait} alt='' className='avatar' />
                    <p>Hello! I am a web developer. I am an avid learner of technology. Currently, I am learning several frontend skills, including Html5, CSS3, JavaScript ES6 and beyond, as well as React, an increasingly popular JavaScript library. Meanwhile, I am also quickly picking up a number of backend skills, such as Node.js, Express.js and MongoDB. My goal is to become a full-stack developer.</p>
                    <p>     I love coding because using a nice piece of code to deliver a project is a wonderful experience! I believe that the coding skills can help to make a better world for us, and the benefits of technology should be shared by everyone.</p>
                    <p>     Your online presence is your brand. For businesses, the style and performance of your website will have a substantial impact on the number of your customers, their willing to trade with you, and eventually the profits of your company. For individuals and other organisations, a great well-designed website can help you reach other people faster and make the information about you or your organisation more accessible. Please do not hesitate to contact me if you  have any questions or business enquiries, or you just want to say hi! ; ) </p>
                </div>
            </div>
        )
    }
}