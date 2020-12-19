import React from 'react';
import "./punch.css";

const Punch = () => {
    return (
        <div className = 'bg-white dib w-100 pl3 bb bt b--black-20 h-auto'>
        <div>
            <div className = "jobno-client top-margin">
              <h2 className = 'heading left gray'>#0100 </h2>
              <h2 className = 'heading bullet gray'>•</h2>
              <h2 className = 'heading gray'>Client Name</h2>
            </div>
            <h1 className = "main-heading gray left">Activity Description</h1>
          </div>
        </div>
    );
}

export default Punch;