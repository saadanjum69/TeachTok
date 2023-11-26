import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/home/home'
import globalTheme from '../Theme/global'
import Discover from '../screens/discover/discover';
import Activity from '../screens/activity/activity';
import Bookmarks from '../screens/bookmarks/bookmarks';
import Profile from '../screens/profile/profile';

const BottomTab = createBottomTabNavigator();

const BarIcon = (
  route: RouteProp<ParamListBase, string>,
  focused: boolean,
) => {
  let backgroundColor = focused ? globalTheme.colors.white : globalTheme.colors.gray

  const iconName = {
    Home: 'home',
    Discover: 'apple-safari',
    Activity: 'clock',
    Bookmarks: 'bookmark',
    Profile: 'account-circle',
  }[route.name];

  return (
    <Icon
      size={25}
      name={iconName || 'map-marker-question'}
      color={backgroundColor}
    />
  );
};

const BarLabel = (
  route: RouteProp<ParamListBase, string>,
  focused: boolean,
) => {
  let color = focused ? globalTheme.colors.white : globalTheme.colors.gray
  return (
    <Text
      style={{
        color: color,
        paddingBottom: 12,
      }}>
      {route.name}
    </Text>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => BarIcon(route, focused),
          tabBarLabel: ({ focused }) => BarLabel(route, focused),
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            paddingBottom: 0,
            paddingTop: 6,
            height: 65,
            backgroundColor: globalTheme.colors.black,
            borderColor: globalTheme.colors.black,
            border: 'none',
            borderTopWidth: 0
          },
          
        })}>
        <BottomTab.Screen name="Home" component={Home} options={{ headerShown: false }}  />
        <BottomTab.Screen name="Discover" component={Discover} options={{ headerShown: false }} />
        <BottomTab.Screen name="Activity" component={Activity} options={{ headerShown: false }} />
        <BottomTab.Screen name="Bookmarks" component={Bookmarks} options={{ headerShown: false }} />
        <BottomTab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
