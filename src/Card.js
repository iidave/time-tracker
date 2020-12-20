import React from 'react';
import Header from './Header';
import Punch from './Punch';
import "./Card.css";
import { ReactComponent as Arrow } from './show-details.svg';

const Card = () => {
    return (
        <div className = 'bg-light-gray dib w-90 h-auto br3 pa3 ma2 ml4 grow bw2 shadow-5 z-0'>
            <Header />
            <div className = 'relative h1 ma3 '>
                    <Arrow />
                    <h2 className = 'heading dib left'>Today  </h2>
                    <h2 className = 'heading dib left'>12/30/2020</h2>
                    <h2 className = 'heading dib absolute right-0'>3.43 h</h2>
            </div>
            <Punch />
            <Punch />
        </div>
    );
}

export default Card;