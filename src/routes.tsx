import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './Pages/OrphanagesMap';
import OrphanagesDetail from './Pages/OrphanagesDetail';

const { Navigator, Screen } = createStackNavigator();

export default function Routes(){
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
        <Screen name="OrphanagesDetail" component={OrphanagesDetail} options={{headerShown:true}}/>
      </Navigator>
    </NavigationContainer>
  );
}