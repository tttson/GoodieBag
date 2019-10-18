import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TopBar from '../components/TopBar'
import Candies from '../components/Candies'


export default function CatalogScreen () {
    return (
      <View>
        {/* <TopBar /> */}
        <Candies />
      </View>
    )
}

CatalogScreen.navigationOptions = {
  title: 'Catalog',
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   margin: 20,
   marginTop: 100,
   flexDirection: 'row',
   flexWrap: 'wrap',
  }
});
