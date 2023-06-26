import { useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

function WorkoutList(props) {

  return (
    <View style={styles.workoutList}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={props.workouts}
        renderItem={(itemData) => {
          const lastItem = itemData.index === props.workouts.length - 1;
          return (
            <View>
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