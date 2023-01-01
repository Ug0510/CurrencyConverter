import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { View, Text, Keyboard, Animated, Platform, StyleSheet, LogBox } from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;

const Logo = ({ tintColor }) => {
  const [containerImageWidth, setContainerImageWidth] = useState(new Animated.Value(styles.$largeContainerSize));
  const [imageWidth, setImageWidth] = useState(new Animated.Value(styles.$largeImageSize));

  useEffect(() => {
    const name = Platform.OS === 'ios' ? 'Will' : 'Did';
    const keyboardDidShowListener = Keyboard.addListener(
      `keyboard${name}Show`,
      keyboardWillShow
    );
    const keyboardDidHideListener = Keyboard.addListener(
      `keyboard${name}Hide`,
      keyboardWillHide
    );
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const keyboardWillShow = () => {
    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  const keyboardWillHide = () => {
    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  const containerImageStyles = [
    styles.containerImage,
    { width: containerImageWidth, height: containerImageWidth },
  ];
  const imageStyles = [
    styles.logo,
    { width: imageWidth },
    tintColor ? { tintColor } : null,
  ];
  
  return (
    <View style={styles.container}>
      <Animated.View style={containerImageStyles}>
        <Animated.Image
          resizeMode="contain"
          style={[StyleSheet.absoluteFill, containerImageStyles]}
          source={require('./images/background.png')}
        />
        <Animated.Image
          resizeMode="contain"
          style={imageStyles}
          source={require('./images/logo.png')}
        />
      </Animated.View>
      <Text style={styles.text}>Currency Converter</Text>
    </View>
  );
  };
  
  Logo.propTypes = {
    tintColor: PropTypes.string,
  };
  
  export default Logo;
  