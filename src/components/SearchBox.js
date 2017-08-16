import React, { Component } from 'react';
import { connect } from 'react-redux'


let input;

class SearchBox extends Component {
  render() {
    return (
      <div className="searchBox">
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return
            }
            this.props.dispatch({type: 'SEARCH', addressFragment:input.value});
            // input.value = '';
          }}
        >
          <label>Address</label>
          <input
            ref={node => {
              input = node
            }}
          />
          <button type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}


export default connect()(SearchBox);
