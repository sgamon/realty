import React, { Component } from 'react';
import ReactModal from 'react-modal'
import Card from './Card';


class ModalCard extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <div>
        <Card
          key={this.props.property_id}
          price_display={this.props.price_display}
          full_address_display={this.props.full_address_display}
          beds={this.props.beds}
          baths={this.props.baths}
          sqft_display={this.props.sqft_display}
          seeMore={this.handleOpenModal.bind(this)}
        />
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          style={{
            overlay: {
              backgroundColor: 'lightgrey'
            },
            content: {
              top: '38px'
            }
          }}
        >
          <Card
            key={this.props.property_id}
            price_display={this.props.price_display}
            full_address_display={this.props.full_address_display}
            beds={this.props.beds}
            baths={this.props.baths}
            sqft_display={this.props.sqft_display}
            seeMore={false}
          />

          <div>
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </div>

        </ReactModal>
      </div>
    );
  }
}


export default ModalCard
