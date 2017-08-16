import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed"></button>
            <a className="navbar-brand">{this.props.projectName}</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse"></div>
        </div>
      </nav>
    );
  }
}

export default Header;
