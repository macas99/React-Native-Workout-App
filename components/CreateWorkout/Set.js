import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';


function Set({ index, weightsEnabled, onChange }) {
  const [reps, setReps] = useState('');
  const [rest, setRest] = useState('');
  const [weight, setWeight] = useState('');

  return (
    <View style={styles.setItem}>

      <Text style={{ fontSize: 17, fontWeight: '800', marginBottom: 5 }}>Set {index + 1}</Text>

      {/* REP INPUT */}
      <View style={styles.inputSection}>
        <Text style={styles.label}>Reps</Text>
        <TextInput
          style={styles.input}
          value={reps}
          onChangeText={value => {
            setReps(value);
            onChange(index, 'reps', value);
          }}
          keyboardType="numeric"
        />
      </View>

      {/* REST TIME INPUT */}

      <Input
        label="Rest Time (min)"
        value={rest}
        onChangeText={value => {
          setRest(value);
          onChange(index, 'rest', value);
        }}
        keyboardType="numeric"
      />

      {weightsEnabled && (
        <Input
          label="Weight (kg)"
          value={weight}
          onChangeText={value => {
            setWeight(value);
            onChange(index, 'weight', value);
          }}
          keyboardType="numeric"
        />
      )}

    </View>
  );
}

export default Set;

const styles = StyleSheet.create({
  setItem: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 5
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginRight: 10,
    fontSize: 16
  },
  input: {
    borderBottomWidth: 1,
    width: 50
  },
});