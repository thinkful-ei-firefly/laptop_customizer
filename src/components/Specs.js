import React from 'react';
import Feature from './Feature';

function Specs(props) {
  return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
      <Feature
        features={props.features}
        selected={props.selected}
        updateFeature={props.updateFeature}
      />
    </section>
  );
}

export default Specs;
