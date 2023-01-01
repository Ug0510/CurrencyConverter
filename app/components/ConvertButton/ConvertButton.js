import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ConvertButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};



export default ConvertButton;
