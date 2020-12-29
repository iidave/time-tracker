import React from 'react';
import "./punch.css";
import { ReactComponent as Arrow } from './show-details.svg';


const Punch = (props) => {
    return (
        <div className = 'dib w-100 ml2 pr3 h-auto bg-highlight'>

          <div className = 'bb pr2'>
            <div className = 'flex nt2 relative fw6 f5'>
              <h2 className = 'pt2 pl3 pr2'>{props.jobNo}</h2>
              <h2 className = 'pa2'>•</h2>
              <h2 className = 'pa2'>{props.customer}</h2>
              <h2 className = 'pa2'>•</h2>
              <h2 className = 'highlightText pa2'>{props.punchTask}</h2>
                <div className = 'absolute right-1 pt2'>
                    <Arrow className = 'pt3 pr3'/>
                    <h2 className = 'f4 dib'>{props.punchElapse} h</h2>
                </div>
              </div>

            <h2 className = 'f4 black-70 ph3 nt2 w-100'>{props.jobDesc}</h2>
          </div>

            <section className = 'cf w-100 pv3 ph2 ph4-ns h-auto bb'> 
              <div className = 'punchArea fl w-20 pa2'>
                  <h2 className = 'fw5 f5 black-40 nt2 mb2 pl3'>START</h2>
                  <div className = 'ba b--black-10 bg-white tc pv1 flex flex-wrap h-auto'>
                  <h3 className = 'fw6 f5 highlightText mt1 pl3 down'>{props.punchIn}</h3>
                  <h3 className = 'fw1 f5 mt1 pl3 down'>{props.punchDate}</h3>
                </div>
              </div>

              <div className = 'fl w-20 pa2'>
                  <h2 className = 'fw5 f5 black-40 nt2 mb2 pl3'>STOP</h2>
                <div className = 'ba b--black-10 bg-white tc pv1 flex flex-wrap h-auto'>
                  <h3 className = 'fw6 f5 highlightText mt1 pl3 down'>{props.punchOut}</h3>
                  <h3 className = 'fw1 f5 mt1 pl3 down'>{props.punchDate}</h3>
                </div>
              </div>

              <div className = 'fl w-50 down'>
                  <h2 className = 'fw5 f5 black-40 nt2 mb2 pl3'>NOTES</h2>
                <div className = 'ba b--black-10 bg-white tc pv1 flex flex-wrap h-auto'>
                  <h3 className = 'fw1 f5 mt1 pl3 down'>{props.punchNotes}</h3>
                </div>
              </div>

              <div className = 'fl w-10 pa2'>
              <h2 className = 'fw1 f5 mt1 pl3 button-down'>&nbsp;</h2>
                  <a class='link dim br2 ph2 pv3 white buttonClr fw6 f5 mt1 pl3 down' href="#0">START</a>
              </div>

            </section>

            
            
        </div>
    );
}

export default Punch;