import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import TeacherList from '../pages/TeacherList/index';
import Favorites from '../pages/Favorites';
const { Navigator, Screen } = createBottomTabNavigator();

export default function StudyTabs() {

  Icon.loadFont();
  return (
    <Navigator tabBarOptions={{
      style: {
        elevation: 0,
        shadowOpacity: 0,
        height: 64,
      },
      tabStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      iconStyle: {
        flex: 0,
        width: 20,
        height: 20,

      },
      labelStyle: {
        fontSize: 13,
        marginLeft: 16
      },
      inactiveBackgroundColor: '#fafafc',
      activeBackgroundColor: '#ebebf5',
      inactiveTintColor: '#c1bccc',
      activeTintColor: '#32264d'
    }}>
      <Screen
        name="TeachetList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size,focused }) => {
            return (
              <Icon name="ios-easel" size={size} color={focused ?'#8257e5' : color} />
            )
          }
        }}

      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size,focused }) => {
            return (
              <Icon name="ios-heart" size={size}  color={focused ?'#8257e5' : color}  />
            )
          }
        }}

      />
      
    </Navigator>
  )
}
