import React, {Component} from 'react';
import { View, Text, Link } from 'react-native';
import { PacificoText } from '../components/StyledText';
import { Icon } from 'react-native-elements'
// import Cart from '../components/Cart'
// import Candies from '../components/Candies'

const TopBar = (props) =>  {
  return (
    <View style={styles.container}>
        <View style={styles.linkText}>
          <PacificoText><Text style={{fontSize: 45, color: 'white'}}>Goodie Bag</Text></PacificoText>
        </View>
        <View style={{flexDirection: 'column'}}>
            <View style={styles.linkText2}>
            <Icon name="star" type="font-awesome" color='white' /><PacificoText><Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}> {props.points} Points</Text></PacificoText>
            </View>
            <View style={styles.linkText2}>
            <Icon name='shopping-basket' type='font-awesome' color='white' /><PacificoText><Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}> {props.quantity} Items</Text></PacificoText>
            </View>
        </View>
    </View>
  );
}
export default TopBar

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    backgroundColor: 'pink'
  },
  linkText: {
    flex: 3,
    justifyContent: 'flex-start',
    // flexDirection: 'row',
    alignItems: 'center',
    marginRight: 50,

  },
  linkText2: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
    // marginLeft: 50,
    // flexWrap: 'wrap',
  },
  container2: {
    flex: 4000,
    // height: 100
  }
}

