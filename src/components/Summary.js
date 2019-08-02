import React from 'react';
import SubTotal from './SubTotal';
import Total from './Total';

function Summary(props) {
  return (
    <section className="main__summary">
      <h3>NEW GREENLEAF 2018</h3>
      <SubTotal selected={props.selected}/>
      <Total selected={props.selected} />
    </section>
  );
}

export default Summary;
