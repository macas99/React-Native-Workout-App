import { StyleSheet, Text, View, Pressable } from 'react-native';
import { formatDateToNewFormat } from '../../utils/dateFormat';

function WorkoutItem({ name, date, sets, navigation }) {

  return (
    <Pressable onPress={() => navigation.navigate('Workout', { name: name, sets: sets })}>
      < View style={styles.listItem}>
        <Text style={styles.titleText}>{name}</Text>
        <Text style={styles.dateText}>{formatDateToNewFormat(date)}</Text>
      </View>
    </Pressable >
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