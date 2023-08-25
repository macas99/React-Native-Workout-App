import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageService {

  async storeWorkout(workout) {
    try {
      const storedWorkouts = await AsyncStorage.getItem('@workout_data');
      let workouts = [];
      if (storedWorkouts) {
        workouts = JSON.parse(storedWorkouts);
      }
      workouts.push(workout);
      await AsyncStorage.setItem('@workout_data', JSON.stringify(workouts));
      await this.createWorkoutItem(workout.date, workout.name);

    } catch (e) {
      console.error('Failed to save the data to the storage');
    }
  }

  async createWorkoutItem(creationDate, name) {
    let workoutLog = {
      creation: creationDate,
      history: []
    };
    console.log(workoutLog)
    await AsyncStorage.setItem('@' + name, JSON.stringify(workoutLog));
  }

  async getWorkoutInfo(workout) {
    try {
      const info = await AsyncStorage.getItem('@' + workout);
      if (info != null) {
        return JSON.parse(info);
      }
    } catch (error) {
      console.log(error);
    }
    return null;
  }


  async getWorkoutData() {
    try {
      const workoutData = await AsyncStorage.getItem('@workout_data');
      if (workoutData != null) {
        return JSON.parse(workoutData);
      }
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  clearAllData() {
    AsyncStorage.getAllKeys()
      .then(keys => AsyncStorage.multiRemove(keys))
      .then(() => alert('success'));
  }

}



export default new StorageService();