import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Image, StatusBar, ImageBackground,Dimensions, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {Actions} from "react-native-router-flux";
import axios from 'axios';
const iconArrowLeft = (<Icon name="angle-left" size={30} color="#4d4d4d" />);
const iconEmail = (<Icon name="envelope" size={15} color="#4d4d4d" />);
const iconPassword = (<Icon name="unlock-alt" size={20} color="#4d4d4d" />);
const  {height: HEIGHT} = Dimensions.get('window')

export default class Register extends Component{

    constructor(props){
        super(props);
    }


    render (){
        return(
            <ImageBackground source = {require('../../image/background1.jpeg')}
                             style={{width:'100%', height:'100%'}}>
                <StatusBar hidden={true}/>
                <View style={{width:'100%',height: HEIGHT}}>
                    <View style={{flex:20}}>
                        <View style={{flex:3,marginLeft: 5,justifyContent: 'center'}}>
                            <TouchableOpacity onPress={Actions.login}>
                                {iconArrowLeft}
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:7,justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.titleSignup}>Cập nhật thông tin tài khoản</Text>
                        </View>
                    </View>
                    <View style={{flex:25}}>
                        <View style={styles.input}>
                            <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                                {iconEmail}
                            </View>
                            <View style={{flex: 9}}>
                                <Text style = {{color: 'black'}}>phone</Text>

                            </View>
                        </View>
                        <View style={styles.input}>
                            <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                                {iconEmail}
                            </View>
                            <View style={{flex: 9}}>
                                <Text style = {{color: 'black'}}>district</Text>

                            </View>
                        </View>
                        <View style={styles.input}>
                            <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                                {iconEmail}
                            </View>
                            <View style={{flex: 9}}>
                                <Text style = {{color: 'black'}}>ward</Text>

                            </View>
                        </View>
                        <View style={styles.input}>
                            <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                                {iconEmail}
                            </View>
                            <View style={{flex: 9}}>
                                <Text style = {{color: 'black'}}>street</Text>

                            </View>
                        </View>
                        <View style={styles.input}>
                            <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                                {iconEmail}
                            </View>
                            <View style={{flex: 9}}>
                                <Text style = {{color: 'black'}}>username</Text>

                            </View>
                        </View>

                    </View>
                    <View style={{flex:55}}>

                    </View>
                </View>
            </ImageBackground>
        );
    }
};
const styles = StyleSheet.create({
    input:{
        flex:33,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        borderColor: '#4d4d4d',
        borderWidth: 1
    },
    signUp: {
        flex: 10,
        backgroundColor: '#80a4f2',
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        borderColor: 'white',
        borderWidth: 1,
        fontWeight:'bold'
    },
    textSignup:{
        color: '#4d4d4d',
        textAlign: 'center',
        fontWeight:'bold'
    },
    textRule:{
        color: '#355ef2',
        textAlign: 'left',
        textDecorationLine: 'underline',
        fontStyle: 'italic'
    },
    titleSignup:{
        color: 'black',
        fontWeight: 'bold',
        fontSize:20
    }
});
