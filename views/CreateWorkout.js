import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Button, ScrollView, Switch } from 'react-native';
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
        <ScrollView showsVerticalScrollIndicator={false}>

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

          {/* WEIGHT SWITCH */}
          <View style={[styles.sectionContainer, { flexDirection: 'row', alignItems: 'center' }]}>
            <Text style={{ fontSize: 17, fontWeight: '600' }}>Weights</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#40e0d0' }}
              value={weightsEnabled}
              onValueChange={setWeightsEnabled}
              style={{ marginLeft: 15 }}
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

          {setNumber > 0 && (
            <View style={styles.overlay}>
              {/* EMPTY SPACE */}
            </View>
          )}
        </ScrollView>

      </View>


      {setNumber > 0 && (
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.cancelButton}

            onPress={() => {
              console.log("CANCEL")
            }}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>

          <Pressable
            style={styles.addButton}
            onPress={() => {
              console.log("ADD")
            }}
          >
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
        </View>
      )}


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
  },
  buttonContainer: {
    flexDirection: 'row',
    // borderWidth: 1,
    borderRadius: 10,
    paddingBottom: 40,
    padding: 20,
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
    // Add any other styles you want for the button text
  },

  overlay: {
    marginBottom: 90
  }
});
