import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Text, Pressable, TextInput, ScrollView, Switch } from 'react-native';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import SetCounter from '../components/CreateWorkout/SetCounter';
import TitleInput from '../components/CreateWorkout/TitleInput';
import Set from '../components/CreateWorkout/Set';
import { Input } from 'react-native-elements';

// CHECK OUT : Asset Caching Preloading

function CreateWorkout({ navigation }) {
  const [workoutName, setWorkoutName] = useState('');
  const [setNumber, setSetNumber] = useState(0);
  const [weightsEnabled, setWeightsEnabled] = useState(false);
  const [sets, setSets] = useState([]);

  const onSetChange = (index, field, value) => {
    const newSets = [...sets];
    newSets[index] = { ...newSets[index], [field]: value };
    setSets(newSets);
  };

  const createSet = () => {
    const num = parseInt(setNumber + 1);
    const newSets = new Array(num).fill({});
    setSets(newSets);
  };

  const removeSet = () => {
    const num = parseInt(setNumber - 1);
    const newSets = new Array(num).fill({});
    setSets(newSets);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.appContainer}
    >
      {/* BACK BUTTON + HEADER */}
      <View style={styles.topContainer}>
        <Pressable onPress={() => navigation.navigate('Home')} style={styles.backButton}>
          <FontAwesome5 name="chevron-left" size={24} color="black" />
        </Pressable>
        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>Add Workout</Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <ScrollView>
          {/* TITLE INPUT */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>Title</Text>
            <TitleInput workoutName={workoutName} setWorkoutName={setWorkoutName} />
          </View>
          {/* SET NUMBER INPUT */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>Number of Sets</Text>
            <SetCounter setNumber={setNumber} setSetNumber={setSetNumber} createSet={createSet} removeSet={removeSet} />
          </View>
          {/* WEIGHT TOGGLE */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Weights</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={weightsEnabled ? '#f5dd4b' : '#f4f3f4'}
              value={weightsEnabled}
              onValueChange={setWeightsEnabled}
            />
          </View>
          {/* SETS */}
          {sets.map((set, index) => (
            <Set
              key={index}
              index={index}
              weightsEnabled={weightsEnabled}
              onChange={onSetChange}
            />
          ))}

        </ScrollView>
      </View>

    </KeyboardAvoidingView>

  );
}

export default CreateWorkout;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingTop: 60,
  },
  backButton: {
    width: 40,
    paddingHorizontal: 10,
    height: 40,
    justifyContent: 'center',
  },
  topContainer: {
    flexDirection: 'row',
  },
  bottomContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  sectionContainer: {
    marginBottom: 20
  },
  headerContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 2
  },
  titleText: {
    fontSize: 30,
    fontWeight: '700',
  },
  sectionHeader: {
    fontSize: 17,
    fontWeight: '800',
  },
  messageText: {
    color: '#ccc',
    fontWeight: '500',
    fontSize: 16
  }
});
