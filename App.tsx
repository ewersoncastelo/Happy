import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import mapMaker from './src/images/map_marker.png'

export default function App() {
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        initialRegion={{
          latitude: -11.9341827,
          longitude: -61.9931026,
          longitudeDelta: 0.008,
          latitudeDelta: 0.008,
        }}
        provider={PROVIDER_GOOGLE}
      >
        <Marker 
          icon={mapMaker}
          coordinate={{
            latitude: -11.9341827,
            longitude: -61.9931026,
          }}
        >
          <Callout>
            <Text>Lar das Meninas</Text>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
