import React from 'react';
import { View, Text, Button } from 'react-native';
import { DrawerParamList } from '@/types/types'
import { DrawerNavigationProp } from '@react-navigation/drawer';


type HomeScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};


export function homeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}
