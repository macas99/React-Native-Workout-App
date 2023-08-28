import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

function HistoryHeader() {

  return (
    <View style={styles.historyHeader}>
      <View style={{ flex: 1, paddingVertical: 8 }}>
        <Text style={styles.historyHeaderTitle}>Workout History</Text>
      </View>

      <View style={{ paddingVertical: 8 }}>
        <TouchableOpacity>
          <FontAwesome5 name="plus-square" size={35} solid />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HistoryHeader;

const styles = StyleSheet.create({
  historyHeader: {
    marginTop: 15,
    paddingHorizontal: 5,
    flexDirection: 'row'
  },
  historyHeaderTitle: {
    fontSize: 25,
    fontWeight: '600'
  }
});

