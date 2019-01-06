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
const  {height: HEIGHT} = Dimensions.get('window')

class Basket extends Component{

    constructor(props){
        super(props);
        this.state={
            data: [
                {
                    key: '1',
                    choose: 'Chọn mức đá',
                    choose1: '100% đá',
                    choose2:'80% đá',
                    choose3: '50% đá',
                    choose4: '30% đá',
                    choose5: '0% đá',
                    price1: '0đ',
                    price2:'0đ',
                    price3: '0đ',
                    price4: '0đ',
                    price5: '0đ' },
                {
                    key: '2',
                    choose: 'Chọn topping',
                    choose1: '100% đá',
                    choose2:'80% đá',
                    choose3: '50% đá',
                    choose4: '30% đá',
                    choose5: '0% đá',
                    price1: '0đ',
                    price2:'0đ',
                    price3: '0đ',
                    price4: '0đ',
                    price5: '0đ' },
                {
                    key: '3',
                    choose: 'Chọn mức đường',
                    choose1: '100% đá',
                    choose2:'80% đá',
                    choose3: '50% đá',
                    choose4: '30% đá',
                    choose5: '0% đá',
                    price1: '0đ',
                    price2:'0đ',
                    price3: '0đ',
                    price4: '0đ',
                    price5: '0đ' },
            ],
        }
    }

    render (){
        return(
            <View style={{width:'100%',height:HEIGHT}}>

                <View style={{flex: 6, flexDirection:'row',backgroundColor:'#2fd541',justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flex:1,justifyContent: 'center'}}>
                        <TouchableOpacity
                            style = {{marginLeft:5}}
                            onPress={Actions.merchant}>
                            {iconArrowLeft}
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:9,justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>Thêm món</Text>
                    </View>
                </View>
                <View style={{flex: 18, flexDirection: 'row', margin: 10}}>
                    <View style={{flex: 25}}>
                        <Image style={{width: '100%', height: '100%',}}
                               source={require('../../image/image_merchant.jpg')}/>
                    </View>
                    <View style={{flex: 50}}>
                        <View style={{flex: 30, marginLeft:10,justifyContent: 'center'}}>
                            <Text style={{color: 'black', fontWeight:'bold'}}>Trà dâu Nam Mỹ chanh vàng</Text>
                        </View>
                        <View style={{flex: 30, marginLeft:10,justifyContent: 'center'}}>
                            <Text style={{color: 'black'}}>55,000đ</Text>
                        </View>
                        <View style={{flex: 30, marginLeft: 10,justifyContent: 'center'}}>
                            <Text style={{color: '#7a7a7a',fontStyle: 'italic'}}>Đã được đặt 2212 lần</Text>
                        </View>
                    </View>
                    <View style={{flex: 25, flexDirection:'row'}}>
                        <View style={{flex: 3,justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity>
                                {iconMinus}
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 4,justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: 'black'}}>1</Text>
                        </View>
                        <View style={{flex: 3,justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity>
                                {iconPlus}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{flex: 58,justifyContent: 'center'}}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this._renderItem}
                    />

                </View>
                <View style={{flex: 6, flexDirection:'row',backgroundColor:'#072bba',justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flex: 5, marginLeft: 10}}>
                        <TouchableOpacity onPress={Actions.basketall}>
                            <Text style={{color: 'white', fontWeight: 'bold', textAlign:'left'}}>Thêm vào giỏ</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 5, marginRight: 10}}>
                        <Text style={{color: 'white', textAlign: 'right'}}>55,000đ</Text>
                    </View>
                </View>
                <View style={{flex: 12}}></View>

            </View>
        );
    }

    _renderItem = ({item}) => (
        <View style={{height: 200, borderColor: '#dfdbd5', marginLeft: 5,marginRight:5, marginBottom: 10}}>
            <View style={{flex: 15, backgroundColor:'#d9d9d9', justifyContent:'center'}}>
                <Text style={{color: 'black', fontWeight:'bold', marginLeft: 10}}>{item.choose}</Text>
            </View>
            <View style={{flex: 17,flexDirection:'row', borderColor: '#dddddd', borderWidth: 0.5}}>
                <View style={{flex: 8,justifyContent: 'center'}}>
                    <Text style={{color: 'black', marginLeft: 10}}>{item.choose1}</Text>
                </View>
                <View style={{flex: 2,justifyContent: 'center'}}>
                    <Text style={{color: 'black', marginRight: 10, textAlign:'right'}}>{item.price1}</Text>
                </View>
            </View>
            <View style={{flex: 17,flexDirection:'row', borderColor: '#dddddd', borderWidth: 0.5}}>
                <View style={{flex: 8,justifyContent: 'center'}}>
                    <Text style={{color: 'black', marginLeft: 10}}>{item.choose2}</Text>
                </View>
                <View style={{flex: 2,justifyContent: 'center'}}>
                    <Text style={{color: 'black', marginRight: 10, textAlign:'right'}}>{item.price2}</Text>
                </View>
            </View>
            <View style={{flex: 17,flexDirection:'row', borderColor: '#dddddd', borderWidth: 0.5}}>
                <View style={{flex: 8,justifyContent: 'center'}}>
                    <Text style={{color: 'black', marginLeft: 10}}>{item.choose3}</Text>
                </View>
                <View style={{flex: 2,justifyContent: 'center'}}>
                    <Text style={{color: 'black', marginRight: 10, textAlign:'right'}}>{item.price3}</Text>
                </View>
            </View>
            <View style={{flex: 17,flexDirection:'row', borderColor: '#dddddd', borderWidth: 0.5}}>
                <View style={{flex: 8,justifyContent: 'center'}}>
                    <Text style={{color: 'black', marginLeft: 10}}>{item.choose4}</Text>
                </View>
                <View style={{flex: 2,justifyContent: 'center'}}>
                    <Text style={{color: 'black', marginRight: 10, textAlign:'right'}}>{item.price4}</Text>
                </View>
            </View>
            <View style={{flex: 17,flexDirection:'row', borderColor: '#dddddd', borderWidth: 0.5}}>
                <View style={{flex: 8,justifyContent: 'center'}}>
                    <Text style={{color: 'black', marginLeft: 10}}>{item.choose5}</Text>
                </View>
                <View style={{flex: 2,justifyContent: 'center'}}>
                    <Text style={{color: 'black', marginRight: 10, textAlign:'right'}}>{item.price5}</Text>
                </View>
            </View>

        </View>
    );


};
const styles = StyleSheet.create({



});