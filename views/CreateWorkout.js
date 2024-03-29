import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, ScrollView, Switch } from 'react-native';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { getFormattedDate } from '../utils/dateFormat';
import SetCounter from '../components/CreateWorkout/SetCounter';
import TitleInput from '../components/CreateWorkout/TitleInput';
import Set from '../components/CreateWorkout/Set';
import ActionButtons from '../components/CreateWorkout/ActionButtons';
import storageService from '../DAO/storage.service';

// CHECK OUT : Asset Caching Preloading

function CreateWorkout({ navigation }) {
  const [workoutName, setWorkoutName] = useState('');
  const [setNumber, setSetNumber] = useState(1);
  const [weightsEnabled, setWeightsEnabled] = useState(false);
  const [sets, setSets] = useState([{}]);

  useEffect(() => {
    if (!weightsEnabled) {
      const newSets = sets.map(set => {
        const { weight, ...rest } = set;
        return rest;
      });
      setSets(newSets);
    }
  }, [weightsEnabled]);

  const onSetChange = (index, field, value) => {
    const newSets = [...sets];
    newSets[index] = { ...newSets[index], [field]: value };
    setSets(newSets);
  };

  const createSet = () => {
    setSets(prevSets => [...prevSets, {}]);
  };

  const removeSet = () => {
    setSets(prevSets => prevSets.slice(0, -1));
  };

  const validateInput = (workout) => {
    console.log(workout)
    if (!workout.name.trim()) {
      alert("Please input a title.");
      return false
    }

    for (let set of workout.sets) {
      if (!set.reps || !set.reps.trim()) {
        alert("Please make sure each set has reps defined.");
        return false;
      }
    }

    for (let set of workout.sets) {
      if (!set.restMin && !set.restSec) {
        alert("Please make sure each set has a rest time defined.");
        return false;
      }
    }

    if (weightsEnabled) {
      for (let set of workout.sets) {
        if (!set.weight) {
          alert("Please make sure each set has a weight defined.");
          return false;
        }
      }
    }

    return true;
  }

  const saveWorkout = async () => {

    const formattedDate = getFormattedDate();

    const existingWorkouts = await storageService.getWorkoutData();
    if (existingWorkouts && existingWorkouts.some(workout => workout.name === workoutName)) {
      alert("A workout with this name already exists! Please choose a different name.");
      return;
    }

    const newWorkout = {
      name: workoutName,
      sets: [...sets],
      date: formattedDate,
    };

    if (!validateInput(newWorkout)) {
      return;
    }

    storageService.storeWorkout(newWorkout).then(() => navigation.navigate('Home'));
  }

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
        <ActionButtons
          navigateHome={() => navigation.navigate('Home')}
          addSets={saveWorkout} />
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
  overlay: {
    marginBottom: 110
  }
});
