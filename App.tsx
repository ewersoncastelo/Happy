import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import mapMaker from './src/images/map_marker.png'

import { Feather } from '@expo/vector-icons';

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

      <View style={styles.footer}>
        <Text style={styles.footerText}>Dois Orfanatos encontrados</Text>

        <TouchableOpacity style={styles.createOrphanageButton} onPress={()=>{}}>
          <Feather name='plus' size={20} color='#FFF'/>
        </TouchableOpacity>
      </View>
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
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#fFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    // For Android Shadow
    elevation: 3,

    // For iOS Shadow
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },

  footerText: {
    color: '#8fa7b3',
  },

  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
