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
    FlatList,Dimensions,
    TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {Actions} from "react-native-router-flux";
const iconArrowLeft = (<Icon name="angle-left" size={30} color="black" />);
const iconCircleRed = (<Icon name="circle" size={15} color="red" />);
const iconCircleGreen = (<Icon name="circle" size={15} color="green" />);
const  {height: HEIGHT} = Dimensions.get('window')


export default class Basket extends Component{

    constructor(props){
        super(props);
        this.state={
            data: [
                {key: '1',
                    number: '1',
                    price:'55,000đ',
                    choose: 'Trà dâu Nam Mỹ chanh vàng',
                    choose1: 'Tổng 1 Phần',
                    choose2:'Phí dịch vụ',
                    choose3: 'Phí vận chuyển: 14,1km',
                    price1: '55,000đ',
                    price2:'10,000đ',
                    price3: '84,600đ',
                    price4: '149,600đ'},
                {key: '2',
                    number: '2',
                    price:'55,000đ',
                    choose: 'Trà dâu Nam Mỹ chanh vàng',
                    choose1: 'Tổng 1 Phần',
                    choose2:'Phí dịch vụ',
                    choose3: 'Phí vận chuyển: 14,1km',
                    price1: '55,000đ',
                    price2:'10,000đ',
                    price3: '84,600đ',
                    price4: '233,600đ'},
            ],
        }
    }

    render (){
        return(
            <View style={{width:'100%',height: HEIGHT}}>
                <View style={{flex: 5, flexDirection: 'row'}}>
                    <View style={{flex: 0.5,justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity
                            onPress={Actions.merchant}>
                            {iconArrowLeft}
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 9.5,justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={styles.text_name}>Trà sữa Heekcaa - Phan Văn Trị</Text>
                    </View>
                </View>
                <View style={{flex: 30}}>
                    <Image style={{width: '100%', height: '100%',}}
                           source={require('../../image/image_map.jpg')}/>
                </View>
                <View style={{flex: 20}}>
                    <View style={{flex: 25, flexDirection: 'row'}}>
                        <View style={{flex: 0.5,justifyContent: 'center', alignItems: 'center'}}>
                            {iconCircleRed}
                        </View>
                        <View style={{flex: 9.5,justifyContent: 'center'}}>
                            <Text style={styles.text_nameAddress}>Trà sữa Heekcaa - Phan Văn Trị</Text>
                        </View>
                    </View>
                    <View style={{flex: 25, flexDirection: 'row'}}>
                        <Text style={styles.text_Address}>366A4 Phan Văn Trị, Quận Gò Vấp, TP.HCM</Text>
                    </View>
                    <View style={{flex: 25, flexDirection: 'row'}}>
                        <View style={{flex: 0.5,justifyContent: 'center', alignItems: 'center'}}>
                            {iconCircleGreen}
                        </View>
                        <View style={{flex: 9.5,justifyContent: 'center'}}>
                            <Text style={styles.text_nameAddress}>Thanh Tuyền</Text>
                        </View>
                    </View>
                    <View style={{flex: 25, flexDirection: 'row'}}>
                        <Text style={styles.text_Address}>208/2D Lưu Hữu Phước, Phường 15, Quận 8, Hồ Chí Minh</Text>
                    </View>
                </View>
                <View style={{flex: 23}}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this._renderItem}
                    />
                </View>
                <View style={{flex: 7,flexDirection:'row', borderColor: '#c9c9c9', borderWidth: 0.5, backgroundColor: '#999999', margin: 3}}>
                    <View style={{flex: 8,justifyContent: 'center'}}>
                        <Text style={{color: 'black', marginLeft: 10, fontWeight:'bold'}}>Tổng cộng</Text>
                    </View>
                    <View style={{flex: 2,justifyContent: 'center'}}>
                        <Text style={{color: 'black', marginRight: 10, textAlign:'right', fontWeight:'bold'}}>233,600đ</Text>
                    </View>
                </View>
                <View style={{flex: 10}}></View>

            </View>
        );
    }

    _renderItem = ({item}) => (
        <View style={styles.viewPrice}>
            <View style={{flex: 25, backgroundColor:'#dddddd',justifyContent: 'center'}}>
                <View style={{flex: 5, flexDirection:'row'}}>
                    <View style={{flex: 0.5,justifyContent: 'center'}}>
                        <Text style={{color: 'black', fontWeight:'bold', marginLeft: 5}}>{item.number}</Text>
                    </View>
                    <View style={{flex: 7.5,justifyContent: 'center'}}>
                        <Text style={{color: 'black', fontWeight:'bold'}}>{item.choose}</Text>
                    </View>
                    <View style={{flex: 2,justifyContent: 'center'}}>
                        <Text style={{color: 'black', textAlign:'right', marginRight: 10}}>{item.price}</Text>
                    </View>
                </View>
                <View style={{flex: 5,justifyContent: 'center'}}>
                    <Text style={{color: 'black', marginLeft: 20}}>100% đá, 100% dường</Text>
                </View>
            </View>
            <View style={styles.detail}>
                <View style={{flex: 8,justifyContent: 'center'}}>
                    <Text style={{color: 'black', marginLeft: 10}}>{item.choose1}</Text>
                </View>
                <View style={{flex: 2,justifyContent: 'center'}}>
                    <Text style={{color: 'black', marginRight: 10, textAlign:'right'}}>{item.price1}</Text>
                </View>
            </View>
            <View style={styles.detail}>
                <View style={{flex: 8,justifyContent: 'center'}}>
                    <Text style={{color: 'black', marginLeft: 10}}>{item.choose2}</Text>
                </View>
                <View style={{flex: 2,justifyContent: 'center'}}>
                    <Text style={{color: 'black', marginRight: 10, textAlign:'right'}}>{item.price2}</Text>
                </View>
            </View>
            <View style={styles.detail}>
                <View style={{flex: 8,justifyContent: 'center'}}>
                    <Text style={{color: 'black', marginLeft: 10}}>{item.choose3}</Text>
                </View>
                <View style={{flex: 2,justifyContent: 'center'}}>
                    <Text style={{color: 'black', marginRight: 10, textAlign:'right'}}>{item.price3}</Text>
                </View>
            </View>

        </View>
    );

};
const styles = StyleSheet.create({
    text_name:{
        color: 'black',
        fontWeight:'bold',
        marginLeft: 10,
        fontSize: 16
    },
    text_Address:{
        color: 'black',
        marginLeft: 30,
        fontSize:12
    },
    text_nameAddress:{
        color: 'black',
        fontWeight:'bold',
        marginLeft: 10
    },
    detail:{
        flex: 25,
        flexDirection:'row',
        borderColor: '#dddddd',
        borderWidth: 0.5
    },
    viewPrice:{
        height: 150,
        borderColor: '#dfdbd5',
        marginLeft: 5,
        marginRight:5,
        marginBottom: 10
    }

});