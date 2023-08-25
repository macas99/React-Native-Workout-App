import { StatusBar } from 'expo-status-bar';
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';;
import HomeHeader from '../components/Home/HomeHeader';
import AddButton from '../components/Home/AddButton';
import storageService from '../DAO/storage.service';
import WorkoutList from '../components/Home/WorkoutList';


function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  // const now = new Date(2023, 6, 16);
  const tenDaysAgo = new Date();
  tenDaysAgo.setDate(now.getDate() - 10);

  if (date.toDateString() === now.toDateString()) {
    return "Today";
  } else if (date > tenDaysAgo) {
    return "Last 10 days";
  } else if (date.getFullYear() === now.getFullYear()) {
    return date.toLocaleString('default', { month: 'long' });
  } else {
    return date.getFullYear().toString();
  }
}

function sectionWorkouts(workouts) {
  let sections = [];

  workouts.forEach(workout => {
    const formattedDate = formatDate(workout.date);
    let section = sections.find(sec => sec.title === formattedDate);
    if (!section) {
      section = { title: formattedDate, data: [] };
      sections.push(section);
    }
    section.data.push(workout);
  });

  return sections;
}

function Home({ navigation }) {
  const [workouts, setWorkouts] = useState([]);

  useFocusEffect(
    useCallback(() => {
      storageService.getWorkoutData().then(workoutData => {
        // console.log(workoutData);
        if (workoutData && workoutData.length > 0) {
          workoutData.sort((a, b) => new Date(b.date) - new Date(a.date));
          const sectionedData = sectionWorkouts(workoutData);
          setWorkouts(sectionedData);
        } else {
          console.log("No workouts found");
        }
      });
    }, [])
  );


  return (
    <View style={styles.appContainer}>
      <View style={styles.topContainer}>
        <HomeHeader />
        <AddButton navigation={navigation} />
      </View>

      <View style={styles.bottomContainer}>
        <WorkoutList workouts={workouts} navigation={navigation} />
      </View>
    </View>


  );
}

export default Home;


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  bottomContainer: {
    flex: 6,
    paddingHorizontal: 10,
    // borderWidth: 1
  },

});

