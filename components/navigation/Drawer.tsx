import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {homeScreen} from '@/screens/homeScreen';
import {settingsScreen} from '@/screens/settingsScreen';

import TabTwoScreen from '@/app/(tabs)/elements'

const Drawer = createDrawerNavigator();

export function DrawerMenu() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="elementsTab" component={TabTwoScreen} />
        <Drawer.Screen name="Settings" component={settingsScreen} />
        {/* Add more screens as needed */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}