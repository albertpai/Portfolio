import React from 'react';
import './container5IT.less';

export default class ContainerIT extends React.Component {
    render() {
        return (
                <div className="container-it">
                <h1 className="it-item1">IT Skills</h1>
                    <div className="it-item2">
                        <i className="devicon-slack-plain colored icon-skill-2"></i>
                        <p>Slack</p>
                    </div>
                    <div className="it-item2">
                        <i className="devicon-trello-plain colored icon-skill-2"></i>
                        <p>Trello</p>
                    </div>
                    <div className="it-item2">
                        <i className="devicon-visualstudio-plain colored icon-skill-2"></i>
                        <p>Visual Studio</p>
                    </div>
                    <div className="it-item2">
                        <i className="devicon-pycharm-plain colored icon-skill-2"></i>
                        <p>Pycharm</p>
                    </div>
                </div>
        )
    }
}