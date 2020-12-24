import React, {Component} from 'react';
import "./InputHd.css";

class InputHd extends Component{
    render(props) {
        return (
            <div className="header relative"> {/* Keep Header css */}
                <div className="mt1 w-100 ">
                    <div className = "flex mt2 relative W-100">
                        <div class="hide-child absolute db ba bg-light-gray m3 pa2 z-1000">JOB NUMBER
                            <div class="child absolute db ba bg-light-gray m3 pa2 w-100">
                                <div className = "db w-100"> Hidden until hover or focus </div>
                                <div className = "db w-100"> Hidden until hover or focus </div>
                                <div className = "db w-100"> Hidden until hover or focus </div>
                                <div className = "db w-100"> Hidden until hover or focus </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InputHd;