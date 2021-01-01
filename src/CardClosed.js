import React from 'react';
import "./Card.css";
import { ReactComponent as RotateArrow} from './rotateArrow.svg';

const CardClosed = (props) => {
    return (
        <div className = 'bg-light-gray w-90 center h-auto pa3 hover-bg-black-10 bw2 shadow-5 z-0 mb2'>
            {/* <Header /> */}
            <div className = 'relative h1 ma3 closed'>
                    <RotateArrow />
                    <h2 className = 'dib fw6 f4 nt4 pa3'>Yesterday  </h2>
                    <h2 className = 'dib fw6 f4 nt4 pa1'>12/29/2020</h2>
                    <h2 className = 'fw6 f4 nt1 dib absolute right-1'>6.27 h</h2>
            </div>
            
        </div>
    );
}

export default CardClosed;