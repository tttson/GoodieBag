import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
} from 'react-native';

export default class BackgroundImage extends Component {
  render() {
    const resizeMode = 'repeat';

    return (
      <Image
        style={{
          width: '100%',
          height: '100%',
          opacity: 0.3,
          flex: 1,
          zIndex: -1,
          resizeMode,
        }}
        source={require('../assets/images/bg.jpg')}
      />
    );
  }
}

// AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);
