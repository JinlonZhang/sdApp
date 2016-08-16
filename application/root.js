import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import NavRootContainer from './containers/NavRootContainer';
const store = configureStore();

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavRootContainer />
      </Provider>
    )
  }
};
