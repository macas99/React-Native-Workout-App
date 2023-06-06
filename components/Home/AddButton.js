import { StyleSheet, Text, View, Pressable } from 'react-native';

function AddButton(props) {
  return (
    <View style={styles.addWorkoutContainer}>
      <Pressable onPress={() => props.navigation.navigate('CreateWorkout')}>
        <View style={styles.button}>
          <Text style={styles.text}>ADD</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default AddButton;

const styles = StyleSheet.create({

  addWorkoutContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 13,
    borderRadius: 20,
    backgroundColor: '#40e0d0',
    marginBottom: 7,
    marginLeft: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.3,
    color: 'white',
  }
});

