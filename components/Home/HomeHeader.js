import { StyleSheet, Text, View } from 'react-native';

function HomeHeader() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Workouts</Text>
    </View>
  );
}

export default HomeHeader;

const styles = StyleSheet.create({
  titleContainer: {
    flex: 3,
    justifyContent: 'flex-end',
  },

  titleText: {
    fontSize: 40,
    fontWeight: '700'
  },
});

