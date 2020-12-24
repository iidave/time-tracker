import React from 'react';
import "./punch.css";
import { ReactComponent as Arrow } from './show-details.svg';


const Punch = (props) => {
    return (
        <div className = 'bg-highlight dib w-100 bb bt b--black-20 h-auto ma0'>

          <div className = "bb b--black-10 mr3">
            <div className = "flex nt2 relative">
              <h2 className = 'fw6 f5 black-50 pt2 pl3 pr2'>{props.jobNo}</h2>
              <h2 className = 'fw6 f5 black-50 pa2'>•</h2>
              <h2 className = 'fw6 f5 black-50 pa2'>{props.customer}</h2>
              <h2 className = 'fw6 f5 black-50 pa2'>•</h2>
              <h2 className = 'fw6 f5 blueText pa2'>{props.punchTask}</h2>
                <div className = "absolute right-0 pt2">
                    <Arrow className = 'pt3 pr3'/>
                    <h2 className = 'fw6 f5 dib mr3'>{props.punchElapse} h</h2>
                </div>
              </div>

            <h2 className = "f4 black-70 ph3 nt2 w-100">{props.jobDesc}</h2>
          </div>

          {/* <div className = 'flex flex-wrap nt4'>
            <div className = "ma2 ml3 mt3 w-auto">
              <h2 className = "fw5 f6 black-40 lh-copy nt2 mb1">START</h2>
              <div className = "bg-white flex mt3 ba b--black-10 h2 db w-auto ">
                <h3 className = "fw1 f6 mt2 pl2">{props.punchIn}</h3>
                <h3 className = "fw1 f6 mt2 pl2 pr2">{props.punchDate}</h3>
              </div>
            </div>

            <div className = "ma2 ml3 mt3 w-auto">
              <h2 className = "fw5 f6 black-40 lh-copy nt2 mb1">STOP</h2>
              <div className = "bg-white flex mt3 ba b--black-10 h2 w-100">
                <h3 className = "fw1 f6 mt2 pl2">{props.punchOut}</h3>
                <h3 className = "fw1 f6 mt2 pl2 pr2">{props.punchDate}</h3>
              </div>
            </div>

            <div className = "ma3 flex-auto">
              <h2 className = "fw1 f6 lh-copy nt2 mb1">NOTES</h2>
              <div className = "bg-white flex mt3 ba b--black-10 h2" >
                <div className = "dib pa2 w-75 ">{props.punchNotes}</div>
                  <a class="f6 link dim br2 ph3 pv2 mb2 white blueBkgd h2 nr6 ml3" href="#0">SUBMIT</a>
              </div>
                  
            </div> */}
            <section className = 'punchArea cf w-100 pv3 ph4-ns h-auto'> 
              <div className = 'fl w-20 pa2'>
                  <h2 className = "fw5 f5 black-40 lh-copy nt2 mb1">START</h2>
                  <div className = "ba b--black-10 bg-white tc pv1 flex flex-wrap h-auto ">
                  <h3 className = "fw6 f5 blueText mt1 pl2">{props.punchIn}</h3>
                  
                  <h3 className = "fw1 f5 mt1 pl2">{props.punchDate}</h3>
                </div>
              </div>

              <div className = 'fl w-20 pa2'>
                  <h2 className = "fw5 f5 black-40 lh-copy nt2 mb1">STOP</h2>
                <div className = "ba b--black-10 bg-white tc pv1 flex flex-wrap h-auto">
                  <h3 className = "fw6 f5 blueText mt1 pl2">{props.punchOut}</h3>
                  <h3 className = "fw1 f5 mt1 pl2">{props.punchDate}</h3>
                </div>
              </div>

              <div className = 'fl w-50 pa2'>
                  <h2 className = "fw5 f5 black-40 lh-copy nt2 mb1">NOTES</h2>
                <div className = "ba b--black-10 bg-white tc pv1 flex flex-wrap h-auto">
                  <h3 className = "fw1 f5 mt1 pl2">{props.punchNotes}</h3>
                </div>
              </div>

              <div className = 'fl w-10 pa2'>
              <h2 className = "fw5 f9 white lh-copy nt2 mb1">-</h2>
                  <a class="f6 link dim br2 ph2 pv2 white blueBkgd h2" href="#0">SUBMIT</a>
              </div>

            </section>

            
            
        </div>
    );
}

export default Punch;