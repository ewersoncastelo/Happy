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
          calloutAnchor={{
            x: 2.4,
            y: 0.2,
          }}
        >
          <Callout tooltip={true} onPress={()=>{}}>
            <View style={styles.calloutView}>
              <Text style={styles.calloutText}>Lar das Meninas</Text>
            </View>
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
  },

  calloutView:{
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },

  calloutText: {
    color: '#0089a5',
    fontSize: 14,
  }
});
