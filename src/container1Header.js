import React from 'react';
import './container1Header.css';

export default class ContainerHeader extends React.Component {
    render() {
        return (
            <div>
                <header className="container-header">
                    <div className="header-text">
                        <h1 className="title">
                        Albert Pai
                        </h1>
                        <h3 className="subtitle">
                        A web developer who always stands in your shoes
                        <br/>
                        Enquires at verdant.light@gmail.com
                        </h3>
                        <a href="mailto:verdant.light@gmail.com?subject=Web Development Enquiry" target="_blank" rel="noopener noreferrer">
                        <button className="button">Email Me</button>
                        </a>
                    </div>
                </header>
            </div>
        )
    }
}