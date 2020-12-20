import React, {Component} from 'react';
import "./Header.css";
import { ReactComponent as Watch } from './watch.svg';
import { ReactComponent as Start } from './start.svg';


class Header extends Component{
    render() {
        return (
            <div className="header"> {/* Keep Header css */}
                <div className="mt1">
                    <div className = "flex nt2 relative">
                        <h2 className = 'fw6 f5 white-70 pt2 pl3 pr2'>#0100 </h2>
                        <h2 className = 'fw6 f5 white-70 pa2'>•</h2>
                        <h2 className = 'fw6 f5 white-70 pa2'>Client Name</h2>
                    </div>
                    <h2 className = "white pa3 nt4 w-100">Activity Description</h2>
                </div>
                <div className="flex mt3">
                    <Watch className="pa3 nr2"/>
                    <h3 className="fw6 f5 white-70">01:32:45</h3>
                    <Start className="pa2 ml1"/>
                </div>
            </div>
        );
    }
}

export default Header;