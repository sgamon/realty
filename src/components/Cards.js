import React, { Component } from 'react';
import { connect } from 'react-redux'

import SearchBox from './SearchBox';
import ModalCard from './ModalCard';

function mapStateToProps(state) {
  return {properties: state.properties}
}


class Cards extends Component {
  render() {
    return (
      <div id="cards">
        <h3>{this.props.properties.length} properties found.</h3>

        <SearchBox/>

        {this.props.properties.map(property => (
          <ModalCard
            key={property.property_id}
            price_display={property.price_display}
            full_address_display={property.full_address_display}
            beds={property.beds}
            baths={property.baths}
            sqft_display={property.sqft_display}
          />
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Cards)