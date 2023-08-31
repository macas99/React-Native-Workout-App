import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { formatDateToNewFormat } from '../../utils/dateFormat';
import { formatTime } from '../../utils/dateFormat';

function WorkoutHistory({ history, deleteSession }) {

  const deleteAlert = (index) => {
    Alert.alert('Delete', 'Delete session log?', [
      {
        text: 'Cancel',
        onPress: () => { },
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: async () => {
          deleteSession(index)
        }
      },
    ]);
  }

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
      renderItem={({ item, index }) => (
        <View style={{ borderWidth: 1, borderTopWidth: index == 0 ? 1 : 0 }}>
          <TouchableOpacity onLongPress={() => deleteAlert(index)}>
            <Text>{formatDateToNewFormat(item.date)}@{formatTime(item.date)}</Text>
            <Text>Reps: {item.reps.join('-')}</Text>
          </TouchableOpacity>
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