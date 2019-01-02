import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Image,
    StatusBar,
    ImageBackground,
    FlatList,
    Dimensions, TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {Actions} from "react-native-router-flux";

const iconPlus = (<Icon name="plus-circle" size={20} color="#072bba" />);
const iconMinus = (<Icon name="minus-circle" size={20} color="red" />);
const iconArrowLeft = (<Icon name="angle-left" size={30} color="white" />);
const iconArrowRight = (<Icon name="angle-right" size={25} color="white" />);
const iconArrowRight1 = (<Icon name="angle-right" size={15} color="#cccccc" />);
const iconGift = (<Icon name="gift" size={30} color="#1c75d9" />);
const iconUser = (<Icon name="user" size={25} color="white" />);
const updateUser = (<Icon name="edit" size={25} color="blue" />);
const history = (<Icon name="history" size={25} color="#d96150" />);
const bill = (<Icon name="book" size={25} color="#d96150" />);
const feedback = (<Icon name="envelope-square" size={25} color="#2fd541" />);
const rule = (<Icon name="question-circle" size={25} color="#878787" />);
const setting = (<Icon name="cog" size={25} color="#878787" />);
const infoUser = (<Icon name="id-card" size={25} color="#34b5cc" />);
const updatePass = (<Icon name="key" size={25} color="#34b5cc" />);
const iconUserBlue = (<Icon name="image" size={25} color="#34b5cc" />);
const language = (<Icon name="flag" size={25} color="#34b5cc" />);
const iconHome =()=> (<Icon name="home" size={25} color="#34b5cc" />);
const iconUpdate =()=> (<Icon name="edit" size={25} color="#34b5cc" />);

const  {height: HEIGHT} = Dimensions.get('window')

export default class Setting extends Component<Props>{
    constructor(props){
        super(props);
    }

    render (){
        return(
            <View style={{width:'100%',height:HEIGHT, backgroundColor:'#d9d9d9'}}>

                <View style={{flex: 7, flexDirection:'row',backgroundColor:'#575757',justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={{flex: 15,alignItems: 'center'}} onPress={Actions.main}>
                        {iconArrowLeft}
                    </TouchableOpacity>
                    <View style={{flex: 85}}>
                        <Text style={{color:'white', fontWeight: 'bold'}}>Cài đặt</Text>
                    </View>
                </View>

                <View style={{flex: 93}}>
                    <View style={{flex: 35, marginTop:5}}>
                        <View style={{flex:100, justifyContent:'center'}}>
                            <Text>THIẾT LẬP TÀI KHOẢN</Text>
                        </View>
                        <TouchableOpacity style={styles.title}>
                            <View style={{flex: 15,alignItems: 'center', }}>
                                {iconUserBlue}
                            </View>
                            <View style={{flex: 75}}>
                                <Text style={{color:'black'}}>Ảnh đại diện</Text>
                            </View>
                            <View style={{flex: 10}}>
                                {iconArrowRight1}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.title}>
                            <View style={{flex: 15,alignItems: 'center', }}>
                                {updatePass}
                            </View>
                            <View style={{flex: 75}}>
                                <Text style={{color:'black'}}>Đổi mật khẩu</Text>
                            </View>
                            <View style={{flex: 10}}>
                                {iconArrowRight1}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.title}>
                            <View style={{flex: 15,alignItems: 'center', }}>
                                {infoUser}
                            </View>
                            <View style={{flex: 75}}>
                                <Text style={{color:'black'}}>Thông tin tài khoản</Text>
                            </View>
                            <View style={{flex: 10}}>
                                {iconArrowRight1}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.title} onPress={Actions.updateInfoUser}>
                            <View style={{flex: 15,alignItems: 'center', }}>
                                {iconUpdate()}
                            </View>
                            <View style={{flex: 75}}>
                                <Text style={{color:'black'}}>Cập nhật thông tin tài khoản</Text>
                            </View>
                            <View style={{flex: 10}}>
                                {iconArrowRight1}
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 14, marginTop:5}}>
                        <View style={{flex:100, justifyContent:'center'}}>
                            <Text>CÀI ĐẶT ÚNG DỤNG</Text>
                        </View>
                        <TouchableOpacity style={styles.title}>
                            <View style={{flex: 15,alignItems: 'center', }}>
                                {language}
                            </View>
                            <View style={{flex: 75}}>
                                <Text style={{color:'black'}}>Đổi ngôn ngữ</Text>
                            </View>
                            <View style={{flex: 10}}>
                                {iconArrowRight1}
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{flex: 14, marginTop:5}}>
                        <View style={{flex:100, justifyContent:'center'}}>
                            <Text>THÔNG TIN KHÁC</Text>
                        </View>
                        <TouchableOpacity style={styles.title}>
                            <View style={{flex: 15,alignItems: 'center', }}>
                                {iconHome()}
                            </View>
                            <View style={{flex: 75}}>
                                <Text style={{color:'black'}}>Về Merchant</Text>
                            </View>
                            <View style={{flex: 10}}>
                                {iconArrowRight1}
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{flex: 51}}>
                    </View>
                </View>
            </View>
        );
    }

};

const styles = StyleSheet.create({

    title: {
        flex:100,
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor:'#d9d9d9',
        borderWidth: 1
    },
})



