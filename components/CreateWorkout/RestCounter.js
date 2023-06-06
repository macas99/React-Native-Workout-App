import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';;
import { FontAwesome } from '@expo/vector-icons';

function RestCounter({ defMin, setDefMin, defSec, setDefSec }) {

  const handleMinusPressMin = () => {
    if (defMin <= 0) {
      return;
    }
    setDefMin(defMin - 1);
  };

  const handlePlusPressMin = () => {
    if (defMin >= 10) {
      return;
    }
    setDefMin(defMin + 1);
  };

  const handleMinusPressSec = () => {
    if (defSec <= 0) {
      return;
    }
    setDefSec(defSec - 5);
  };

  const handlePlusPressSec = () => {
    if (defSec >= 55) {
      return;
    }
    setDefSec(defSec + 5);
  };

  return (
    <View>
      <View style={styles.setNumberView}>
        <FontAwesome name="minus-square" size={40} color="#40e0d0" onPress={handleMinusPressMin} />
        <Text style={styles.setInput}>{defMin < 10 ? `0${defMin}` : defMin} min</Text>
        <FontAwesome name="plus-square" size={40} color="#40e0d0" onPress={handlePlusPressMin} />
      </View>
      <View style={styles.setNumberView}>
        <FontAwesome name="minus-square" size={40} color="#40e0d0" onPress={handleMinusPressSec} />
        <Text style={styles.setInput}>{defSec < 10 ? `0${defSec}` : defSec} sec</Text>
        <FontAwesome name="plus-square" size={40} color="#40e0d0" onPress={handlePlusPressSec} />
      </View>
    </View>
  );
}

export default RestCounter;


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

