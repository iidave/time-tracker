import React from 'react';
import Header from './Header';
import JobEntry from './JobEntry';
import "./Card.css";
import { ReactComponent as Arrow } from './show-details.svg';

const JobEntryCard = (props) => {
    return (
        <div className = 'bkgdColor bkgdColor:hover w-90 center h-auto pa3 bw2 shadow-5 z-0 mt2 mb2'>
            {/* <Header /> */}
            <div className = 'relative h1 ma3'>
                    <Arrow />
                    <h2 className = 'dib fw6 f4 nt4 pa3'>Today  </h2>
                    <h2 className = 'dib fw6 f4 nt4 pa1'>12/30/2020</h2>
                    <h2 className = 'fw6 f4 nt1 dib absolute right-1'>4.00 h</h2>
            </div>
            <Header />
            <JobEntry />
           
        </div>
    );
}

export default JobEntryCard;