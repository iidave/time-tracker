import React, {Component} from 'react';
import "./Header.css";
import { ReactComponent as Watch } from './watch.svg';
import { ReactComponent as Start } from './start.svg';


class Header extends Component{
    render() {
        return (
            <div className="header">
                <div className="client-info main">
                    <div className="jobno-client">
                        <h2 className="job-num head">#0100 </h2>
                        <h2 className="client-bullet">•</h2>
                        <h2 className="client-name">Client Name</h2>
                    </div>
                    <h1 className="main-heading white">Activity Description</h1>
                </div>
                <div className="div-block-2">
                    <Watch className="image-3"/>
                    <h3 className="timeclock">01:32:45</h3>
                    <Start className="image-2"/>
                </div>
            </div>
        );
    }
}

export default Header;