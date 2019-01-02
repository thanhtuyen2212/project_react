/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

import React from 'react'
import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import appReducer from './src/redux/reducer'
import loginReducer from './src/components/Login/AuthenticationReducer'


const rootReducer = combineReducers({
    appReducer: appReducer,
    loginReducer:loginReducer
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// let store = createStore(rootReducer);

export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
}


// const MyComponent = () => (
//     <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//             <App/>
//         </PersistGate>
//     </Provider>
// );

// AppRegistry.registerComponent(appName, () => MyComponent);
AppRegistry.registerComponent(appName, () => App);


