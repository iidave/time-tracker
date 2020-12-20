import React from 'react';
import "./punch.css";
import { ReactComponent as Arrow } from './show-details.svg';

const Punch = () => {
    return (
        <div className = 'bg-white dib w-100 bb bt b--black-20 h-auto'>

          <div>
            <div className = "flex nt2 relative">
              <h2 className = 'fw6 f5 black-50 pt2 pl3 pr2'>#0100 </h2>
              <h2 className = 'fw6 f5 black-50 pa2'>•</h2>
              <h2 className = 'fw6 f5 black-50 pa2'>Client Name</h2>
                <div className = "absolute right-0 pt2">
                    <Arrow className = 'pt3 pr3'/>
                    <h2 className = 'fw6 f5 dib mr3'>3.43 h</h2>
                </div>
              </div>

            <h2 className = "black-50 pa3 nt4 w-100">Activity Description</h2>
          </div>

          <div className = 'flex flex-wrap nt4'>
            <div className = "ma2 ml3 mt3 w-20">
              <h1 className = "fw5 f6 black-40 lh-copy nt2 mb1">START</h1>
              <div className = "flex ba b--black-10 h2 db w-100">
                <h3 className = "fw1 f6 mt2 pl2">HH:mm</h3>
                <h3 className = "fw1 f6 mt2 pl2 pr2">12/31/20</h3>
              </div>
            </div>

            <div className = "ma2 ml3 mt3 w-20">
              <h1 className = "fw5 f6 black-40 lh-copy nt2 mb1">STOP</h1>
              <div className = "flex ba b--black-10 h2 w-100">
                <h3 className = "fw1 f6 mt2 pl2">HH:mm</h3>
                <h3 className = "fw1 f6 mt2 pl2 pr2">12/31/20</h3>
              </div>
            </div>

            <div className = "ma3 w-50">
              <h1 className = "fw1 f6 lh-copy nt2 mb1">NOTES</h1>
              <div className = "flex">
                <div className = "ba b--black-10 black-30 h2 db pa2 w-100">Enter notes here</div>
                  <a class="f6 link dim br2 ph3 pv2 mb2 white blueBkgd h2 mr2 ml3" href="#0">SUBMIT</a>
              </div>
                  
            </div>
        </div>
        </div>
    );
}

export default Punch;