import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './Pages/OrphanagesMap';

const { Navigator, Screen } = createStackNavigator();

export default function Routes(){
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Maps" component={OrphanagesMap} />
      </Navigator>
    </NavigationContainer>
  );
}