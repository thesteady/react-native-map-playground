import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import MapView from 'react-native-maps';

class MapDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>Hello, Map</Text>

        <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  header: {
    backgroundColor: 'black',
    color: '#87e2b3',
    fontFamily: 'Courier',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 50,
    paddingBottom: 50,
    textAlign: 'center',
  },
  map: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    top: 100,
    right: 0,
  },
});

AppRegistry.registerComponent('MapDemo', () => MapDemo);
