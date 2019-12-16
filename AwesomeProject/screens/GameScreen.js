import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Game from '../components/Game'

export default function GameScreen() {
  return (
    <View>
    <Game />
    </View>
  )
}

GameScreen.navigationOptions = {
  title: 'Earn Points',
};
