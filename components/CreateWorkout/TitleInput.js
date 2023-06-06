import { StyleSheet, Text, View, TextInput } from 'react-native';

function TitleInput({ workoutName, setWorkoutName }) {
  return (
    <TextInput
      value={workoutName}
      onChangeText={(workoutName) => setWorkoutName(workoutName)}
      maxLength={25}
      placeholder={'Push-Ups/Curls/Squats'}
      style={styles.input}
    />
  );
}

export default TitleInput;

const styles = StyleSheet.create({
  input: {
    fontSize: 23,
    borderBottomWidth: 1,
    fontWeight: '700',
  },
});

