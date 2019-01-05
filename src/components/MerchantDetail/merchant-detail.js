import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Image, StatusBar,TouchableOpacity, ImageBackground, FlatList,Dimensions, ScrollView, WebView} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from "react-native"
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from 'react-redux'
import {savebasket} from "../../redux/action";


const iconPlus = (<Icon name="plus-circle" size={20} color="#072bba" />);
const iconMoney = (<Icon name="location-arrow" size={17} color="#072bba" />);
const iconPhone = (<Icon name="mobile" size={30} color="#072bba" />);
const iconAddress = (<Icon name="map-marker" size={17} color="#072bba" />);
const iconDistance = (<Icon name="exclamation-circle" size={17} color="#072bba" />);
const iconStar = (<Icon name="star" size={17} color="#072bba" />);
const iconArrowLeft = (<Icon name="angle-left" size={30} color="#000" />);


const  {height: HEIGHT} = Dimensions.get('window');
class Merchantdetail extends Component{
    constructor(props){
        super(props);
        this.state={
            id: '',
            name: '',
            menuRestaurant: [],
            restaurant: {},
            address:{},
            resource:[]
        }
    }
    getMenu= async()=>{
        var self=this;
        var id = await AsyncStorage.getItem('id')
        self.setState({showProgress:true})
        const url='http://food-delivery-server.herokuapp.com/restaurant/getMenu/' +id;
        // alert(url)
        axios.get(url)
            .then(res =>{
                self.setState({
                    // menu:res.data.menu,showProgress:false,

                    menuRestaurant:res.data.menu,
                    restaurant:res.data.restaurant,
                    address:res.data.address,
                    resource:res.data.resource,
                    showProgress:false
                })
                // alert(res.data.restaurant.name)
            })
    }

    addtobasket = (item) => {
        this.props.savebasket(item);
        Actions.basketall();
    }

    getVideo() {
        for (let i = 0; i < this.state.resource.length; i++) {
            if (this.state.resource[i].type == "video") {
                console.log(this.state.resource[i].url)
                return this.state.resource[i].url;
            }
        }
    }

    componentWillMount(){
        this.getMenu();
        // this.getVideo();

    }

    render (){
        return(
            <ScrollView>
            <View style={{width:'100%',height: HEIGHT, backgroundColor:'#d9d9d9'}}>
                <View style={{width:'100%',height: HEIGHT}}>
                    <View style={{flex: 30}}>
                        <View style={{flex:2,flexDirection:'row',marginLeft: 5,justifyContent: 'center', zIndex: 3}}>
                            <View style={{flex:1,justifyContent: 'center'}}>
                                <TouchableOpacity
                                    onPress={Actions.merchant}>
                                    {iconArrowLeft}
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:9,justifyContent: 'center'}}>
                                <Text style={styles.textName}>{this.state.restaurant.name}</Text>
                            </View>
                        </View>
                        <View style={{flex:8}}>
                            <Image style={{width: '100%', height: '100%'}}
                                   source={{uri:this.state.restaurant.image}}/>
                        </View>
                    </View>

                    <View style={{flex: 12}}>
                        <View style={{flex: 30, flexDirection:'row', margin:5}}>
                            <View style={{flex: 25,justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={styles.textBody}>Giờ mở cửa:</Text>
                            </View>
                            <View style={{flex: 25,justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={styles.textBody}></Text>
                            </View>
                            <View style={{flex: 25,justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={styles.textBody}>Giờ đóng cửa:</Text>
                            </View>
                            <View style={{flex: 25,justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={styles.textBody}></Text>
                            </View>
                        </View>
                        <View style={{flex: 40, flexDirection:'row'}}>
                            <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                                {iconAddress}
                            </View>
                            <View style={{flex: 9,justifyContent: 'center'}}>
                                <Text style={styles.textBody}>{this.state.address.address}</Text>
                            </View>
                        </View>
                        <View style={{flex: 30, flexDirection:'row'}}>
                            <View style={{flex: 25,justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={styles.textBody}>Đánh giá:</Text>
                            </View>
                            <View style={{flex: 5,justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={styles.textBody}></Text>
                            </View>
                            <View style={{flex: 70,justifyContent: 'center'}}>
                                {iconStar}
                            </View>
                        </View>
                    </View>
                    <View style={{flex: 30}}>
                        <WebView
                            style={{height:200,borderWidth:1}}
                            // renderError={this.renderError}
                            javaScriptEnabled={true}
                            // source={{uri:this.state.resource.length == 0 ? '' : this.state.resource[1].url}}
                            source={{uri:this.state.resource.length == 0 ? '' : this.getVideo()}}
                        />
                    </View>


                    <View style={{flex: 25}}>
                        <FlatList
                            data={this.state.menuRestaurant}
                            renderItem={this._renderItem}
                        />
                    </View>

                    <View style={{flex: 3}}></View>


                    </View>
            </View>
            </ScrollView>
        );
    }

    _renderItem = ({item}) => (
        <View style={styles.detail}>
            <View style={{flex: 3}}>
                <Image style={{width: '100%', height: '100%'}}
                       source={{uri:item.image}}/>
            </View>
            <View style={{flex: 7}}>
                <View style={{flex: 30, marginLeft: 10,justifyContent: 'center'}}>
                    <Text style={styles.text_name_place}>{item.name}</Text>
                </View>
                <View style={{flex: 30,flexDirection: 'row'}}>
                    <View style={{flex: 9, marginLeft: 10,justifyContent: 'center'}}>
                        <Text style={{color: '#072bba'}}>{item.price}</Text>
                    </View>
                    <View style={{flex: 1,justifyContent: 'center'}}>
                        {/*<TouchableOpacity onPress={Actions.basket}>*/}
                        <TouchableOpacity onPress={()=>{this.addtobasket(item)}} >
                        {iconPlus}
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex: 30, flexDirection:'row', marginLeft: 10}}>

                    <Text style={{color: '#7a7a7a',fontStyle: 'italic'}}>Đã được đặt {item.sold} lần</Text>
                </View>
            </View>
        </View>
    );

};

const mapStateToProps = (state) => ({
    idres: state.appReducer.idres,
})

const mapDispathToProps = (dispatch) => ({
    savebasket: (item) => {dispatch(savebasket(item))},
})

export default connect (mapStateToProps, mapDispathToProps) (Merchantdetail)


const styles = StyleSheet.create({
    textName:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16
    },
    textBody:{
        color: '#575757',
    },
    detail:{
        height: 80,
        flexDirection: 'row',
        borderColor: '#bebab4',
        borderWidth: 1,
        alignItems: 'center',
        marginLeft: 5,
        marginRight:5,
        marginBottom: 10,
        backgroundColor:'#d9d9d9'
    },
    text_name_place:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14
    },
    textAddress:{
        color: 'black',
        fontSize:12
    },

});
