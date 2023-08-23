import { StyleSheet, Text, View } from 'react-native';

function WorkoutItem({ name, date }) {

  return (
    <View style={styles.listItem}>
      <Text style={styles.titleText}>{name}</Text>
      <Text style={styles.dateText}>{date}</Text>
    </View>
  );
}

export default WorkoutItem;

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    marginVertical: 2,
    borderRadius: 2,
    padding: 5
  },
  titleText: {
    fontSize: 17,
    fontWeight: 600,
  },
  dateText: {
    fontWeight: 400,
  }
});