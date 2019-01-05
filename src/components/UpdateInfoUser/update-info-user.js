import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Image, StatusBar, ImageBackground,Dimensions, TouchableOpacity,Picker} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {Actions} from "react-native-router-flux";
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../components/Login/AuthenticationAction';


const iconArrowLeft = (<Icon name="angle-left" size={30} color="#4d4d4d" />);
const iconPassword = (<Icon name="unlock-alt" size={20} color="#4d4d4d" />);
const iconDistance = (<Icon name="map-marker" size={25} color="#4d4d4d" />);
const iconPhone = (<Icon name="mobile" size={25} color="#4d4d4d" />);
const  {height: HEIGHT} = Dimensions.get('window')

class UpdateInfoUser extends Component<Props>{

    constructor(props){
        super(props);
        this.state={
            password: '',
            phone:'',
            selectDistrict:'123',
            selectWard:'34',
            district:[],
            ward:[],
            street:'',
        }
    }


    btnUpdate = () =>{
        //console.log(this.state.email)
        if(this.state.email==='') {
            this.setState({error: 'Vui lòng nhập email của bạn!'});
            return
        }
        if(this.state.password==='') {
            this.setState({error: 'Vui lòng nhập password của bạn!'});
            return
        }

        axios.post('http://food-delivery-server.herokuapp.com/Login',{
            email:this.state.email,
            password:this.state.password}
        ).then(response =>{
            console.log(response.data);
            console.log("chuan bi luu");
            this.props.saveuser(response.data.id);

            Actions.merchant;
        }).catch(responseError =>{
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

    getUserInfo() {
        axios.get('http://food-delivery-server.herokuapp.com/getinfo',null, {
                headers: {
                    Token: this.props.token
                }
            }
        ).then(response=>{
            console.log(response);
            this.props.updateUser(response.data);
        }).catch(error=>{

        })
    }

    getDistrict(){
        axios.get('http://food-delivery-server.herokuapp.com/district/getAll'
        ).then(response=>{
            this.setState({district:response.data});
        })
    }

    componentWillMount(){
        this.getDistrict();
        this.getUserInfo();

    }

    btnUpdateInfoUser = () =>{
        if(this.state.password==='') {
            this.setState({error: 'Vui lòng nhập mật khẩu của bạn!'});
            return
        }
        if(this.state.password.length<=6) {
            this.setState({error: 'Mật khẩu phải lớn hơn 6 kí tự'});
            return
        }
        if(this.state.phone==='') {
            this.setState({error: 'Vui lòng nhập số điện thoại của bạn!'});
            return
        }
        if(this.state.idDistrict==='') {
            this.setState({error: 'Vui lòng nhập địa chỉ của bạn (Quận)'});
            return
        }
        if(this.state.idWard==='') {
            this.setState({error: 'Vui lòng nhập địa chỉ của bạn (Phường)'});
            return
        }
        if(this.state.street==='') {
            this.setState({error: 'Vui lòng nhập địa chỉ của bạn (Đường)'});
            return
        }
        const AuthStr = 'Bearer '.concat(this.props.token);
        let arrayInfor = {
            phone: this.state.phone,
            idDistrict: this.state.selectDistrict,
            idWard: this.state.selectWard,
            street	: this.state.street,
            userName: "",
        };
        console.log(arrayInfor);
        console.log(AuthStr);
        axios.post('http://food-delivery-server.herokuapp.com/updateInfo', arrayInfor, {headers: {Authorization: AuthStr}}
        ).then(response => {
            console.log(response);
            Actions.merchant();
        }).catch(responseError =>{
            if (responseError.response.status===400){
                this.setState({error: 'Đã xảy ra lỗi'});
                return
            }
            if (responseError.response.status===401){
                this.setState({error: 'Không phải chủ tài khoản'});
                return
            }
            console.log(responseError);
            //this.setState({error: 'Đăng kí thành công. Bạn đã có tài khoản tại Food-Delivery'});
            //return
        })
    }

    render (){
        var arrayDistrict=[];
        for (var i=0;i<this.state.district.length;i++){
            arrayDistrict.push(<Picker.Item label={this.state.district[i].name} value={this.state.district[i].id} />)
        }
        var arrayWard=[];
        for (var i=0;i<this.state.ward.length;i++){
            arrayWard.push(<Picker.Item label={this.state.ward[i].name} value={this.state.ward[i].id} />)
        }
        return(
            <ImageBackground source = {require('../../image/background1.jpeg')}
                             style={{width:'100%', height:'100%'}}>
                <StatusBar hidden={true}/>
                <View style={{width:'100%',height: HEIGHT}}>
                    <View style={{flex:15}}>
                        <View style={{flex:3,marginLeft: 5,justifyContent: 'center'}}>
                            <TouchableOpacity onPress={Actions.login}>
                                {iconArrowLeft}
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:7,justifyContent: 'center', alignItems: 'center'}}>

                            <Text style={styles.titleSignup}>{ this.props.userInfo == null ? '': (this.props.userInfo.email == null ? '': this.props.userInfo.email)}</Text>

                        </View>
                    </View>
                    <View style={{flex:40}}>
                        <View style={styles.input}>
                            <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                                {iconPassword}
                            </View>
                            <View style={{flex: 9}}>
                                <TextInput
                                    autoCapitalize={'none'}
                                    secureTextEntry={true}
                                    style = {{color: 'black'}}
                                    placeholder={'Mật khẩu của bạn'}
                                    placeholderTextColor={'#6f6f6f'}
                                    onChangeText = {(inputpassword)=>this.setState({password:inputpassword, error:''})}
                                    value = {this.state.password}
                                />
                            </View>
                        </View>
                        <View style={styles.input}>
                            <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                                {iconPhone}
                            </View>
                            <View style={{flex: 9}}>
                                <TextInput
                                    autoCapitalize={'none'}
                                    style = {{color: 'black'}}
                                    placeholder={'Số điện thoại của bạn'}
                                    placeholderTextColor={'#6f6f6f'}
                                    onChangeText = {(inputPhoneNumber)=>this.setState({phone:inputPhoneNumber, error:''})}
                                    value = {this.state.phone}
                                />
                            </View>
                        </View>
                        <View style={styles.input}>

                            <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                                {iconDistance}
                            </View>
                            <View style={{flex: 9}}>
                                <Picker
                                    selectedValue={this.state.selectDistrict}
                                    // style={{ height: 50, width: 100 }}
                                    onValueChange={(itemValue, itemIndex) => this.selectWard(itemValue)}>
                                    {arrayDistrict}
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.input}>
                            <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                                {iconDistance}
                            </View>
                            <View style={{flex: 9}}>
                                <Picker
                                    selectedValue={this.state.selectWard}
                                    // style={{ height: 50, width: 100 }}
                                    onValueChange={(itemValue, itemIndex) => this.setState({selectWard: itemValue})}>
                                    {arrayWard}
                                </Picker>
                                {/*<TextInput*/}
                                {/*autoCapitalize={'none'}*/}
                                {/*style = {{color: 'black'}}*/}
                                {/*placeholder={'Địa chỉ của bạn (Phường)'}*/}
                                {/*placeholderTextColor={'#6f6f6f'}*/}
                                {/*onChangeText = {(inputpIDWard)=>this.setState({idWard:inputpIDWard, error:''})}*/}
                                {/*value = {this.state.idWard}*/}
                                {/*/>*/}
                            </View>
                        </View>
                        <View style={styles.input}>
                            <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                                {iconDistance}
                            </View>
                            <View style={{flex: 9}}>
                                <TextInput
                                    autoCapitalize={'none'}
                                    style = {{color: 'black'}}
                                    placeholder={'Địa chỉ của bạn (Đường)'}
                                    placeholderTextColor={'#6f6f6f'}
                                    onChangeText = {(inputStreet)=>this.setState({street:inputStreet, error:''})}
                                    value = {this.state.street}
                                />
                            </View>
                        </View>

                    </View>
                    <View style={{flex:45}}>
                        <View style={{flex:1}}>
                            <Text style={{textAlign:'center', color:'#f8241e',fontStyle: 'italic'}}>{this.state.error}</Text>
                        </View>
                        <View style={{flex:10}}></View>
                        <TouchableOpacity
                            onPress={this.btnUpdateInfoUser}
                            style={{flex: 15}}>
                            <View style={styles.signUp}>
                                <Text style={styles.textSignup}>Cập nhật</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{flex:30}}></View>
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

    selectWard=(id)=>{
        this.setState({selectDistrict:id});
        // console.log(id.itemValue);
        // console.log(id);
        axios.get('http://food-delivery-server.herokuapp.com/ward/getAllByDistrict?id='+id).
        then(response=>{
            this.setState({ward:response.data});
        }).catch(error=>{

        })
    }

};


const mapStateToProps = (state) => ({
    userInfo: state.loginReducer.userInfo,
    token: state.loginReducer.accessToken,
    key: state.loginReducer.key,
    value: state.loginReducer.value
})

const mapDispathToProps = (dispatch) => ({
    updateUser: (userInfo) => {dispatch(updateUser(userInfo))}
})

export default connect (mapStateToProps, mapDispathToProps) (UpdateInfoUser);

const styles = StyleSheet.create({
    input:{
        flex:20,
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