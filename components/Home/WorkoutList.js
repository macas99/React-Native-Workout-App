import { StyleSheet, View, Text, SectionList } from 'react-native';
import WorkoutItem from './WorkoutItem';

function WorkoutList(props) {
  if (props.workouts.length === 0) {
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>You don't have any workouts saved yet</Text>
        <Text style={styles.messageText}>Press ADD to create your first workout</Text>
      </View>
    );
  }

  return (
    <SectionList
      showsVerticalScrollIndicator={false}
      stickySectionHeadersEnabled={false}
      style={styles.flatList}
      sections={props.workouts}
      keyExtractor={(item, index) => item.id || index.toString()}
      renderItem={({ item }) => (
        <WorkoutItem
          name={item.name}
          date={item.date}
          sets={item.sets}
          navigation={props.navigation}
        />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.dateHeader}>{title}</Text>
      )}
      ListFooterComponent={<View style={{ height: 20 }} />}
    />
  );
}

// <Text style={styles.titleText}>{item.name}</Text>
// <Text style={styles.dateText}>{formatDateToNewFormat(item.date)}</Text>
export default WorkoutList;


const styles = StyleSheet.create({
  flatList: {
    height: '100%',
    // borderWidth: 1
  },
  workoutList: {
    marginTop: 20,
    borderRadius: 20,
  },
  messageContainer: {
    paddingBottom: 50,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageText: {
    color: '#ccc',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 17
  },
  dateHeader: {
    fontSize: 22,
    fontWeight: 600,
    marginVertical: 5
  },
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