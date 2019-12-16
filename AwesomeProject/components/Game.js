import React, { Component } from 'react';
import {
  Image,
  View,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';
import { Icon } from 'react-native-elements'
import { PacificoText } from '../components/StyledText';
import TopBar from '../components/TopBar'

export default class Game extends Component {
  constructor (props){
    super(props)
    this.state = {
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>Hi this is the game view.</Text>
        <ImageBackground style={styles.image} source={require('../assets/images/vending.png')}>
        </ImageBackground>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 10,
    // color: 'white'
  },
  // text:{
  //   color:'white',
  //   fontSize: 18,
  //   textTransform: 'uppercase',
  //   marginBottom: 15,
  //   fontWeight: '800'
  // },
  // header: {
  //   fontSize: 30,
  //   textTransform: "uppercase",
  //   marginBottom: 5,
  //   marginTop: 5,
  //   color: 'white',
  //   fontWeight: '800'
  // },
  image: {
    width: '97%',
    height: '97%'
}
});
