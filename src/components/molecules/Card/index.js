import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import React, {useState} from 'react';

const Card = ({userId, title, onPress}) => {
  const [scaleValue] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      style={styles.wrapCard}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <Animated.View
        style={[styles.wrapAnimeated, {transform: [{scale: scaleValue}]}]}>
        <Text>User id : {userId} </Text>
        <Text style={styles.buttonText}>title :{title}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  wrapCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginTop: 10,
  },
  wrapAnimeated: {
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});
