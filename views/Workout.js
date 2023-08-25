import { StyleSheet, View, Text, Pressable, ScrollView, Switch } from 'react-native';


function Workout({ navigation }) {

  return (
    <View style={styles.appContainer}>
      <Text>Hi</Text>
    </View>

  );
}

export default Workout;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
});
