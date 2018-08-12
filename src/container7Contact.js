import React from 'react';
import './container7Contact.css';

export default class ContainerContact extends React.Component {
    render() {
        return (
            <div className="container-contact">
                <h1 className="contact-item1">Contact Me</h1>
                <div className="contact-item2">
                    <a href="mailto:verdant.light@gmail.com?subject=Web Development Enquiry" target="_blank"><i class="far fa-envelope icon-media" alt="blank"></i></a>
                    <h2>verdant.light@gmai.com</h2>
                    <br/>
                    <a href="https://github.com/albertpai" target="_blank"><i className="fab fa-github icon-media"></i></a>
                    <a href="https://www.linkedin.com/in/albert-pai/" target="_blank"><i class="fab fa-linkedin icon-media"></i></a>
                    <a href="https://www.facebook.com/albert.pai" target="_blank"><i className="fab fa-facebook-square icon-media"></i></a>
                </div>
            </div>
        )
    }
}