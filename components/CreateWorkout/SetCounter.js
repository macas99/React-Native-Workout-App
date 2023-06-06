import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';;
import { FontAwesome } from '@expo/vector-icons';

function SetCounter({ setNumber, setSetNumber, createSet, removeSet }) {

  const handleMinusPress = () => {

    if (setNumber <= 1) {
      return;
    }
    setSetNumber(setNumber - 1);
    removeSet();
  };

  const handlePlusPress = () => {
    if (setNumber >= 15) {
      return;
    }
    setSetNumber(setNumber + 1);
    createSet();
  };

  return (
    <View style={styles.setNumberView}>
      <FontAwesome name="minus-square" size={40} color="#40e0d0" onPress={handleMinusPress} />
      <Text style={styles.setInput}>{setNumber}</Text>
      <FontAwesome name="plus-square" size={40} color="#40e0d0" onPress={handlePlusPress} />
    </View>
  );
}

export default SetCounter;


const styles = StyleSheet.create({
  setNumberView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '55%'
  },
  setInput: {
    fontSize: 23,
    fontWeight: '700',
  },
});

