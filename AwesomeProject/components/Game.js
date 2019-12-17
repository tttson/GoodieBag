import React, { Component } from 'react';
import {
  Image,
  View,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';
import { DigitalText } from '../components/StyledText';
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
      <ImageBackground style={{alignItems: 'center', width: '100%', height: '100%'}} source={require('../assets/images/vending.png')}>

      <View style={{flex: 1, marginTop:50, flexDirection: 'row'}}>
      <View style={styles.container}></View>
      <DigitalText style={{marginTop:1, fontSize: 50}}>237</DigitalText>
            <View style={styles.container}>
              <Image style={styles.container1}
                source={require('../assets/images/candy3.png')}/>
              <Image style={styles.container2}
                source={require('../assets/images/candy1.png')}/>
              <Image style={styles.container3}
                source={require('../assets/images/candy1.png')}/>
            </View>
             <View style={styles.container}>
              <Image style={styles.container1}
                source={require('../assets/images/candy1.png')}/>
              <Image style={styles.container2}
                source={require('../assets/images/candy2.png')}/>
              <Image style={styles.container3}
                source={require('../assets/images/candy5.png')}/>
            </View>
            <View style={styles.container}>
              <Image style={styles.container1}
                source={require('../assets/images/candy5.png')}/>
              <Image style={styles.container2}
                source={require('../assets/images/candy1.png')}/>
              <Image style={styles.container3}
                source={require('../assets/images/candy2.png')}/>
            </View>
        </View>
      </ImageBackground>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-around",
  },
  container1: {
    flex: 1,
    marginTop: 100,
    marginBottom: 10,
    resizeMode: "contain",
    alignItems: "center",
    marginLeft: -30
  },
  container2: {
    flex: 1,
    marginTop: 30,
    marginBottom: 40,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "flex-start",
    // backgroundColor: 'skyblue',
    marginLeft: -30
  },
  container3: {
    flex: 1,
    resizeMode: "contain",
    marginBottom: 190,
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: 'steelblue',
    marginLeft: -30
  },

});
