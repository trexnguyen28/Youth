import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FeedNavigator} from './FeedNavigator';
import {MenuNaivgator} from './MenuNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';

Ionicons.loadFont();

const IconOutlineMap: Record<string, string> = {
  Home: 'home-outline',
  Friend: 'people-outline',
  Watch: 'play-circle-outline',
  Notification: 'notifications-outline',
  Menu: 'menu-outline',
};

const IconSharpMap: Record<string, string> = {
  Home: 'home-sharp',
  Friend: 'people-sharp',
  Watch: 'play-circle-sharp',
  Notification: 'notifications-sharp',
  Menu: 'menu-sharp',
};

const BottomTabs = createBottomTabNavigator();

export const RootNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const iconSet = focused ? IconSharpMap : IconOutlineMap;

          return (
            <Ionicons name={iconSet[route.name]} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#006AFF',
        inactiveTintColor: 'gray',
      }}>
      <BottomTabs.Screen name="Home" component={FeedNavigator} />
      <BottomTabs.Screen name="Friend" component={MenuNaivgator} />
      <BottomTabs.Screen name="Watch" component={MenuNaivgator} />
      <BottomTabs.Screen name="Notification" component={MenuNaivgator} />
      <BottomTabs.Screen name="Menu" component={MenuNaivgator} />
    </BottomTabs.Navigator>
  );
};
