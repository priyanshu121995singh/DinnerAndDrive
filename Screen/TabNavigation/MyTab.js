import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import Profile from './Profile';
import Notification from './Notification';
import Heart from './Heart';
import imagePath from '../Image';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{}}
      initialRouteName="Notification"
      activeColor="#3a3e45"
      inactiveColor="#3a3e45"
      barStyle={{backgroundColor: '#3a3e45'}}>
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome5
              name={'home'}
              color={focused ? '#35c9b3' : '#beb3b3'}
              size={25}
              style={{marginLeft: -10}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Heart"
        component={Heart}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome5
              name={'heart'}
              color={focused ? '#35c9b3' : '#beb3b3'}
              size={25}
              style={{marginLeft: -10}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome5
              name={'user-alt'}
              color={focused ? '#35c9b3' : '#beb3b3'}
              size={25}
              style={{marginLeft: -10}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;
