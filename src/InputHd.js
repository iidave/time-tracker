import React, {Component} from 'react';
import "./InputHd.css";

class InputHd extends Component{
    render() {
        return (
            <div className="header relative"> {/* Keep Header css */}
                <div className="mt1">
                    <div className = "flex mt2 relative W-100">
                        <div class="hide-child absolute db ba bg-light-gray m3 pa2 z-1000">JOB NUMBER
                            <div class="child absolute db ba bg-light-gray m3 pa2">
                                <div> Hidden until hover or focus </div>
                                <div> Hidden until hover or focus </div>
                                <div> Hidden until hover or focus </div>
                                <div> Hidden until hover or focus </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InputHd;