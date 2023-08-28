import { StyleSheet, View, Text, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import storageService from '../DAO/storage.service';
import { formatDateToNewFormat } from '../utils/dateFormat';
import PopupMenu from '../components/Workout/PopupMenu';
import WorkoutInfo from '../components/Workout/WorkoutInfo';

function Workout({ route, navigation }) {
  const [workoutInfo, setWorkoutInfo] = useState(null);

  console.log(route.params.sets)
  const getWorkoutInfo = async () => {
    try {
      const info = await storageService.getWorkoutInfo(route.params.name);
      setWorkoutInfo(info);
    } catch (error) {
      console.log("No workouts found");
    }
  };

  useEffect(() => {
    getWorkoutInfo();
  }, []);

  return (
    <View style={styles.appContainer}>
      <View style={styles.topContainer}>
        <Pressable onPress={() => navigation.navigate('Home')} style={styles.backButton}>
          <FontAwesome5 name="chevron-left" size={24} color="black" />
        </Pressable>
        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>{route.params.name}</Text>
        </View>
        <PopupMenu name={route.params.name} navigation={navigation} />
      </View>

      {workoutInfo ? (
        <Text>Created: {formatDateToNewFormat(workoutInfo.creation)}</Text>
      ) : (
        <Text>Created: Loading...</Text>
      )}

      <WorkoutInfo sets={route.params.sets} />
    </View>
  );
}

export default Workout;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingTop: 60,
  },
  topContainer: {
    flexDirection: 'row',
  },
  backButton: {
    width: 40,
    paddingHorizontal: 10,
    height: 40,
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 2,
    paddingRight: 60
  },
  titleText: {
    fontSize: 30,
    fontWeight: '700',
  },
});
