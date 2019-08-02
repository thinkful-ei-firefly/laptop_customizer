import React from 'react';
import Selected from './Selected';

function Features(props) {
  return (
    Object.keys(props.features).map(key => {
      return (
        <div className="feature" key={key}>
          <div className="feature__name">{key}</div>
          <ul className="feature__list">
            <Selected
              features={props.features}
              feature={key}
              selected={props.selected}
              updateFeature={props.updateFeature}
            />
          </ul>
        </div>
      );
    })
  );
}

export default Features;
