import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Image, StatusBar, ImageBackground,Dimensions, TouchableOpacity, Navigator} from 'react-native';
import  {Actions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from "axios";
import { connect } from 'react-redux'
import {saveuser} from "../../redux/action";
import { auth_req, auth_succ, auth_fail } from "./AuthenticationAction";


const iconArrowLeft = (<Icon name="angle-left" size={30} color="#4d4d4d" />);
const iconPhone = (<Icon name="mobile" size={30} color="#ffffff" />);
const iconFacebook = (<Icon name="facebook-f" size={20} color="#ffffff" />);
const iconGoogle = (<Icon name="google-plus" size={20} color="#ffffff" />);
const iconEmail = (<Icon name="envelope" size={15} color="#4d4d4d" />);
const iconPassword = (<Icon name="unlock-alt" size={20} color="#4d4d4d" />);
const  {height: HEIGHT} = Dimensions.get('window');

class Login extends Component<Props>{

    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
        }
    }

    btnLogin = () =>{
        if(this.state.email==='') {
            this.setState({error: 'Vui lòng nhập email của bạn!'});
            return
        }
        if(this.state.password==='') {
            this.setState({error: 'Vui lòng nhập password của bạn!'});
            return
        }

        this.props.auth_req();

        axios.post('http://food-delivery-server.herokuapp.com/Login',{
            email:this.state.email,
            password:this.state.password}
        ).then(response =>{
            console.log(response.data);
            console.log("chuan bi luu");
            this.props.auth_succ(response.data);
            Actions.merchant();
        }).catch(responseError =>{
            this.props.auth_fail();

            if (responseError.response.status===400){
                this.setState({error: 'Email hoặc mật khẩu không đúng'});
                return
            }
            if (responseError.response.status===401){
                this.setState({error: 'Tài khoản chưa được xác thực'});
                return
            }
        })
    }

    render (){
        //const { saveuser, user } = this.props;
        return(
            <ImageBackground source = {require('../../image/background1.jpeg')}
                             style={{width:'100%', height:'100%'}}>
                <StatusBar hidden={true}/>
                <View style={{width:'100%',height: HEIGHT}}>
                    <View style={{flex:10}}>
                        <View style={{flex:3,marginLeft: 5 }}>
                            <TouchableOpacity onPress={Actions.merchant}>
                                {iconArrowLeft}
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:7,justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: 'black', fontWeight: 'bold',fontSize:20}}>Đăng Nhập</Text>
                        </View>
                    </View>
                    <View style={{flex:20}}>
                        <TouchableOpacity style={{flex: 28}}>
                            <View style={styles.phoneNumber}>
                                <View style={{flex:1.5,justifyContent: 'center', alignItems: 'center'}}>
                                    {iconPhone}
                                </View>
                                <View style={{flex: 8.5}}>
                                    <Text style={{color: 'white', textAlign: 'center'}}>Số điện thoại</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{flex: 8}}></View>
                        <TouchableOpacity style={{flex: 28}}>
                            <View style={styles.facebook}>
                                <View style={{flex:1.5,justifyContent: 'center', alignItems: 'center'}}>
                                    {iconFacebook}
                                </View>
                                <View style={{flex: 8.5}}>
                                    <Text style={{color: 'white', textAlign: 'center'}}>Facebook</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <View style={{flex: 8}}></View>
                        <TouchableOpacity style={{flex: 28}}>
                            <View style={styles.google}>
                                <View style={{flex:1.5,justifyContent: 'center', alignItems: 'center'}}>
                                    {iconGoogle}
                                </View>
                                <View style={{flex: 8.5}}>
                                    <Text style={{color: 'white', textAlign: 'center'}}>Google</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:10,justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'black', textAlign: 'center'}}>Hoặc đăng nhập bằng tài khoản của bạn</Text>
                    </View>
                    <View style={{flex:30}}>
                        <View style={styles.email}>
                            <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
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
                        <View style={{flex: 5}}></View>
                        <View style={styles.email}>
                            <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                                {iconPassword}
                            </View>
                            <View style={{flex: 9}}>
                                <TextInput
                                    style = {{color: 'black'}}
                                    placeholder={'Mật khẩu của bạn'}
                                    placeholderTextColor={'#6f6f6f'}
                                    secureTextEntry={true}
                                    autoCapitalize={'none'}
                                    onChangeText = {(inputpassword)=>this.setState({password:inputpassword, error:''})}
                                    value = {this.state.password}
                                />
                            </View>
                        </View>
                        <View style={{flex:10,justifyContent: 'center', marginRight: 20}}>
                            <TouchableOpacity onPress={Actions.forgetPassword}>
                                <Text style={styles.forgetPassword}>Quên mật khẩu</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={{textAlign:'center', color:'#f8241e',fontStyle: 'italic'}}>{this.state.error}</Text>
                        </View>
                        <View style={{flex: 20}}></View>
                        <TouchableOpacity
                            onPress={this.btnLogin}
                            style={{flex:15}}>
                            <View style={styles.login}>
                                <Text style={styles.textLogin}>Đăng nhập</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:20}}>
                        <View style={{flex:20,flexDirection:'row'}}>
                            <View style={{flex: 6}}>
                                <Text style={styles.noAccount}>Bạn chưa có tài khoản?</Text>
                            </View>
                            <View style={{flex: 4, marginLeft: 4}}>
                                <TouchableOpacity onPress={Actions.sign_up}>
                                    <Text style={styles.signUp}>Đăng kí</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flex: 25,justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity onPress={Actions.sign_up}>
                                <Text style={styles.signUp}>Cập nhật thông tin</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:25,justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.accept1}>Chúng tôi sẽ không sử dụng thông tin của bạn với bất kì mục đích nào khác.</Text>
                        </View>
                        <View style={{flex:20,flexDirection:'row'}}>
                            <View style={{flex: 6}}>
                                <Text style={styles.accept2}>Bằng cách đăng kí bạn đồng ý</Text>
                            </View>

                            <View style={{flex: 4, marginLeft: 4}}>
                                <TouchableOpacity >
                                    <Text style={styles.rule}>điều khoản sử dụng</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <View style={{flex:10}}></View>
                </View>
            </ImageBackground>

        );
    }
};

const mapStateToProps = (state) =>({
    isAuthenticating: state.loginReducer.isAuthenticating,
    isAuthenticated: state.loginReducer.isAuthenticated
})
const mapDispatchToProps = (dispatch) => ({
    saveuser:(user) => { dispatch(saveuser(user)) },
    auth_req: () => {dispatch(auth_req())},
    auth_succ: (data) => {dispatch(auth_succ(data))},
    auth_fail: () => {dispatch(auth_fail())}
})

export default connect( mapStateToProps , mapDispatchToProps )(Login)

const styles = StyleSheet.create({
    phoneNumber: {
        flex:28,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#0cd02a',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    facebook:{
        flex:28,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#216aa4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    google:{
        flex:28,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#e34842',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    email:{
        flex:18,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        borderColor: '#4d4d4d',
        borderWidth: 1
    },
    login:{
        flex:15,
        backgroundColor: '#80a4f2',
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        borderColor: '#80a4f2',
        borderWidth: 1
    },
    rule:{
        color: '#355ef2',
        textAlign: 'left',
        textDecorationLine: 'underline',
        fontStyle: 'italic'
    },
    forgetPassword:{
        color: '#355ef2',
        textAlign: 'right',
        textDecorationLine: 'underline',
        fontStyle: 'italic'
    },
    signUp:{
        color: '#355ef2',
        textAlign: 'left',
        textDecorationLine: 'underline',
        fontStyle: 'italic'

    },
    textLogin:{
        color: '#4d4d4d',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    noAccount: {
        color: 'black',
        textAlign: 'right'
    },
    accept1:{
        color: 'black',
        textAlign: 'center'
    },
    accept2:{
        color: 'black',
        textAlign: 'right'
    }
});