import React from 'react';
import { PunchData } from './PunchData'; 


const PunchDate = () => {
    return(
        <div className = 'bkgdColor w-90 center h-auto pa3 bw2 shadow-5 z-0 mt2 mb2'>
            <div className = 'relative h2 ma3 bb'>
                    <Arrow />
                    <h2 className = 'dib fw6 f4 nt4 pa3'>Today  </h2>
                    <h2 className = 'dib fw6 f4 nt4 pa1'>{PunchData[0].date}</h2>
                    <h2 className = 'fw6 f4 nt1 dib absolute right-1'>4.00 h</h2>
            </div>
        </div>
    );
}
export default PunchDate;