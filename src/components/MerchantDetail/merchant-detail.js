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
    CheckBox,
    FlatList,
    Dimensions, TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {Actions} from "react-native-router-flux";
const iconPlus = (<Icon name="plus-circle" size={20} color="#072bba" />);
const iconMoney = (<Icon name="location-arrow" size={17} color="#072bba" />);
const iconPhone = (<Icon name="mobile" size={30} color="#072bba" />);
const iconAddress = (<Icon name="map-marker" size={17} color="#072bba" />);
const iconDistance = (<Icon name="exclamation-circle" size={17} color="#072bba" />);
const iconStar = (<Icon name="star" size={17} color="#072bba" />);
const iconArrowLeft = (<Icon name="angle-left" size={30} color="#000" />);
const  {height: HEIGHT} = Dimensions.get('window')


export default class MerchantDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            data: [
                {key: '1',
                    name_place: 'Trà dâu Nam Mỹ chanh vàng',
                    price:'55,000đ',
                    number_order: 'Đã được đặt 2212 lần'
                },
                {key: '2',
                    name_place: 'Trà hoa quả Queen Fruit',
                    price:'55,000đ',
                    number_order: 'Đã được đặt 2212 lần'
                },
                {key: '3',
                    name_place: 'Trà thảo mộc hoa quả',
                    price:'55,000đ',
                    number_order: 'Đã được đặt 2212 lần'
                },
                {key: '4',
                    name_place: 'Lục trà chanh leo ổi hồng',
                    price:'55,000đ',
                    number_order: 'Đã được đặt 2212 lần'
                },
                {key: '5',
                    name_place: 'Trà dưa mật hoàng kim Cheese',
                    price:'55,000đ',
                    number_order: 'Đã được đặt 2212 lần'
                },
                {key: '6',
                    name_place: 'Matcha shizoka cheese',
                    price:'55,000đ',
                    number_order: 'Đã được đặt 2212 lần'
                },
            ],

        }
    }

    render (){
        return(
            <View style={{width:'100%',height: HEIGHT}}>
                <View style={{flex: 35}}>
                    <View style={{flexDirection:'row',marginLeft: 5,justifyContent: 'center', zIndex: 3}}>
                        <View style={{flex:1,justifyContent: 'center'}}>
                            <TouchableOpacity
                                onPress={Actions.merchant}>
                                {iconArrowLeft}
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:9,justifyContent: 'center'}}>
                            <Text style={styles.textName}>Trà sữa Heekcaa - Phan Văn Trị</Text>
                        </View>
                    </View>
                    <ImageBackground style={{width: '100%', height: '100%', zIndex:2}}
                                     source={require('../../image/image_heekcaa.jpg')}/>
                </View>
                <View style={{flex: 20}}>
                    <View style={{flex: 25, flexDirection:'row', zIndex:3}}>
                        <View style={{flex: 75, marginLeft: 10}}>
                            <View style={{flex: 5, marginLeft: 10}}>
                                <Text style={{color: '#072bba', fontWeight:'bold', fontSize:10}}>ĐANG MỞ CỬA</Text>
                            </View>
                            <View style={{flex: 5, marginLeft: 10}}>
                                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 10}}>09:00 - 22:30</Text>
                            </View>
                        </View>
                        <View style={{flex: 5,justifyContent: 'center'}}>
                            {iconPhone}
                        </View>
                        <View style={{flex: 20,justifyContent: 'center'}}>
                            <Text style={{color: 'black'}}>Liên hệ</Text>

                        </View>
                    </View>
                    <View style={styles.address}>
                        <View style={{flex: 25, flexDirection:'row'}}>
                            <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                                {iconAddress}
                            </View>
                            <View style={{flex: 9,justifyContent: 'center'}}>
                                <Text style={styles.textAddress}>366A4 Phan Văn Trị, Quận Gò Vấp, TP.HCM</Text>
                            </View>
                        </View>
                        <View style={{flex: 25, flexDirection:'row'}}>
                            <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                                {iconDistance}
                            </View>
                            <View style={{flex: 9,justifyContent: 'center'}}>
                                <Text style={styles.textAddress}>12,1km (Từ vị trí hiện tại)</Text>
                            </View>
                        </View>
                        <View style={{flex: 25, flexDirection:'row'}}>
                            <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                                {iconMoney}
                            </View>
                            <View style={{flex: 9,justifyContent: 'center'}}>
                                <Text style={styles.textAddress}>45,000 đồng - 57,000 đồng</Text>
                            </View>
                        </View>
                        <View style={{flex: 25, flexDirection:'row'}}>
                            <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                                {iconStar}
                            </View>
                            <View style={{flex: 9,justifyContent: 'center'}}>
                                <Text style={styles.textAddress}>7.3</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex: 45}}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this._renderItem}
                    />
                </View>
            </View>
        );
    }

    _renderItem = ({item}) => (
        <View style={styles.detail}>
            <View style={{flex: 3}}>
                <Image style={{width: '100%', height: '100%',}}
                       source={require('../../image/image_merchant.jpg')}/>
            </View>
            <View style={{flex: 7}}>
                <View style={{flex: 30, marginLeft: 10,justifyContent: 'center'}}>
                    <Text style={styles.text_name_place}>{item.name_place}</Text>
                </View>
                <View style={{flex: 30,flexDirection: 'row'}}>
                    <View style={{flex: 9, marginLeft: 10,justifyContent: 'center'}}>
                        <Text style={{color: '#072bba'}}>{item.price}</Text>
                    </View>
                    <View style={{flex: 1,justifyContent: 'center'}}>
                        <TouchableOpacity onPress={Actions.basket}>
                            {iconPlus}
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex: 30, flexDirection:'row', marginLeft: 10}}>
                    <Text style={{color: '#7a7a7a',fontStyle: 'italic'}}>{item.number_order}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textName:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16
    },
    address: {
        flex: 75,
        backgroundColor: '#d9d9d9',
        borderColor: '#dfdbd5',
        borderWidth: 1,
        alignItems: 'center',
        marginLeft: 5,
        marginRight:5,
        marginBottom: 10
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