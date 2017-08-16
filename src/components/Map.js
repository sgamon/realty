import React, { Component } from 'react';


class Map extends Component {
  render() {
    return (
      <div className="map panel panel-default">
        {this.props.title &&
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.title}</h3>
        </div>
        }
        <div className="panel-body">
          <pre>
          I'm the map!
          I'm the map!
          I'm the map!
          </pre>
        </div>
      </div>
    );
  }
}

export default Map;
