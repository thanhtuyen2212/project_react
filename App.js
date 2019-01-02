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
import { PersistGate } from 'redux-persist/integration/react';
import store from './index';

import Login from './src/components/Login/log-in';
import Register from './src/components/Register/sign-up';
import ForgetPassword from './src/components/ForgetPassword/forget-password';
import Merchant from './src/components/Merchant/merchant';
import MerchantDetail from './src/components/MerchantDetail/merchant-detail';
import BasketAll from './src/components/BasketAll/basketall';
import DeliveryOder from './src/components/DeliveryOder/delivery_order';
import UpdateInfoUser  from  './src/components/UpdateInfoUser/update-info-user';
import MapStore from './src/components/Map/MapStore';
import Main from './src/components/Main/main';
import Setting from './src/components/Setting/set-ting';

import Icon from "react-native-vector-icons/FontAwesome";
const iconHome =()=> (<Icon name="home" size={25} color="#2fd541" />);
const iconBasket =()=> (<Icon name="shopping-cart" size={25} color="#2fd541" />);
const iconDelivery =()=> (<Icon name="truck" size={25} color="#2fd541" />);
const iconUser =()=> (<Icon name="user" size={25} color="#2fd541" />);
const iconUpdate =()=> (<Icon name="edit" size={25} color="#2fd541" />);
const iconDistance =()=> (<Icon name="map-marker" size={25} color="#2fd541" />);

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    render() {
        return (
            <Provider store={store().store}>
                <PersistGate loading={null} persistor={store().persistor}>
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
                                    key = 'merchant'
                                    component = {Merchant}
                                    hideNavBar={true}
                                    icon={iconHome}
                                />
                                <Scene
                                    key = 'deliveryOrder'
                                    component = {DeliveryOder}
                                    hideNavBar={true}
                                    icon = {iconDelivery}
                                />
                                <Scene
                                    key = 'basketall'
                                    component = {BasketAll}
                                    hideNavBar={true}
                                    icon={iconBasket}
                                />
                                {/*<Scene*/}
                                    {/*key = 'login'*/}
                                    {/*component = {Login}*/}
                                    {/*hideNavBar={true}*/}
                                    {/*icon = {iconUser}*/}
                                {/*/>*/}
                                {/*<Scene*/}
                                    {/*key = 'notification'*/}
                                    {/*component = {Login}*/}
                                    {/*hideNavBar={true}*/}
                                    {/*icon = {iconUser}*/}
                                {/*/>*/}
                                {/*<Scene*/}
                                    {/*key = 'updateInfoUser'*/}
                                    {/*component = {UpdateInfoUser}*/}
                                    {/*hideNavBar={true}*/}
                                    {/*icon = {iconUpdate}*/}
                                {/*/>*/}
                                <Scene
                                    key = 'main'
                                    component = {Main}
                                    hideNavBar={true}
                                    icon = {iconUser}
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
                            <Scene
                                key = 'map'
                                component = {MapStore}
                                hideNavBar={true}/>
                            <Scene
                                key = 'setting'
                                component = {Setting}
                                hideNavBar={true}/>
                            <Scene
                                key = 'updateInfoUser'
                                component = {UpdateInfoUser}
                                hideNavBar={true}
                            />
                            <Scene
                                key = 'login'
                                component = {Login}
                                hideNavBar={true}
                                icon = {iconUser}
                            />
                        </Scene>
                    </Router>
                </PersistGate>
            </Provider>
            // </Provider>
        );
    }
}

const styles = StyleSheet.create({

});
//AppRegistry.registerComponent('Merchant', () => Merchant);