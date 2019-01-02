// import React from 'react';
// import {
//     StyleSheet,
//     View,
//     Text,
//     Dimensions,
//     TouchableOpacity,
// } from 'react-native';
//
// import MapView, { Marker, ProviderPropType } from 'react-native-maps';
//
// const { width, height } = Dimensions.get('window');
//
// const ASPECT_RATIO = width / height;
// const LATITUDE = 37.78825;
// const LONGITUDE = -122.4324;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// let id = 0;
//
// function randomColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
//
// class MapStore extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             region: {
//                 // latitude: LATITUDE,
//                 // longitude: LONGITUDE,
//                 latitude: 10.776530,
//                 longitude: 106.700981,
//                 latitudeDelta: LATITUDE_DELTA,
//                 longitudeDelta: LONGITUDE_DELTA,
//             },
//             markers: [],
//         };
//     }
//
//     onMapPress(e) {
//         console.log('onMapPress: ', e);
//         this.setState({
//             markers: [
//                 ...this.state.markers,
//                 {
//                     coordinate: e.nativeEvent.coordinate,
//                     key: id++,
//                     color: randomColor(),
//                 },
//             ],
//         });
//     }
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <MapView
//                     provider={this.props.provider}
//                     style={styles.map}
//                     initialRegion={this.state.region}
//                     onPress={e => console.log(e.nativeEvent)}
//                     onRegionChange={
//                         (region) => {
//                             console.log(region);
//                         }
//                     }
//                 >
//                     {this.state.markers.map(marker => (
//                         <Marker
//                             draggable
//                             key={marker.key}
//                             coordinate={marker.coordinate}
//                             pinColor={marker.color}
//                         />
//                     ))}
//                 </MapView>
//                 <View style={styles.buttonContainer}>
//                     <TouchableOpacity
//                         onPress={() => this.setState({ markers: [] })}
//                         style={styles.bubble}
//                     >
//                         <Text>Tap to create a marker of random color</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         );
//     }
// }
//
// Map.propTypes = {
//     provider: ProviderPropType,
// };
//
// const styles = StyleSheet.create({
//     container: {
//         ...StyleSheet.absoluteFillObject,
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//     },
//     map: {
//         ...StyleSheet.absoluteFillObject,
//     },
//     bubble: {
//         backgroundColor: 'rgba(255,255,255,0.7)',
//         paddingHorizontal: 18,
//         paddingVertical: 12,
//         borderRadius: 20,
//     },
//     latlng: {
//         width: 200,
//         alignItems: 'stretch',
//     },
//     button: {
//         width: 80,
//         paddingHorizontal: 12,
//         alignItems: 'center',
//         marginHorizontal: 10,
//     },
//     buttonContainer: {
//         flexDirection: 'row',
//         marginVertical: 20,
//         backgroundColor: 'transparent',
//     },
// });
// export default MapStore;



import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Image,TouchableOpacity, ImageBackground,AppRegistry,Navigator,Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from "axios";
const iconArrowLeft = (<Icon name="angle-left" size={30} color="#000" />);

const  {height: HEIGHT} = Dimensions.get('window');
const  {width: WIDTH} = Dimensions.get('window');

const LATITUDE = 10.773533;
const LONGITUDE = 106.702899;
const LATITUDE_DELTA =  0.01;
const LONGITUDE_DELTA = 0.01;

//const iconUser =()=> (<Icon name="user" size={25} color="#B81033" />);

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            markers:[],
            click:false,
        };
        this.getRestaurantNearMe()
    }
    getRestaurantNearMe(){
        var self=this;
        const url='http://food-delivery-server.herokuapp.com/restaurant/nearMe/'+this.state.region.latitude+'&'+this.state.region.longitude;
        axios.get(url)
            .then(res =>{
                this.setState({markers:res.data})
            })
            .catch(function (error) {

            });
    }
    search(){
        axios.get('http://food-delivery-server.herokuapp.com/restaurant/search?name='+this.state.searchfood).then(response => {
            this.setState({data:response.data})
            console.log(this.state.data)
        }).catch(error =>{
        })
    }
    onRegionChange=(region)=> {
        this.setState({region });
        this.getRestaurantNearMe()
    }
    render(){
        return (
            <View style={{width: WIDTH,height:HEIGHT}}>
                <View style={styles.header}>
                    <TouchableOpacity onPress ={Actions.merchant}>
                        {iconArrowLeft}
                    </TouchableOpacity>
                    <View style={styles.searchRes}>
                        <Icon name="search" size={15} color="#000" style={{marginLeft: 10}}/>

                        <TextInput placeholder="Tìm kiếm địa điểm,món ăn..."
                                   onChangeText={(text) => this.Search()}/>
                    </View>
                </View>
                <MapView
                    provider={this.props.provider}
                    style={{flex:8.7,backgroundColor: '#fff',width:500,height:500}}
                    initialRegion={this.state.region}
                    onRegionChange={region => {
                        this.onRegionChange(region)
                    }}>
                    {this.state.markers.map(marker => (
                        <Marker
                            coordinate={{longitude: marker.longitude, latitude: marker.latitude}}
                            title={marker.RESTAURANT.name}
                            description={
                                marker.street
                            }
                        >
                        </Marker>
                    ))}
                </MapView>
            </View>
        );

    }
};

const styles = StyleSheet.create({
    header:{
        flex:0.9,
        flexDirection:'row',
        backgroundColor:'#2fd541',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    searchRes:{
        width:'92%',
        height: '70%',
        backgroundColor:'#ffffff',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image_back: {
        width: 15,
        height: 15
    }
});