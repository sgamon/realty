import { combineReducers } from 'redux';
import _ from 'lodash';

function properties(state = [], action) {
  switch (action.type) {
    case 'SET':
      state = action.data.properties;
      break;
    case 'SEARCH':
      let properties = state;
      let addressFragment = action.addressFragment.toLowerCase();


      state = _(properties).partition((o) => o.address.indexOf(addressFragment) > -1).flatten().value();
      break;
    default:
      break;
  }

  return state;
}

function search_address(state = {}, action) {
  switch (action.type) {
    case 'SET':
      state = action.data.search_address;
      break;
    default:
      break;
  }

  return state;
}

function total_matching_properties_count(state = 0, action) {
  switch (action.type) {
    case 'SET':
      state = parseInt(action.data.total_matching_properties_count, 10);
      break;
    default:
      break;
  }

  return state;
}

const App = combineReducers({
  properties,
  search_address,
  total_matching_properties_count,
});

export default App;

