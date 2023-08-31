import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFormattedDate } from '../utils/dateFormat';

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


  async deleteStoredWorkout(targetWorkoutName) {
    try {
      const storedWorkouts = await AsyncStorage.getItem('@workout_data');
      if (storedWorkouts) {
        let workouts = JSON.parse(storedWorkouts);
        const index = workouts.findIndex(workout => workout.name === targetWorkoutName);

        if (index !== -1) {
          workouts.splice(index, 1);
          await AsyncStorage.setItem('@workout_data', JSON.stringify(workouts));
          await this.deleteWorkoutItem(targetWorkoutName);
        } else {
          console.log(`Workout not found ${targetWorkoutName}`);
        }
      }
    } catch (e) {
      console.error('Error deleting workout', e);
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

  async updateWorkoutItem(workout, log) {
    try {
      const saved = await AsyncStorage.getItem('@' + workout);
      if (saved === null) {
        return;
      }
      let workoutLog = JSON.parse(saved);
      workoutLog.history.push(log);
      await AsyncStorage.setItem('@' + workout, JSON.stringify(workoutLog));
      await this.updateWorkoutDate(workout)
    } catch (error) {
      console.log('Error updating workout item:', error);
    }
  }

  async updateWorkoutDate(workoutName) {
    const formattedDate = getFormattedDate()

    try {
      const workoutDataStr = await AsyncStorage.getItem('@workout_data');
      if (workoutDataStr !== null) {
        const workoutData = JSON.parse(workoutDataStr);
        const workoutIndex = workoutData.findIndex(w => w.name === workoutName);
        if (workoutIndex !== -1) {
          workoutData[workoutIndex].date = formattedDate;
          await AsyncStorage.setItem('@workout_data', JSON.stringify(workoutData));
        } else {
          console.log("Workout not found");
        }
      }
    } catch (error) {
      console.log(error);
    }
    return null;
  }


  async updateHistory(workout, history) {
    try {
      const saved = await AsyncStorage.getItem('@' + workout);
      if (saved === null) {
        return;
      }
      let workoutLog = JSON.parse(saved);
      workoutLog.history = history;
      await AsyncStorage.setItem('@' + workout, JSON.stringify(workoutLog));
    } catch (error) {
      console.log('Error updating history:', error);
    }
  }

  async deleteWorkoutItem(name) {
    try {
      await AsyncStorage.removeItem('@' + name);
    } catch (error) {
      console.log(`Error deleting workout item ${error}`);
    }
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