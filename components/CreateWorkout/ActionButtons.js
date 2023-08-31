import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

function ActionButtons({ navigateHome, addSets }) {

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.cancelButton}
        onPress={navigateHome}
      >
        <Text style={styles.buttonText}>Cancel</Text>
      </Pressable>

      <Pressable
        style={styles.addButton}
        onPress={addSets}

      >
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </View >
  );
}

export default ActionButtons;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    paddingBottom: 40,
    padding: 20,
    paddingTop: 30,
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    right: 15,
    left: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  addButton: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 8

  },
  cancelButton: {
    flex: 1,
    borderWidth: 1,
    marginRight: 30,
    backgroundColor: 'white',
    borderRadius: 8
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'black',
  },
});