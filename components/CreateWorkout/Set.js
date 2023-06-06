import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';


function Set({ index, weightsEnabled, onChange }) {
  const [reps, setReps] = useState('');
  const [rest, setRest] = useState('');
  const [weight, setWeight] = useState('');

  return (
    <View style={{ marginBottom: 20 }}>
      <Text h4>Set {index + 1}</Text>
      <Input
        label="Reps"
        value={reps}
        onChangeText={value => {
          setReps(value);
          onChange(index, 'reps', value);
        }}
        keyboardType="numeric"
      />
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
