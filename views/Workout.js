import { StyleSheet, View, Text, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useEffect, useState, useRef } from 'react';
import storageService from '../DAO/storage.service';
import { formatDateToNewFormat } from '../utils/dateFormat';
import PopupMenu from '../components/Workout/PopupMenu';
import WorkoutInfo from '../components/Workout/WorkoutInfo';
import HistoryHeader from '../components/Workout/HistoryHeader';
import AddHistoryModal from '../components/Workout/AddHistoryModal';
import WorkoutHistory from '../components/Workout/WorkoutHistory';

function Workout({ route, navigation }) {
  const [workoutInfo, setWorkoutInfo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const hideModal = () => setModalVisible(false)
  const showModal = () => setModalVisible(true)

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
      <HistoryHeader showModal={showModal} />
      <AddHistoryModal modalVisible={modalVisible} hide={hideModal} sets={route.params.sets} />

      {workoutInfo ? (
        <WorkoutHistory history={workoutInfo.history} />
      ) : (
        <Text>Loading...</Text>
      )}

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
    fontSize: 28,
    fontWeight: '700',
  },
});
