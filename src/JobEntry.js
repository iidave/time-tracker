import React from 'react';
import './JobEntry.css';


const JobEntry = () => {
    return(
        <section className='jobEntry'>
        <div class="pv1 ph3 pv1-ns">
            <h4 class="f4 fw6">Job Entry</h4>
            <dl class="f5 lh-title mv3 bb pv3 pl3 bg-hilt-wht bg-hilt-wht:hover">
                <dt class="dib b">Job Number:&ensp;</dt>
                <dd class="dib ml0">DW_0001</dd>
            </dl>
            <dl class="f5 lh-title mv3 bb pv3 pl3 bg-hilt-wht bg-hilt-wht:hover">
                <dt class="dib b">Customer: &ensp;</dt>
                <dd class="dib ml0">OBDK</dd>
            </dl>
            <dl class="f5 lh-title mv3 bb pv3 pl3 bg-hilt-wht bg-hilt-wht:hover">
                <dt class="dib b">Job Decription:&ensp;</dt>
                <dd class="dib ml0">Refine, update logos, graphics</dd>
            </dl>
            <dl class="f5 lh-title mv3 bb pv3 pl3 bg-hilt-wht bg-hilt-wht:hover">
                <dt class="dib b">Task:&ensp;</dt>
                <dd class="dib ml0">Design</dd>
            </dl>
            <dl class="f5 lh-title mv3 bb pv3 pl3 bg-hilt-wht bg-hilt-wht:hovere">
                <dt class="dib b">Notes:&ensp;</dt>
                <dd class="dib ml0">OBDK logo refinement</dd>
            </dl>
            </div>
        </section>
    );
}


export default JobEntry;
