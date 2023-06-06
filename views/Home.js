import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Text, Button, Pressable } from 'react-native';;
import HomeHeader from '../components/Home/HomeHeader';
import AddButton from '../components/Home/AddButton';

function Home({ navigation }) {
  return (
    <View style={styles.appContainer}>
      <View style={styles.topContainer}>
        <HomeHeader />
        <AddButton navigation={navigation} />
      </View>

      <View style={styles.bottomContainer}>
        <Text>This is Home.js!</Text>
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
  },

});

