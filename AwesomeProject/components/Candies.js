/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import {
  Image,
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import { Icon } from 'react-native-elements'
import { PacificoText } from '../components/StyledText';
import TopBar from '../components/TopBar'

export default class Candies extends Component {
  constructor (props){
    super(props)
    this.state = {
    points: 0,
    quantity: 0,
    candies: [{
      name: 'Skittles',
      description: 'Taste the rainbow',
      quantity: 2,
      price: '$1.00',
      link: 'https://target.scene7.com/is/image/Target/GUEST_3d2a8073-36e6-4cec-8c8c-872639105820?wid=488&hei=488&fmt=pjpeg'
    }, {
      name: 'KitKat',
      description: 'Make the most of your break',
      quantity: 5,
      price: '$1.49',
      link: 'https://target.scene7.com/is/image/Target/GUEST_9766bfa7-3fcb-4f4c-9576-15e17ccc1044?wid=488&hei=488&fmt=pjpeg'
    }, {
      name: 'M&M\'s',
      description: 'Melts in your mouth, not in your hand',
      quantity: 4,
      price: '$1.49',
      link: 'http://www.ocsaccess.com/admin/clientfiles/ucsne/images/xlarge/mm%20choc.jpg'
    }, {
      name: 'Snickers',
      description: 'You\'re Not You When You\'re Hungry',
      quantity: 4,
      price: '$1.49',
      link: 'https://i.imgur.com/8HVrRoK.jpg?2'
    }, {
      name: 'Sour Patch Watermelon',
      description: 'First they\'re sour, then they\'re sweet',
      quantity: 4,
      price: '$1.75',
      link: 'https://i.imgur.com/v8D4AMQ.jpg?1'
    }, {
      name: 'Haribo Gummy Bears',
      description: 'Kids and Grown-ups love it so, the happy world of Haribo',
      quantity: 4,
      price: '$1.79',
      link: 'https://pics.drugstore.com/prodimg/413256/900.jpg'
    }]
  }
}

increaseQuantity = () => {
  this.setState(prevState => ({quantity: prevState.quantity + 1}))
}

decreaseQuantity = () => {
  this.setState(prevState => ({quantity: prevState.quantity - 1}))
}

  render () {
    const resizeMode = 'center';
    const increaseQuantity = this.increaseQuantity
    const decreaseQuantity = this.decreaseQuantity
    // console.log('hey', this.state.quantity)
    return (
      <ScrollView >
        <View>
        <TopBar quantity={this.state.quantity} points={this.state.points} />
        </View>
      {
        this.state.candies.map((candy) => {
          return (
          <View key={candy.name} style={styles.container}>
            <View style={styles.half1}>
                <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode
                }}
                source={{uri: `${candy.link}`}}
                />
            </View>
            <View style={styles.half2}>
            <View flexDirection="row" padding={10}>
            <View padding={10}>
            <Icon
              name="plus-circle"
              type="font-awesome"
              color="black"
              size={20}
              onPress={() => increaseQuantity()}
            />
            </View>
            <View padding={10}>
            <Icon
              name="minus-circle"
              type="font-awesome"
              color="black"
              size={20}
              onPress={() => decreaseQuantity()}
            />
            </View>
            </View>
              <View style={styles.half21}>
              <PacificoText><Text style={{fontSize: 20}}>{candy.name}</Text></PacificoText>
                <View style={styles.half22}>
                <Text>Price: {candy.price}</Text>
                <Text>Description: {candy.description}</Text>
                </View>
              </View>
            </View>
          </View>
          )})
      }
      </ScrollView>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    // marginTop: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },
  half1: {
    flex: 1,
  },
  half2: {
    flex: 2,
    flexDirection: 'row'
  },
  half21: {
    flex: 1
  },
  half22: {
    flex: 1
  }
});
