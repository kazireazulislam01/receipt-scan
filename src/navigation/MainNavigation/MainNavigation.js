import * as React from 'react';
import colors from 'tailwindcss/colors';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen, ProfileScreen, ScanScreen} from '../../screens';
import {HomeIcon, ProfileIcon, ScanIcon} from '../../assets/icon';
import {View} from 'react-native';
import {Text} from 'react-native-svg';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <HomeIcon
                height={20}
                width={20}
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
