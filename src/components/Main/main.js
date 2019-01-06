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
import connect from "react-redux/es/connect/connect";
import {auth_succ} from "../Login/AuthenticationAction";

const iconArrowLeft = (<Icon name="angle-left" size={30} color="white" />);
const iconArrowRight = (<Icon name="angle-right" size={25} color="white" />);
const iconArrowRight1 = (<Icon name="angle-right" size={15} color="#cccccc" />);
const iconUser = (<Icon name="user" size={25} color="white" />);
const history = (<Icon name="history" size={25} color="#d96150" />);
const bill = (<Icon name="book" size={25} color="#d96150" />);
const feedback = (<Icon name="envelope-square" size={25} color="#2fd541" />);
const rule = (<Icon name="question-circle" size={25} color="#878787" />);
const setting = (<Icon name="cog" size={25} color="#878787" />);
const logout = (<Icon name="sign-out" size={25} color="#878787" />);


const  {height: HEIGHT} = Dimensions.get('window')

class Main extends Component<Props>{
    constructor(props){
        super(props);
    }

    render (){
        return(
            <View style={{width:'100%',height:HEIGHT, backgroundColor:'#d9d9d9'}}>

                <View style={{flex: 7, flexDirection:'row',backgroundColor:'#2fd541',justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Tài khoản</Text>
                </View>
                <View style={{flex: 7, flexDirection:'row',backgroundColor:'black',justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flex: 20,alignItems: 'center', }}>
                        {iconUser}
                    </View>
                    <TouchableOpacity style={{flex: 70}} onPress={Actions.login}>
                        <Text style={{color:'white'}}>{ this.props.userInfo == null ? 'Đăng nhập': (this.props.userInfo.email == null ? 'Đăng nhập': this.props.userInfo.email)} </Text>
                       {/* <Text style={{color:'white'}}>{ this.props.userInfo == null ? 'Đăng nhập': "juju"
                           /* (this.props.userInfo.email == null ? 'Đăng nhập':
                                this.props.userInfo.email) }</Text>*/}

                    </TouchableOpacity>
                    <View style={{flex: 10}}>
                        {iconArrowRight}
                    </View>

                </View>
                <View style={{flex: 86}}>
                    {
                        this.props.userInfo == null ? null : (this.props.userInfo.email == null ? null:
                            <View style={{flex: 16, marginTop: 5}}>
                                <TouchableOpacity style={styles.title}>
                                    <View style={{flex: 15, alignItems: 'center',}}>
                                        {history}
                                    </View>
                                    <View style={{flex: 75}}>
                                        <Text style={{color: 'black'}}>Lịch sử</Text>
                                    </View>
                                    <View style={{flex: 10}}>
                                        {iconArrowRight1}
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.title}>
                                    <View style={{flex: 15, alignItems: 'center',}}>
                                        {bill}
                                    </View>
                                    <View style={{flex: 75}}>
                                        <Text style={{color: 'black'}}>Hóa đơn</Text>
                                    </View>
                                    <View style={{flex: 10}}>
                                        {iconArrowRight1}
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                    {
                        this.props.userInfo == null ? null : (this.props.userInfo.email == null ? null:
                            <View style={{flex: 8, marginTop: 5}}>
                            <TouchableOpacity style={styles.title}>
                                <View style={{flex: 15, alignItems: 'center',}}>
                                    {feedback}
                                </View>
                                <View style={{flex: 75}}>
                                    <Text style={{color: 'black'}}>Góp ý</Text>
                                </View>
                                <View style={{flex: 10}}>
                                    {iconArrowRight1}
                                </View>
                            </TouchableOpacity>

                        </View>
                        )
                    }
                    {
                        this.props.userInfo == null ? null : (this.props.userInfo.email == null ? null:
                        <View style={{flex: 24, marginTop: 5}}>
                            <TouchableOpacity style={styles.title}>
                                <View style={{flex: 15, alignItems: 'center',}}>
                                    {rule}
                                </View>
                                <View style={{flex: 75}}>
                                    <Text style={{color: 'black'}}>Chính sách và quy định</Text>
                                </View>
                                <View style={{flex: 10}}>
                                    {iconArrowRight1}
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.title} onPress={Actions.setting}>
                                <View style={{flex: 15, alignItems: 'center',}}>
                                    {setting}
                                </View>
                                <View style={{flex: 75}}>
                                    <Text style={{color: 'black'}}>Cài đặt</Text>
                                </View>
                                <View style={{flex: 10}}>
                                    {iconArrowRight1}
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.title}
                                              onPress={() => {
                                                  this.props.auth_succ(null);
                                                  Actions.login();
                                              }}>
                                <View style={{flex: 15, alignItems: 'center',}}>
                                    {logout}
                                </View>
                                <View style={{flex: 75}}>
                                    <Text style={{color: 'black'}}>Đăng xuất</Text>
                                </View>
                                <View style={{flex: 10}}>
                                    {iconArrowRight1}
                                </View>
                            </TouchableOpacity>
                        </View>
                        )
                    }
                    <View style={{flex: 38}}>
                    </View>
                </View>
            </View>
        );
    }

    renderSetting = () => {

    }
};




const mapStateToProps = (state) => ({
    token: state.loginReducer.token,
    userInfo: state.loginReducer.userInfo
})

const mapDispathToProps = (dispatch) => ({
    auth_succ: (data) => {dispatch(auth_succ(data))},
})

export default connect (mapStateToProps, mapDispathToProps) (Main);

const styles = StyleSheet.create({
    title: {
        flex:100,
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor:'#d9d9d9',
        borderWidth: 1
    },
    content: {
        flex:100,
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor:'#d9d9d9',
        borderWidth: 1
    },

})



