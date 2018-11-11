/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux'
import React from 'react'
import { createStore } from 'redux'
import { combineReducers } from 'redux'

import appReducer from './src/redux/reducer'

const rootReducer = combineReducers({
  appReducer: appReducer,
});

let store = createStore(rootReducer);

const MyComponent = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

AppRegistry.registerComponent(appName, () => MyComponent);
