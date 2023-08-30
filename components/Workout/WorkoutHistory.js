import { StyleSheet, View, Text, SectionList } from 'react-native';

function WorkoutHistory({ history }) {
  if (!history || history.length === 0) {
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>Press + to log a workout</Text>
      </View>
    );
  }

  return (
    <View>
      {
        history.map((r, index) => (
          <View key={index}>
            <Text>{r.reps.join(' ')}</Text>
          </View>
        ))
      }
    </View>
  );
}

export default WorkoutHistory;


const styles = StyleSheet.create({
  messageContainer: {
    paddingBottom: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageText: {
    color: '#ccc',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 17
  },
});