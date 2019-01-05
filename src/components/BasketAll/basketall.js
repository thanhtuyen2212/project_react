import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import {addcart, discountcart} from "../../redux/action";
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
import { connect } from 'react-redux';
import {updateBasket} from "../../redux/action";

const iconPlus = (<Icon name="plus-circle" size={20} color="#072bba" />);
const iconMinus = (<Icon name="minus-circle" size={20} color="red" />);
const iconArrowLeft = (<Icon name="angle-left" size={30} color="white" />);
const iconArrowRight = (<Icon name="arrow-right" size={20} color="white" />);
const iconGift = (<Icon name="gift" size={30} color="#1c75d9" />);
const iconUser = (<Icon name="user" size={25} color="white" />);

const  {height: HEIGHT} = Dimensions.get('window')

class BasketAll extends Component<Props>{
    constructor(props){
        super(props);
    }

    render (){
        return(
            <View style={{width:'100%',height:HEIGHT, backgroundColor:'white'}}>
                <View style={{flex: 6, flexDirection:'row',backgroundColor:'#2fd541',justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flex:1, alignItems: 'center'}}>
                        <TouchableOpacity
                            style = {{marginLeft:5}}
                            onPress={Actions.merchant}>
                            {iconArrowLeft}
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:8, alignItems: 'center'}}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>Giỏ hàng</Text>
                    </View>
                    <View style={{flex:1}}>
                        <TouchableOpacity>
                            <Text style={{color: 'white', fontWeight: 'bold'}}>Xóa</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex: 8, flexDirection:'row',backgroundColor:'#d5a9cc',justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flex:1, alignItems: 'center'}}>
                        {iconUser}
                    </View>
                    <View style={{flex:5.5}}>
                        {/*<Text style={{color: 'black'}}>ThanhTuyen</Text>*/}
                        <Text style={{marginTop:10,fontWeight:'bold',color:'black'}}>{ this.props.userInfo == null ? 'Đăng nhập tài khoản' : (typeof this.props.userInfo.username === 'undefined' ? this.props.userInfo.email : this.props.userInfo.username) }</Text>

                    </View>
                    <View style={{flex:3.5}}>
                        <TouchableOpacity>
                            {
                                this.props.userInfo == null ? <Text style={{color: 'black'}}>Vui lòng đăng nhập</Text>
                                    : (this.props.userInfo.email == null ? <Text style={{color: 'black'}}>Vui lòng đăng nhập</Text> :
                              null)
                            }
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{flex: 67,justifyContent: 'center'}}>
                    {
                        this.props.userInfo == null ? null: (this.props.userInfo.email == null ? null :
                        <FlatList
                            data={this.props.cart}
                            renderItem={this._renderItem}
                        />
                        )
                    }
                </View>

                <View style={{flex:6, flexDirection:'row'}}>
                    <View style={{flex:7,justifyContent:'center', backgroundColor:'#3e3e3e', flexDirection:'row'}}>
                        <View style={{flex:2,justifyContent:'center',alignItems: 'center'}}>
                            {iconGift}
                        </View>
                        <View style={{flex:1, justifyContent:'center'}}>
                            <Text style={{color: 'white', fontWeight: 'bold'}}>1</Text>
                        </View>
                        <View style={{flex:7, justifyContent:'center'}}>
                            <Text style={{color: 'white', fontWeight: 'bold'}}>{this.props.total}đ</Text>
                            {/*<Text style={{color: 'white', fontWeight: 'bold'}}>{item.price * item.qty}đ</Text>*/}
                        </View>
                    </View>
                    <View style={{flex:3, flexDirection:'row',backgroundColor:'#072bba'}}>
                        <TouchableOpacity onPress ={this.props.userInfo == null ? Actions.login: (this.props.userInfo.email == null ? Actions.login : Actions.deliveryOrder)}>
                            <View style={{flex:7,justifyContent:'center',alignItems: 'center'}}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Giao hàng</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{flex:3,justifyContent:'center',alignItems: 'center'}}>
                            {iconArrowRight}
                        </View>
                    </View>
                </View>
                <View style={{flex: 13}}></View>
            </View>
        );
    }

      _renderItem = ({item}) => (
            <View style={{height: 60,backgroundColor:'#f9f5ef', borderColor:'#e7e3dd',borderWidth: 1,marginLeft: 10,marginRight:10,marginTop: 5 ,marginBottom: 5,flexDirection:'row' }}>
                <View style={{flex: 20}}>
                    <Image style={{width: '100%', height: '100%'}}
                           source={{uri:item.image}}/>
                </View>
                <View style={{flex: 60}}>
                    <View style={{flex: 35,justifyContent: 'center'}}>
                        <Text style={{color: 'black', fontWeight:'bold'}}>{item.name}</Text>
                        {/*<Text style={{color: 'black', fontWeight:'bold'}}>a</Text>*/}

                    </View>
                    <View style={{flex: 30,justifyContent: 'center'}}>
                        <Text style={{color: 'black'}}>{item.price}đ x {item.qty} = {item.price * item.qty}đ</Text>

                    </View>
                    <View style={{flex: 25,justifyContent: 'center'}}>
                        <Text style={{color: '#7a7a7a',fontStyle: 'italic'}}>Đã được đặt {item.sold} lần</Text>
                    </View>
                </View>
                <View style={{flex: 20, flexDirection:'row'}}>
                    <View style={{flex: 3,justifyContent: 'center', alignItems: 'center'}}>
                        {/*<TouchableOpacity>*/}
                        <TouchableOpacity onPress={()=>{this.props.updateBasket("-", item)}} >

                        {iconMinus}
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 4,justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'black'}}>{item.qty}</Text>
                    </View>
                    <View style={{flex: 3,justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={()=>{this.props.updateBasket("+", item)}} >
                            {iconPlus}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
      );
};

const mapStateToProps = (state) => ({
    cart: state.appReducer.cart,
    total: state.appReducer.total,
    token: state.loginReducer.token,
    userInfo: state.loginReducer.userInfo
})

const mapDispathToProps = (dispatch) => ({
    updateBasket: (method, item) => {dispatch(updateBasket(method, item))},
})

export default connect (mapStateToProps, mapDispathToProps) (BasketAll);



