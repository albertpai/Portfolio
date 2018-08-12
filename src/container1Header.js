import React from 'react';
import './container1Header.css';

export default class ContainerHeader extends React.Component {
    render() {
        return (
            <div>
                <header className="container-head">
                    <div className="App-header">
                        <h1 className="App-title">
                        Albert Pai's Portfolio
                        </h1>
                        <a href="mailto:verdant.light@gmail.com?subject=Web Development Enquiry" target="_blank"><button className="button">Email Me</button></a>
                    </div>
                </header>
            </div>
        )
    }
}