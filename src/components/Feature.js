import React from 'react';

function Feature(props) {
    return (
        <div className={props.featureClass}
                  
                  onClick={e => props.updateFeature(props.notAKey, props.item)}>
                    { props.item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(props.item.cost) })
                </div>
    )
}

export default Feature