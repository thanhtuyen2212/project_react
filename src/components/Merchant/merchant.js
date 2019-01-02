import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput,
    Button, Image, StatusBar, ImageBackground, FlatList,Dimensions,
    TouchableOpacity, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {Actions} from "react-native-router-flux";
import axios from "axios";
import {AsyncStorage} from 'react-native';
const iconSearch = (<Icon name="search" size={25} color="#919191" />);
const iconDelivery = (<Icon name="truck" size={18} color="#2fd541" />);
const iconBell = (<Icon name="bell" size={18} color="blue" />);
const iconDistance = (<Icon name="map-marker" size={18} color="#2fd541" />);
const iconMoney = (<Icon name="location-arrow" size={18} color="#2fd541" />);
const iconDelivery2 = (<Icon name="truck" size={15} color="#2fd541" />);
const iconStar = (<Icon name="star" size={18} color="#2fd541" />);
const iconSwitch = (<Icon name="toggle-on" size={25} color="black" />);

const  {height: HEIGHT} = Dimensions.get('window');

export default class Merchant extends Component{

    constructor(props){
        super(props);
        this.state={
            id: '',
            name: '',
            key:'',
            data1:[],
            data2:[]
        }
    }

    getAllCategories(){
        axios.get('http://food-delivery-server.herokuapp.com/categories/getAll'
        ).then(response=>{
            this.setState({data2:response.data});
        })
    }

    getRestaurantByCategories(id){
        var self=this;
        self.setState({showProgress:true})
        const url='http://food-delivery-server.herokuapp.com/restaurant/getCategory/' +id;
        axios.get(url)
            .then(res =>{
                self.setState({data1:res.data,showProgress:false})
            })
            .catch(function (error) {
                if (error.response){
                    self.setState({error:error.response.data.msg, check:-1, showProgress:false});
                }
            });
    }

    searchRestaurant(){
        var self=this;
        // alert(this.state.key)
        self.setState({showProgress:true})
        const url = 'http://food-delivery-server.herokuapp.com/restaurant/search?name='+this.state.key;
        axios.get(url)
            .then(res => {
                self.setState({data1:res.data, showProgress:false})
            })
            .catch(function (error) {
                if (error.response){
                    self.setState({error:error.response.data.msg, check:-1, showProgress:false});
                }
            })
    }

    _storageData = async (id) => {
        // alert(id);
        await AsyncStorage.setItem('id',id.toString());
    }
    getMenuRestaurant(id) {
        this._storageData(id)
        Actions.merchantDetail();
    }

    componentWillMount()
    {
        this.getAllCategories();
        // this.getRestaurantByCategories(2);
        this.searchRestaurant();
    }

    render (){
        return(
            <View style={{width:'100%',height: HEIGHT, backgroundColor:'#d9d9d9'}}>
                <View style={{flex: 10, backgroundColor: '#2fd541', flexDirection:'row'}}>
                    <View style={styles.search}>
                        <View style={{flex:1,justifyContent: 'center', alignIspitems: 'center'}}>
                            <TouchableOpacity onPress={() =>this.searchRestaurant()}>
                                {iconSearch}
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 9,justifyContent: 'center'}}>
                            <TextInput
                                style={styles.textSearch}
                                placeholder={'Tìm kiểm món ăn, tên địa điểm, địa chỉ,...'}
                                placeholderTextColor={'#78837f'}
                                onChangeText = {(inputsearch)=>this.setState({key:inputsearch})}
                                value = {this.state.key}
                            />
                        </View>
                    </View>
                    {/*<View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>*/}
                        {/*/!*<TouchableOpacity onPress={Actions.map}>*!/*/}
                        {/*<TouchableOpacity onPress ={Actions.map}>*/}

                        {/*{iconSwitch}*/}
                        {/*</TouchableOpacity>*/}
                    {/*</View>*/}
                </View>

                <View style={{flex: 17, backgroundColor:'white'}}>
                    <FlatList horizontal={true}
                              showsHorizontalScrollIndicator={false}
                              data={this.state.data2}
                        renderItem={this._renderItem2}
                    />
                </View>
                <View style={{flex: 5, flexDirection:'row'}}>
                    <View style={styles.headerMerchant}>
                        <Text style={styles.text_headerMerchant}>Bán chạy</Text>
                    </View>
                    <View style={styles.headerMerchant}>
                        <Text style={styles.text_headerMerchant}>Khuyến mãi</Text>
                    </View>
                    <View style={styles.headerMerchant}>
                        <Text style={styles.text_headerMerchant}>Gần tôi</Text>
                    </View>
                    <TouchableOpacity style={styles.headerMerchant}>
                        <Text style={styles.text_headerMerchant} onPress ={Actions.map}>MapView</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 68, backgroundColor:'white', margin: 3}}>
                        <FlatList
                                data={this.state.data1}
                                renderItem={this._renderItem}
                        />
                </View>
                <View style={{flex: 10}}></View>
            </View>
    );
    }

    _renderItem = ({item}) => (
        <TouchableOpacity onPress ={(id) => this.getMenuRestaurant(item.id)}>
            <View style={{width:'100%', backgroundColor:'#d9d9d9',height: 100}}>
                <View style={styles.merchant}>
                    <View style={{flex: 2.5}}>
                        <Image style={{width: '100%', height: '100%',}}
                               source={{uri:item.image}}/>
                    </View>
                    <View style={{flex: 7.5}}>
                        <View style={{flex: 5, marginLeft: 10}}>
                            <Text style={styles.namePlaces}>{item.name}</Text>
                        </View>

                        <View style={{flex: 2,marginLeft: 10,flexDirection: 'row' }}>
                            <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
                                {iconDistance}
                            </View>
                            <View style={{flex: 6}}>
                                <Text>{item.idAddress}</Text>
                            </View>
                            <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
                                {iconStar}
                            </View>
                            <View style={{flex: 0.5,alignItems: 'center',justifyContent: 'center'}}>
                                <Text>{item.rating}</Text>
                            </View>
                            <View style={{flex: 1.5}}>
                                <Text>/5</Text>
                            </View>
                        </View>
                        <View style={{flex: 3,marginLeft: 10,flexDirection: 'row' }}>
                            <View style={{flex: 2,alignItems: 'center',justifyContent: 'center'}}>
                                <Text style={{fontSize:11}}>Mở cửa</Text>
                            </View>
                            <View style={{flex: 3,alignItems: 'center',justifyContent: 'center'}}>
                                <Text>{item.timeOpen}</Text>
                            </View>
                            <View style={{flex: 2,alignItems: 'center',justifyContent: 'center'}}>
                                <Text style={{fontSize:11}}>Đóng cửa</Text>
                            </View>
                            <View style={{flex: 3,alignItems: 'center',justifyContent: 'center'}}>
                                <Text>{item.timeClose}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    _renderItem2 = ({item}) => (
        <TouchableOpacity onPress={(id) =>this.getRestaurantByCategories(item.id)}>

        <View style={{height: 60,width:60, margin: 10}}>
                <View style={{flex: 95}}>
                    <Image style={{width: '100%', height: '100%'}}
                           source={{uri:item.image}}/>
                </View>
                <View style={{flex: 5}}>
                        <Text style={{color: 'black', fontSize:11, textAlign:'center'}}>{item.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    search: {
        flex:9,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 12,
        backgroundColor: 'white',
        borderColor: 'white',
        margin: 7
    },
    textSearch:{
        color: '#0c0c0c',
        fontSize: 12,
        justifyContent: 'center'
    },
    headerMerchant:{
        flex:25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_headerMerchant:{
        color: 'black',
        textAlign: 'center'
    },
    iconMerchant:{
        flex:20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    merchant:{
        //flex: 10,
        flexDirection: 'row',
        borderColor: '#d9d9d9',
        borderWidth: 3,
        alignItems: 'center',
        backgroundColor:'white'
    },
    namePlaces:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        fontFamily:'Helvetica'
    },
    numberPlaces:{
        color: '#072bba',
        fontStyle: 'italic'
    },
    distances:{
        color: 'black',
        fontStyle: 'italic'
    }
});