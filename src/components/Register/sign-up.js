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
        this.state={
            email: '',
            password: '',
            error:'',
            passwordAgain:''
        }
    }

    btnregister = () =>{
        if(this.state.email==='') {
            this.setState({error: 'Vui lòng nhập email của bạn!'});
            return
        }
        if(this.state.password==='') {
            this.setState({error: 'Vui lòng nhập password của bạn!'});
            return
        }
        if(this.state.password.length<=6) {
            this.setState({error: 'Mật khẩu phải lớn hơn 6 kí tự'});
            return
        }
        if(this.state.password!==this.state.passwordAgain) {
            this.setState({error: 'Mật khẩu không trùng khớp'});
            return
        }
        axios.post('http://food-delivery-server.herokuapp.com/Register',{
            email:this.state.email,
            password:this.state.password}
        ).then(response=>{
            Actions.merchant();
        }).catch(responseError =>{
            if (responseError.response.status===400){
                this.setState({error: 'email đã tồn tại'});
                return
            }
            if (responseError.response.status===401){
                this.setState({error: 'email không đúng'});
                return
            }
            if (responseError.response.status===500){
                this.setState({error: 'Đã xảy ra lỗi!'});
                return
            }
            //this.setState({error: 'Đăng kí thành công. Bạn đã có tài khoản tại Food-Delivery'});
            //return
        })
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
                        <Text style={styles.titleSignup}>Đăng kí</Text>
                    </View>
                </View>
                <View style={{flex:25}}>
                    <View style={styles.input}>
                        <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                            {iconEmail}
                        </View>
                        <View style={{flex: 9}}>
                            <TextInput
                                autoCapitalize={'none'}
                                style = {{color: 'black'}}
                                placeholder={'Địa chỉ Email của bạn'}
                                placeholderTextColor={'#6f6f6f'}
                                onChangeText = {(inputemail)=>this.setState({email:inputemail, error:''})}
                                value = {this.state.email}
                            />
                        </View>
                    </View>
                    <View style={styles.input}>
                        <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                            {iconPassword}
                        </View>
                        <View style={{flex: 9}}>
                            <TextInput
                                autoCapitalize={'none'}
                                secureTextEntry={true}
                                style = {{color: 'black'}}
                                placeholder={'Mật khẩu của bạn (ít nhất 6 kí tự)'}
                                placeholderTextColor={'#6f6f6f'}
                                onChangeText = {(inputpassword)=>this.setState({password:inputpassword, error:''})}
                                value = {this.state.password}
                            />
                        </View>
                    </View>
                    <View style={styles.input}>
                        <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                            {iconPassword}
                        </View>
                        <View style={{flex: 9}}>
                            <TextInput
                                autoCapitalize={'none'}
                                secureTextEntry={true}
                                style = {{color: 'black'}}
                                placeholder={'Nhập lại mật khẩu'}
                                placeholderTextColor={'#6f6f6f'}
                                onChangeText = {(inputpassword)=>this.setState({passwordAgain:inputpassword, error:''})}
                                value = {this.state.passwordAgain}
                            />
                        </View>
                    </View>

                </View>
                <View style={{flex:55}}>
                    <View style={{flex:1}}>
                    <Text style={{textAlign:'center', color:'#f8241e',fontStyle: 'italic'}}>{this.state.error}</Text>
                </View>
                    <View style={{flex:10}}></View>
                        <TouchableOpacity
                            onPress={this.btnregister}
                            style={{flex: 10}}>
                            <View style={styles.signUp}>
                                <Text style={styles.textSignup}>Đăng kí</Text>
                            </View>
                        </TouchableOpacity>
                    <View style={{flex:35}}></View>
                    <View style={{flex:15,justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'black', textAlign: 'center'}}>Chúng tôi sẽ không sử dụng thông tin của bạn với bất kì mục đích nào khác.</Text>
                    </View>
                    <View style={{flex:15,flexDirection:'row'}}>
                        <View style={{flex: 6}}>
                            <Text style={{color: 'black', textAlign: 'right'}}>Bằng cách đăng kí bạn đồng ý</Text>
                        </View>
                        <View style={{flex: 4, marginLeft: 4}}>
                            <TouchableOpacity>
                                <Text style={styles.textRule }>điều khoản sử dụng</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex:5}}></View>
                    <View style={{flex:10,justifyContent: 'center', alignItems: 'center',fontWeight:'bold'}}>
                        <TouchableOpacity onPress={Actions.login}>
                        <Text style={{color: 'black', fontWeight: 'bold'}}>Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>
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