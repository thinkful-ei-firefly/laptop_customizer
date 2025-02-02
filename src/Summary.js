import React from 'react';
import Total from './Total';

function Summary(props) {
  return (
    <section className="main__summary">
      <h3>NEW GREENLEAF 2018</h3>
      {props.summary}
      <Total total={props.total} />
    </section>
  );
}

export default Summary;
