import React from 'react';
import './container5More.css';

export default class ContainerMore extends React.Component {
    render() {
        return (
            <div className="container-more">
                <div className="more-item1">
                    <h1>More Skills</h1>
                    <ul>
                        <li><p>Statistical software: SPSS</p></li>
                        <li><p>Qualitative analysis software: NVivo</p></li>
                        <li><p>Office software: Word, Excel and PowerPoint.</p></li>
                        <li><p>Desktop publishing software: Adobe Acrobat Pro.</p></li>
                        <li><p>Computer‐assisted translation tools: SDL Trados Studio and memoQ.</p></li>
                        <li><p>Cloud-based translation tools: MateCat, XTM Cloud, Memsource Cloud.</p></li>
                    </ul>
                </div>
                <div className="more-item2">
                    <h1>Hobbies</h1>
                    <p>I enjoy coding and designing websites. I also love exploring nature and listening to music.</p>
                </div>
            </div>
        )
    }
}