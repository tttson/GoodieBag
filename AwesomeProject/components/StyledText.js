import React from 'react';
import { Text } from 'react-native';

export function PacificoText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'pacifico' }]} />
  );
}
