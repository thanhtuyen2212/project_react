import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Dimensions, StatusBar, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {Actions} from "react-native-router-flux";
import axios from "axios";
const iconArrowLeft = (<Icon name="angle-left" size={30} color="#4d4d4d" />);
const iconEmail = (<Icon name="envelope" size={20} color="#4d4d4d" />);
const  {height: HEIGHT} = Dimensions.get('window')

export default class ForgetPassword extends Component{

    constructor(props){
        super(props);
        this.state={
            email: '',
            error:'',
        }
    }
    btnForgetPassword = () =>{
        //console.log(this.state.email)
        if(this.state.email==='') {
            this.setState({error: 'Vui lòng nhập email của bạn!'});
            return
        }
        axios.post('http://food-delivery-server.herokuapp.com/Forgetpassword',{
            email:this.state.email,}
        ).then(response=>{
            Actions.merchant;
        }).catch(responseError =>{
            if (responseError.response.status===400){
                this.setState({error: 'Email không đúng'});
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
                    <View style={styles.iconBack}>
                        <TouchableOpacity onPress={Actions.login}>
                            {iconArrowLeft}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.forgetpass}>
                        <Text style={styles.textForgetpass}>Quên mật khẩu</Text>
                    </View>
                </View>
                <View style={{flex:40}}>
                    <View style={styles.inputemail}>
                        <Text style={styles.textInputemail}>Vui lòng nhập email vào ô bên dưới, chúng tôi sẽ gửi mật khẩu mới vào hộp thư của bạn</Text>
                    </View>
                    <View style={styles.email}>
                        <View style={styles.iconEmail}>
                            {iconEmail}
                        </View>
                        <View style={{flex: 9}}>
                            <TextInput
                                style = {{color: 'black'}}
                                placeholder={'Địa chỉ Email của bạn'}
                                placeholderTextColor={'#6f6f6f'}
                                autoCapitalize={'none'}
                                onChangeText = {(inputemail)=>this.setState({email:inputemail, error:''})}
                                value = {this.state.email}
                            />
                        </View>
                    </View>
                    <View style={{flex:5}}></View>
                    <View style={{flex:10}}>
                        <Text style={{textAlign:'center', color:'#f8241e',fontStyle: 'italic'}}>{this.state.error}</Text>
                    </View>
                    <TouchableOpacity style={{flex:15}}
                        onPress={this.btnForgetPassword}>
                        <View style={styles.send}>
                            <Text style={styles.textSend}>Gửi</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex:30}}></View>
                <View style={styles.signUp}>
                    <TouchableOpacity onPress={Actions.sign_up}>
                        <Text style={styles.textSignup}>Đăng kí</Text>
                    </TouchableOpacity>
                </View>

            </View>
            </ImageBackground>
        );
    }
};
const styles = StyleSheet.create({
    iconBack:{
        flex:3,
        marginLeft: 5,
        justifyContent: 'center'
    },
    email:{
        flex:20,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        borderColor: '#4d4d4d',
        borderWidth: 1
    },
    iconEmail:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    send: {
        flex: 20,
        backgroundColor: '#80a4f2',
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        borderColor: 'white',
        borderWidth: 1
    },
    textSend:{
        color: '#4d4d4d',
        textAlign: 'center',
        fontWeight:'bold',

    },
    forgetpass:{
        flex:7,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight:'bold'
    },
    textForgetpass:{
        color: 'black',
        fontWeight: 'bold',
        shadowColor: '#000000',
        shadowOffset:{
            width: 10,
            height: 10
        },
        shadowOpacity: 1.0,
        shadowRadius: 5,
        fontSize:20
    },
    inputemail:{
        flex:50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20
    },
    textInputemail:{
        color: 'black',
        textAlign: 'center'
    },
    textSignup:{
        color: 'black',
        fontWeight: 'bold'
    },
    signUp:{
        flex:10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});