import React from 'react';
import './container3Project.less';
import kodflix from '../img/kodflix.png';
import alpha from '../img/alpha.svg';

export default class ContainerProject extends React.Component {
    render() {
        return (
            <div className="container-project">
                <h1 className="project-item1">Current Projects</h1>
                <div className="project-item2">
                    <a href="https://github.com/albertpai/Kodflix" target="_blank" rel="noopener noreferrer"><img src={kodflix} alt="" /></a>
                </div>
                <div className="project-item2">
                    <a href="https://github.com/albertpai/alpha-app" target="_blank" rel="noopener noreferrer"><img src={alpha} alt="" /></a>
                </div>
            </div>
        )
    }
}