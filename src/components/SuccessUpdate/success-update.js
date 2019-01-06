import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, ImageBackground,Dimensions, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {Actions} from "react-native-router-flux";
import axios from "axios";
const iconArrowLeft = (<Icon name="angle-left" size={30} color="#4d4d4d" />);
const iconEmail = (<Icon name="envelope" size={15} color="#4d4d4d" />);
import { connect } from 'react-redux';
const  {height: HEIGHT} = Dimensions.get('window')

class SuccessUpdate extends Component{

    constructor(props){
        super(props);
        this.state={
            phone:'',
            selectDistrict:'',
            district:[],
            selectWard:'',
            ward: [],
            street:'',
            username:''
        }
    }

    getUserInfo() {
        const AuthStr = 'Bearer '.concat(this.props.token);
        axios.get('http://food-delivery-server.herokuapp.com/getinfo', {headers: {Authorization: AuthStr}}
        ).then(response=>{
            this.setState({
                phone : response.data.phone,
                street : response.data.address.street,
                username : response.data.userName,
            });
            this.getNamDistrict(response.data.address.idDistrict);
            this.setWard(response.data.address.idDistrict,response.data.address.idWard)
        }).catch(error=>{
            console.log(error);
        });
    }

    getDistrict(){
        axios.get('http://food-delivery-server.herokuapp.com/district/getAll'
        ).then(response=>{
            this.setState({district:response.data});
        })
    }

    getNamDistrict(idDistrict) {
        try {
            let count = this.state.district.length;
            if (count === 0) return;
            for (let i = 0; i < count; i++) {
                if (this.state.district[i].id === idDistrict) {
                    this.setState({selectDistrict: this.state.district[i].name});
                }
            }
        }catch(e){
            console.log("error get name district: " + e);
        }
    }

     componentWillMount(){
        this.getDistrict();
        this.getUserInfo();
    }

    setWard(idDistrict, idWard){
        axios.get('http://food-delivery-server.herokuapp.com/ward/getAllByDistrict?id='+idDistrict).
        then(response => {
            this.setState({ward : response.data});
            this.selectWard(idWard);
        }).catch(error =>{
            console.log(error);
        })
    };

    selectWard(id){
        let count = this.state.ward.length;
        for(let i = 0; i < count; i++) {
            console.log("name phuong: "+this.state.ward[i].name);
            if(this.state.ward[i].id === id){
                this.setState({selectWard: this.state.ward[i].name});
            }
        }
    }

    render (){
        return(
            <ImageBackground source = {require('../../image/background1.jpeg')}
                             style={{width:'100%', height:'100%'}}>
                <StatusBar hidden={true}/>
                <View style={{width:'100%',height: HEIGHT}}>
                    <View style={{flex:20}}>
                        <View style={{flex:3,marginLeft: 5,justifyContent: 'center'}}>
                            <TouchableOpacity onPress={Actions.setting}>
                                {iconArrowLeft}
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:7,justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.titleSignup}>{this.props.userInfo == null ? '': (this.props.userInfo.email == null ? '': this.props.userInfo.email)}</Text>
                        </View>
                    </View>
                    <View style={{flex:25}}>
                        <View style={styles.input}>
                            <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                                {iconEmail}
                            </View>
                            <View style={{flex: 9}}>
                                <Text style = {{color: 'black'}}>{this.state.phone}</Text>

                            </View>
                        </View>
                        <View style={styles.input}>
                            <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                                {iconEmail}
                            </View>
                            <View style={{flex: 9}}>
                                <Text style = {{color: 'black'}}>{this.state.selectDistrict}</Text>

                            </View>
                        </View>
                        <View style={styles.input}>
                            <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                                {iconEmail}
                            </View>
                            <View style={{flex: 9}}>
                                <Text style = {{color: 'black'}}>{this.state.selectWard}</Text>

                            </View>
                        </View>
                        <View style={styles.input}>
                            <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                                {iconEmail}
                            </View>
                            <View style={{flex: 9}}>
                                <Text style = {{color: 'black'}}>{this.state.street}</Text>

                            </View>
                        </View>
                        <View style={styles.input}>
                            <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                                {iconEmail}
                            </View>
                            <View style={{flex: 9}}>
                                <Text style = {{color: 'black'}}>{this.state.username}</Text>

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

const mapStateToProps = (state) => ({
    userInfo: state.loginReducer.userInfo,
    token: state.loginReducer.accessToken,
});

const mapDispathToProps = (dispatch) => ({
})

export default connect (mapStateToProps, mapDispathToProps) (SuccessUpdate);

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
