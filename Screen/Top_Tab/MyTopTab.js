import React from 'react';
import {View,Text} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GoingHeres from './GoingHere';
import IamHere from './ImHere';

const TopTab = createMaterialTopTabNavigator();

export default function MyTopTabs() {
  return (

   
    <TopTab.Navigator initialRouteName='IwentHere'  screenOptions={{headerShown:false}}   tabBarOptions={{
      style:{
        backgroundColor:"white",
        elevation:0
      },
      activeTintColor: 'black',
     
      inactiveTintColor: 'black',
      indicatorStyle: { backgroundColor: '#35b09f' ,height:5,borderRadius:5,marginRight:90},
      pressOpacity: 1,
    }}>
      
      <TopTab.Screen   name="Going Here" component={GoingHeres} />
      <TopTab.Screen name="I am Here" component={IamHere} />
    </TopTab.Navigator>

  );
}