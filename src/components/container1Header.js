import React from 'react';
import './container1Header.less';

export default class ContainerHeader extends React.Component {
    render() {
        return (
            <div>
                <header className="container-header">
                    <div className="header-box">
                        <h1 className="flex-item-title">
                            Albert Pai
                        </h1>
                        <h3 className="flex-item-subtitle">
                            A web developer who always stands in your shoes
                        </h3>
                        <h4>
                            Enquires at verdant.light@gmail.com
                        </h4>
                        <div className="flex-item-button">
                            <a href="mailto:verdant.light@gmail.com?subject=Web Development Enquiry" target="_blank" rel="noopener noreferrer">
                                <button className="button">Email Me</button>
                            </a>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}