import * as React from 'react';
import colors from 'tailwindcss/colors';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen, ProfileScreen, ScanScreen} from '../../screens';
import {HomeIcon, ProfileIcon, ScanIcon} from '../../assets/icon';
import {Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderRadius: 25,
          marginHorizontal: 10,
          marginBottom: 20,
          position: 'absolute',
          height: 55,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <View>
              <Text
                className={`${
                  focused ? 'text-green-500' : 'text-gray-500'
                } text-xs font-semibold`}>
                Home
              </Text>
            </View>
          ),
          tabBarIcon: ({focused}) => (
            <View>
              <HomeIcon
                width={20}
                height={20}
                color={focused ? colors.green[500] : colors.gray[500]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <View>
              <Text
                className={`${
                  focused ? 'text-green-500' : 'text-gray-500'
                } text-xs font-semibold`}>
                Scan
              </Text>
            </View>
          ),
          tabBarIcon: ({focused}) => (
            <View>
              <ScanIcon
                height={20}
                width={20}
                color={focused ? colors.green[500] : colors.gray[500]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <View>
              <Text
                className={`${
                  focused ? 'text-green-500' : 'text-gray-500'
                } text-xs font-semibold`}>
                Profile
              </Text>
            </View>
          ),
          tabBarIcon: ({focused}) => (
            <View>
              <ProfileIcon
                height={20}
                width={20}
                color={focused ? colors.green[500] : colors.gray[500]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
