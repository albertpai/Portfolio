import React from 'react';
import './container1Header.css';

export default class ContainerHeader extends React.Component {
    render() {
        return (
            <div>
                <header className="container-header">
                    <div className="header-text">
                        <h1 className="Title">
                        Albert Pai
                        </h1>
                        <h3 className="Subtitle">
                        A web developer who always stands in your shoes
                        <br/>
                        Enquires at verdant.light@gmail.com
                        </h3>
                        <a href="mailto:verdant.light@gmail.com?subject=Web Development Enquiry" target="_blank"><button className="button">Email Me</button></a>
                    </div>
                </header>
            </div>
        )
    }
}