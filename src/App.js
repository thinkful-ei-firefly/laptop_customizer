import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Specs from './Specs';
import Summary from './Summary';
import Feature from './Feature';
import SubSummary from './SubSummary'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
    const summary = Object.keys(this.state.selected)
          .map(key => <SubSummary
            key={key} 
            notAKey={key} 
            name={this.state.selected[key].name} 
            cost={this.state.selected[key].cost} />)

    const total = Object.keys(this.state.selected)
          .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);    


    const features = Object.keys(this.props.features)
          .map(key => {
            const options = this.props.features[key].map((item, index) => {
              const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;
              return (
              <li key={index} className="feature__item">
              <Feature
                  key={key}
                  notAKey={key}
                  index={index}
                  item={item}
                  featureClass={featureClass} 
                  updateFeature={this.updateFeature}
                  />
                  </li>
              )
            });

            return <div className="feature" key={key}>
              <div className="feature__name">{key}</div>
              <ul className="feature__list">
                { options }
              </ul>
            </div>
          });      

    return (
      <div className="App">
        <Header />      
        <main>
          <Specs features={features}/>
          <Summary summary={summary} total={total} />
        </main>
      </div>
    );
  }
}

export default App;  
