import React from 'react';
import './JobEntry.css';

const JobEntry = () => {
  return (
    <section className='jobEntry'>
      <div class='pv1 ph3 pv1-ns'>
        <h4 class='f4 fw6'>Job Entry</h4>
        <dl class='f5 lh-title mv3 bb pv3 pl3 bg-hilt-wht bg-hilt-wht:hover'>
          <dt class='dib b'>Job Number:&ensp;</dt>
          <dd class='dib ml0'>DW_0001</dd>
        </dl>
        <dl class='f5 lh-title mv3 bb pv3 pl3 bg-hilt-wht bg-hilt-wht:hover'>
          <dt class='dib b'>Customer: &ensp;</dt>
          <dd class='dib ml0'>
            <input type='text' id='custInput' />
          </dd>
        </dl>
        <dl class='f5 lh-title mv3 w-100 bb pv3 pl3 bg-hilt-wht bg-hilt-wht:hover'>
          <dt class='dib b'>Job Decription:&ensp;</dt>
          <dd class='dib ml0 w-auto'>
            <input
              type='text'
              class="f6 f5-l input-reset bn fl black-80 bg-white pa2 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
              id='jobDescInput'
              placeholder='Please describe activity required'
            />
          </dd>
        </dl>
        <dl class='f5 lh-title mv3 bb pv3 pl3 bg-hilt-wht bg-hilt-wht:hover'>
          <dt class='dib b'>Task:&ensp;</dt>
          <dd class='dib ml0'>
            <select name='Tasks' id='task'>
              <option value='Design'></option>
              <option value='Production'></option>
              <option value='3D'></option>
              <option value='Illustration'></option>
              <option value='Meeting'></option>
              <option value='Photography'></option>
            </select>
          </dd>
        </dl>
        <dl class='f5 lh-title mv3 bb pv3 pl3 bg-hilt-wht bg-hilt-wht:hovere'>
          <dt class='dib b mt0'>Notes:&ensp;</dt>
          <dd class='dib ml0 w-90'>
            <input type='text' id='notesInput' class="f6 f5-l input-reset bn fl black-80 bg-white pa2 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"/>
          </dd>
        </dl>
      </div>
    </section>
  );
};

export default JobEntry;
