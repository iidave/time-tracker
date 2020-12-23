import React from 'react';
import Header from './Header';
import Punch from './Punch';
import { PunchData } from './PunchData';
import "./Card.css";
import { ReactComponent as Arrow } from './show-details.svg';

const Card = (props) => {
    return (
        <div className = 'bg-light-gray dib w-90 h-auto br3 pa3 ma2 ml4 grow bw2 shadow-5 z-0'>
            <Header />
            <div className = 'relative h1 ma3 '>
                    <Arrow />
                    <h2 className = 'heading dib left'>Today  </h2>
                    <h2 className = 'heading dib left'>12/30/2020</h2>
                    <h2 className = 'heading dib absolute right-0'>3.43 h</h2>
            </div>
            <Punch jobNo={PunchData[0].jobNo} customer={PunchData[0].customer} jobDesc={PunchData[0].jobDesc} punchTask={PunchData[0].task} punchDate={PunchData[0].date} punchIn = {PunchData[0].punchIn} punchOut={PunchData[0].punchOut} punchNotes ={PunchData[0].notes} punchElapse ={PunchData[0].elapseTime}/>
            <Punch jobNo={PunchData[1].jobNo} customer={PunchData[1].customer} jobDesc={PunchData[1].jobDesc} punchTask={PunchData[1].task} punchDate={PunchData[1].date} punchIn = {PunchData[1].punchIn} punchOut={PunchData[1].punchOut}punchNotes ={PunchData[1].notes} punchElapse ={PunchData[1].elapseTime}/>
            <Punch jobNo={PunchData[2].jobNo} customer={PunchData[2].customer} jobDesc={PunchData[2].jobDesc} punchTask={PunchData[2].task} punchDate={PunchData[2].date} punchIn = {PunchData[2].punchIn} punchOut={PunchData[2].punchOut}punchNotes ={PunchData[2].notes} punchElapse ={PunchData[2].elapseTime}/>
            <Punch jobNo={PunchData[3].jobNo} customer={PunchData[3].customer} jobDesc={PunchData[3].jobDesc} punchTask={PunchData[3].task} punchDate={PunchData[3].date} punchIn = {PunchData[3].punchIn} punchOut={PunchData[3].punchOut} punchNotes ={PunchData[3].notes} punchElapse ={PunchData[3].elapseTime}/>
        </div>
    );
}

export default Card;