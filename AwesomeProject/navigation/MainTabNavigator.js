import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CatalogScreen from '../screens/CatalogScreen';
import GameScreen from '../screens/GameScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'home'
      }
    />
  ),
};

HomeStack.path = '';

const CatalogStack = createStackNavigator(
  {
    Catalog: CatalogScreen,
  },
  config
);

CatalogStack.navigationOptions = {
  tabBarLabel: 'Catalog',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-heart' : 'heart'} />
  ),
};

CatalogStack.path = '';

const GameStack = createStackNavigator(
  {
    Game: GameScreen,
  },
  config
);

GameStack.navigationOptions = {
  tabBarLabel: 'Earn Points',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-star' : 'star'} />
  ),
};

GameStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  CatalogStack,
  GameStack,
});

tabNavigator.path = '';

export default tabNavigator;
