import React, { Component } from 'react';
import './Compare.css';


class Compare extends Component {

  render() {

    const projName = ((this.props.name).toLowerCase()).replace(/\s/g, '');

    return (
      <div className="Compare">
        <div className="compareContainer">
          <h3>Original</h3>
          <img alt="Original" src={`/img/projects/originalImg/${projName}Orig.png`} />
        </div>

        <div className="compareContainer">
          <h3>My Version</h3>
          <img alt="Remake" src={`/img/projects/remadeImg/${projName}Remake.png`} />
        </div>
      </div>
    );
  }
}

export default Compare;
