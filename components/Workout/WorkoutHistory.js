import { StyleSheet, View, Text, FlatList } from 'react-native';

function WorkoutHistory({ history }) {
  if (!history || history.length === 0) {
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>Press + to log a workout</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={history}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={{ borderWidth: 1 }}>
          <Text>{item.date}</Text>
          <Text>{item.reps.join(' ')}</Text>
        </View>
      )}
    />
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