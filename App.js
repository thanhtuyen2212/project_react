/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground,StatusBar, CheckBox,ScrollView, AppRegistry,Navigator} from 'react-native';
import  {Router, Scene, Stack} from 'react-native-router-flux';
import {Provider}from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import Login from './src/components/Login/log-in';
import Register from './src/components/Register/sign-up';
import ForgetPassword from './src/components/ForgetPassword/forget-password';
import Merchant from './src/components/Merchant/merchant';
import MerchantDetail from './src/components/MerchantDetail/merchant-detail';
import Basket from './src/components/Basket/basket';
import BasketAll from './src/components/BasketAll/basketall';
import DeliveryOder from './src/components/DeliveryOder/delivery_order';
import UpdateInfoUser  from  './src/components/UpdateInfoUser/update-info-user';
import reducer from './src/redux/reducer';

import Icon from "react-native-vector-icons/FontAwesome";
const iconHome =()=> (<Icon name="home" size={25} color="#2fd541" />);
const iconBasket =()=> (<Icon name="shopping-cart" size={25} color="#2fd541" />);
const iconDelivery =()=> (<Icon name="truck" size={25} color="#2fd541" />);
const iconUser =()=> (<Icon name="user" size={25} color="#2fd541" />);
const iconUpdate =()=> (<Icon name="edit" size={25} color="#2fd541" />);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const rootReducer = combineReducers({
    reducer: reducer,
});
//let store = createStore(rootReducer);

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
        //<Provider store={store}>
        <Router>
            <Scene key="root"  >
                <Scene
                    key = "tabbar"
                    tabs
                    hideNavBar={true}
                    showLabel={false}
                    activeBackgroundColor = {'#d3cfc9'}
                    //activeTintColor = {'#fb3117'}
                    //inactiveBackgroundColor = {'#fb3117'}
                >
                    <Scene
                        key = 'basketall'
                        component = {BasketAll}
                        hideNavBar={true}
                        icon={iconBasket}
                    />
                    <Scene
                        key = 'merchant'
                        component = {Merchant}
                        hideNavBar={true}
                        icon={iconHome}
                    />
                    <Scene
                        key = 'basket'
                        component = {Basket}
                        hideNavBar={true}
                        icon = {iconBasket}
                    />
                    <Scene
                        key = 'deliveryOrder'
                        component = {DeliveryOder}
                        hideNavBar={true}
                        icon = {iconDelivery}
                    />
                    <Scene
                        key = 'login'
                        component = {Login}
                        hideNavBar={true}
                        icon = {iconUser}
                    />
                    <Scene
                        key = 'updateInfoUser'
                        component = {UpdateInfoUser}
                        hideNavBar={true}
                        icon = {iconUpdate}
                    />
                </Scene>
                <Scene
                    key = 'sign_up'
                    component = {Register}
                    hideNavBar={true}/>
                <Scene
                    key = 'forgetPassword'
                    component = {ForgetPassword}
                    hideNavBar={true}/>
                <Scene
                    key = 'merchantDetail'
                    component = {MerchantDetail}
                    hideNavBar={true}/>
            </Scene>
        </Router>
        //</Provider>
    );
    }
}

const styles = StyleSheet.create({

});
//AppRegistry.registerComponent('Merchant', () => Merchant);