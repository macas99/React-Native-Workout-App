import { useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';


function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  // const now = new Date(2023, 6, 16);
  const tenDaysAgo = new Date();
  tenDaysAgo.setDate(now.getDate() - 10);

  if (date.toDateString() === now.toDateString()) {
    return "Today";
  } else if (date > tenDaysAgo) {
    return "Last 10 days";
  } else if (date.getFullYear() === now.getFullYear()) {
    return date.toLocaleString('default', { month: 'long' });
  } else {
    return date.getFullYear().toString();
  }
}

function WorkoutList(props) {
  // props.workouts must be sorted by date
  let renderedDates = [];

  return (
    <View style={styles.workoutList}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={props.workouts}
        renderItem={(itemData) => {
          const lastItem = itemData.index === props.workouts.length - 1;
          const formattedDate = formatDate(itemData.item.date);
          const isDateRendered = renderedDates.includes(formattedDate);
          if (!isDateRendered) {
            renderedDates.push(formattedDate);
          }
          return (
            <View>
              {!isDateRendered && <Text style={styles.dateHeader}>{formattedDate}</Text>}
              <Text>{itemData.item.name} - {itemData.item.date}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

export default WorkoutList;


const styles = StyleSheet.create({
  workoutList: {
    marginHorizontal: 5,
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 20,
  },
});