import React from 'react';
import "./punch.css";
import { ReactComponent as Arrow } from './show-details.svg';

const Punch = () => {
    return (
        <div className = 'bg-white dib w-100 pl3 bb bt b--black-20 h-auto'>
        <div>
            <div className = "jobno-client top-margin relative">
              <h2 className = 'heading left gray'>#0100 </h2>
              <h2 className = 'heading bullet gray'>•</h2>
              <h2 className = 'heading gray'>Client Name</h2>
              <h2 className = 'heading dib absolute right-0 mr3'>3.43 h</h2>
              <Arrow className = 'absolute right-1 mr5 pt1'/>
            </div>
            <h2 className = "main-heading gray left nt3 w-100">Activity Description</h2>
          </div>
          <div className = 'startStop flex'>
            <div className = "start-info">
              <h1 className = "caption nt2 mb3">START</h1>
              <div className = "div-block-3 mb3">
                <h3 className = "heading-3 mt2">HH:mm</h3>
                <h3 className = "heading-3 mt2">12/31/20</h3>
              </div>
            </div>
            <div className = "stop-info">
              <h1 className = "caption nt2 mb3">STOP</h1>
              <div className = "div-block-3 mb3">
                <h3 className = "heading-3 mt2">HH:mm</h3>
                <h3 className = "heading-3 mt2">12/31/20</h3>
              </div>
            </div>
            <div className = "notes w-100 nl3">
              <h1 className = "caption nt2 mb3">NOTES</h1>
              <div className = "div-block-3 w-100 mb3"></div>
            </div>
          </div>
        </div>
    );
}

export default Punch;