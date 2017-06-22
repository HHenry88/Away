import React from 'react';
import MapView from './mapView.jsx';
import DestinationsList from './resultBoxes.jsx';
import ResultTabs from './resultTabs.jsx';
import ResultsSummary from './resultsSummary.jsx';



class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
    <div className="results-container">
      <div className="results">
        <ResultsSummary temp={this.props.temp} date={this.props.date}/>
        <DestinationsList destinations={this.props.results}/>
        <MapView destinations={this.props.results}/>
        <ResultTabs destinations={this.props.results}/>
      </div>
    </div>
    )
 } 
}

export default Results;


// <DestinationsList destinations={testArray}/>
// <MapView destinations={testArray}/>
// <ResultTabs destinations={testArray}/>