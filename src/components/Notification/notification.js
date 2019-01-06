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
    Dimensions,
    TouchableOpacity,
    FlatList
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {Actions} from "react-native-router-flux";
import axios from 'axios';
const iconArrowLeft = (<Icon name="angle-left" size={30} color="#4d4d4d" />);
const iconEmail = (<Icon name="envelope" size={15} color="#4d4d4d" />);
const iconPassword = (<Icon name="unlock-alt" size={20} color="#4d4d4d" />);
const  {height: HEIGHT} = Dimensions.get('window')

export default class Notification extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }


    render (){
        return(
            <View style={{width:'100%',height: HEIGHT}}>
                <View style={{flex:8,justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue'}}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Thông báo</Text>
                </View>
                <View style={{flex:82}}>
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
                {/*<Image style={{width: '100%', height: '100%'}}*/}
                       {/*source={{uri:item.image}}/>*/}
            </View>
            <View style={{flex: 7}}>
                <View style={{flex: 30, marginLeft: 10,justifyContent: 'center'}}>
                    {/*<Text style={styles.text_name_place}>{item.title}</Text>*/}
                </View>
                <View style={{flex: 30, marginLeft: 10,justifyContent: 'center'}}>
                    {/*<Text style={styles.text_name_place}>{item.content}</Text>*/}
                </View>

            </View>
        </View>
    );

};
const styles = StyleSheet.create({
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
});
