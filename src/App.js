import React, { Component } from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import logMock from './modules/log-mock';

// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './store/reducers';
import defaultState from './store/defaultState';
import data from './store/trimmed-search.json';

// css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
import './App.css';

// components
import Header from './components/Header';
import Map from './components/Map';
// import GMap from './components/GMap';
import Cards from './components/Cards';


// mock the endpoint
let mock = new MockAdapter(axios);
mock.onGet('/search').reply(function(config) {
  logMock(config);
  return new Promise(function(resolve, reject) {
    resolve([200, data]);
  });
});


let store = createStore(reducers, defaultState);


class App extends Component {
  componentDidMount() {
    axios.get('/search', {
      params: {
        lat:123,
        long:456
      }
    })
      .then(function (response) {
        store.dispatch({type:'SET', data:response.data});
        console.log("state:", store.getState());
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header projectName="Realty Demo"/>
          <div className="content">
            <Map/>
            <Cards properties={store.getState().properties} />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
