import React, { useState } from 'react';
import { View, ScrollView, TextInput, Button, Switch } from 'react-native';
import { Input, Text } from 'react-native-elements';

const Set = ({ index, weightsEnabled, onChange }) => {
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
};

const CreateWorkout = ({ navigation }) => {
  const [exerciseName, setExerciseName] = useState('');
  const [numOfSets, setNumOfSets] = useState('');
  const [weightsEnabled, setWeightsEnabled] = useState(false);
  const [sets, setSets] = useState([]);

  const onSetChange = (index, field, value) => {
    const newSets = [...sets];
    newSets[index] = { ...newSets[index], [field]: value };
    setSets(newSets);
  };

  const createSets = () => {
    const num = parseInt(numOfSets);
    const newSets = new Array(num).fill({});
    setSets(newSets);
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Input
        label="Exercise Name"
        value={exerciseName}
        onChangeText={setExerciseName}
      />
      <Input
        label="Number of Sets"
        value={numOfSets}
        onChangeText={value => {
          setNumOfSets(value);
          if (!isNaN(value)) createSets();
        }}
        keyboardType="numeric"
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Weights</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={weightsEnabled ? '#f5dd4b' : '#f4f3f4'}
          value={weightsEnabled}
          onValueChange={setWeightsEnabled}
        />
      </View>
      {sets.map((set, index) => (
        <Set
          key={index}
          index={index}
          weightsEnabled={weightsEnabled}
          onChange={onSetChange}
        />
      ))}
      <Button title="Submit Workout" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
};

export default CreateWorkout;
