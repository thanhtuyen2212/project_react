import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import MapView, { Marker, ProviderPropType, Callout } from 'react-native-maps';
import Icon from "react-native-vector-icons/FontAwesome";
import {Actions} from "react-native-router-flux";
const { width, height } = Dimensions.get('window');
const iconArrowLeft = (<Icon name="angle-left" size={30} color="#4d4d4d" />);

const ASPECT_RATIO = width / height;
const LATITUDE = 10.776530;
const LONGITUDE = 106.700981;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

class MapStore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        // latitude: LATITUDE,
        // longitude: LONGITUDE,
        latitude: 10.776530,
        longitude: 106.700981,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [],
    };
  }

  onMapPress(e) {
    console.log('onMapPress: ', e);
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: randomColor(),
        },
      ],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
            {iconArrowLeft}
        </View>
          <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
          onPress={e => console.log(e.nativeEvent)}
          onRegionChange={
            (region) => {
              console.log(region);
            }
          }
        >
{/*          {this.state.markers.map(marker => (
            <Marker
              draggable
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={marker.color}
            />
          ))}*/}

          <MapView.Marker
              coordinate={{
                  latitude: LATITUDE,
                  longitude: LONGITUDE,
              }}
              title={'vn vo dich'}
              description={'Cua hang sieu ngon'}
              >
          </MapView.Marker>
{/*              <Marker
                  title = { 'Changing Colors Garage' }
                  position = {{ lat: 10.776530, lng: 106.700981 }}
                  name = { 'Changing Colors Garage' }
              />*/}
        </MapView>
      </View>
    );
  }
}

Map.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  /*radius:{
    height: 50,
    width:50,
    borderRadius: 50/2,
    overlow:'hidden',
    backgroundColor: '#3aaf24',
    borderWidth: 1,
    borderColor:'#e1e33a',
    alignItems:'center',
    justifyContent: 'center',
  },
  marker:{
    height: 20,
    width:20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20/2,
    overflow:'hidden',
    backgroundColor:'#f8241e'
  },*/
});
export default MapStore;