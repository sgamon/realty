import React, { Component } from 'react';


class Card extends Component {
  render() {
    return (
      <div className="card panel panel-default col-sm-5">
        {this.props.title &&
          <div className="panel-heading">
            <h3 className="panel-title">{this.props.title}</h3>
          </div>
        }
        <div className="panel-body">
          <div>
            <label>price</label>
            <span>{this.props.price_display}</span>
          </div>
          <div>
            <label>address</label>
            <span>{this.props.full_address_display}</span>
          </div>
          <div>
            <label>beds</label>
            <span>{this.props.beds}</span>
          </div>
          <div>
            <label>baths</label>
            <span>{this.props.baths}</span>
          </div>
          <div>
            <label>sq ft</label>
            <span>{this.props.sqft_display}</span>
          </div>

          {this.props.seeMore &&
            <div className="seeMore col-sm-12">
              <a onClick={this.props.seeMore}>see more</a>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Card;
