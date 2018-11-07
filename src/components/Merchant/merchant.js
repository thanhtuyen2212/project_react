import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput,
    Button, Image, StatusBar, ImageBackground, FlatList,Dimensions,
    TouchableOpacity, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {Actions} from "react-native-router-flux";
import axios from "axios";
const iconSearch = (<Icon name="search" size={25} color="#919191" />);
const iconDelivery = (<Icon name="truck" size={18} color="#2fd541" />);
const iconBell = (<Icon name="bell" size={18} color="#2fd541" />);
const iconDistance = (<Icon name="map-marker" size={18} color="#2fd541" />);
const iconMoney = (<Icon name="location-arrow" size={18} color="#2fd541" />);
const iconDelivery2 = (<Icon name="truck" size={15} color="#2fd541" />);
const  {height: HEIGHT} = Dimensions.get('window');

export default class Merchant extends Component{

    constructor(props){
        super(props);
        this.state={
            id: '',
            name: '',
            data1: [
                {
                    key: '1',
                    name_place: 'Highlands Coffee',
                    number_places: '22 địa điểm',
                    distance:'2,2km',
                    price: 'Giá 50k',
                    sale: 'Khuyến mãi 30%',
                    time: '30`' },
                {
                    key: '2',
                    name_place: 'Trà sữa Heekcaa',
                    number_places: '22 địa điểm',
                    distance: '2,2km',
                    price: 'Giá 55k',
                    sale: 'Khuyến mãi 30%',
                    time: '30`'},
                {
                    key: '3',
                    name_place: 'Hoàng Yến Buffet',
                    number_places: '22 địa điểm',
                    distance: '2,2km',
                    price: 'Giá 300k',
                    sale: 'Khuyến mãi 30%',
                    time: '30`' },
                {
                    key: '4',
                    name_place: 'Trà sữa Gong Cha',
                    number_places: '22 địa điểm',
                    distance: '2,2km',
                    price: 'Giá 50k',
                    sale: 'Khuyến mãi 30%',
                    time: '30`' },
                {
                    key: '5',
                    name_place: 'Lẩu Tôm Càng Xiên',
                    number_places: '22 địa điểm',
                    distance: '2,2km',
                    price: 'Giá 50k',
                    sale: 'Khuyến mãi 30%',
                    time: '30`' },
                {
                    key: '6',
                    name_place: 'Bánh canh cua 14 - Trần Bình Trọng',
                    number_places: '22 địa điểm',
                    distance: '2,2km',
                    price: 'Giá 50k',
                    sale: 'Khuyến mãi 30%',
                    time: '30`' }
            ],
            data2:[]
        }
    }

    getAllCategories(){
        axios.get('http://food-delivery-server.herokuapp.com/categories/getAll'
        ).then(response=>{
            this.setState({data2:response.data});
        })
    }

    componentWillMount()
    {
        this.getAllCategories();
    }

    render (){
        return(
            <View style={{width:'100%',height: HEIGHT, backgroundColor:'#d9d9d9'}}>
                <View style={{flex: 10, backgroundColor: '#2fd541', flexDirection:'row'}}>
                    <View style={styles.search}>
                        <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                            {iconSearch}
                        </View>
                        <View style={{flex: 9,justifyContent: 'center'}}>
                            <TextInput
                                style={styles.textSearch}
                                placeholder={'Tìm kiểm món ăn, tên địa điểm, địa chỉ,...'}
                                placeholderTextColor={'#78837f'}
                            />
                        </View>
                    </View>

                </View>
                <View style={{flex: 15, backgroundColor:'white'}}>
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
                    <View style={styles.headerMerchant}>
                        <Text style={styles.text_headerMerchant}>Vừa đặt</Text>
                    </View>
                </View>
                <View style={{flex: 64, backgroundColor:'white', margin: 3}}>
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
        <TouchableOpacity
            onPress={Actions.merchantDetail}>
            <View style={{width:'100%', backgroundColor:'#d9d9d9',height: 100}}>
                <View style={styles.merchant}>
                    <View style={{flex: 2.5}}>
                        <Image style={{width: '100%', height: '100%',}}
                               source={require('../../image/image_merchant.jpg')}/>
                    </View>
                    <View style={{flex: 7.5}}>
                        <View style={{flex: 25, marginLeft: 10,justifyContent: 'center'}}>
                            <Text style={styles.namePlaces}>{item.name_place}</Text>
                        </View>
                        <View style={{flex: 25,flexDirection: 'row'}}>
                            <View style={{flex: 8, marginLeft: 10,justifyContent: 'center'}}>
                                <Text style={styles.numberPlaces}>{item.number_places}</Text>
                            </View>
                            <View style={{flex: 0.5,justifyContent: 'center'}}>
                                {iconDistance}
                            </View>
                            <View style={{flex: 1.5,justifyContent: 'center'}}>
                                <Text style={styles.distances}>{item.distance}</Text>
                            </View>
                        </View>
                        <View style={{flex: 25, flexDirection:'row'}}>
                            <View style={{flex: 0.8, marginLeft: 10,justifyContent: 'center'}}>
                                {iconMoney}
                            </View>
                            <View style={{flex: 6.8,justifyContent: 'center'}}>
                                <Text style={{color: 'black'}}>{item.price}</Text>
                            </View>
                            <View style={{flex: 0.9,justifyContent: 'center'}}>
                                {iconDelivery}
                            </View>
                            <View style={{flex: 1.5,justifyContent: 'center'}}>
                                <Text style={{color: 'black'}}>{item.time}</Text>
                            </View>
                        </View>
                        <View style={{flex: 25, flexDirection: 'row'}}>
                            <View style={{flex: 0.8, marginLeft: 10,justifyContent: 'center'}}>
                                {iconBell}
                            </View>
                            <View style={{flex: 9.2,justifyContent: 'center'}}>
                                <Text style={{color: 'black'}}>{item.sale}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex: 10}}></View>
            </View>
        </TouchableOpacity>
    );

    _renderItem2 = ({item}) => (
            <View style={{height: 60,width:60, margin: 10}}>
                <View style={{flex: 95}}>
                    <Image style={{width: '100%', height: '100%'}}
                           source={{uri:item.image}}/>
                </View>
                <View style={{flex: 5}}>
                    <Text style={{color: 'black', fontSize:11, textAlign:'center'}}>{item.name}</Text>
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    search: {
        flex:10,
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
        flex: 90,
        flexDirection: 'row',
        borderColor: 'white',
        borderWidth: 1,
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