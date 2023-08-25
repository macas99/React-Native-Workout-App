import { StyleSheet, View, Text, Pressable, ScrollView, Switch } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


function Workout({ route, navigation }) {

  return (
    <View style={styles.appContainer}>
      <View style={styles.topContainer}>
        <Pressable onPress={() => navigation.navigate('Home')} style={styles.backButton}>
          <FontAwesome5 name="chevron-left" size={24} color="black" />
        </Pressable>
        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>{route.params.name}</Text>
        </View>
        <Pressable onPress={() => navigation.navigate('Home')} style={styles.optionsButton}>
          <FontAwesome5 name="ellipsis-v" size={24} color="black" />
        </Pressable>
      </View>
    </View>

  );
}

export default Workout;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingTop: 60,
  },
  topContainer: {
    flexDirection: 'row',
  },
  backButton: {
    width: 40,
    paddingHorizontal: 10,
    height: 40,
    justifyContent: 'center',
  },
  optionsButton: {
    width: 40,
    paddingHorizontal: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 2,
    paddingRight: 60
  },
  titleText: {
    fontSize: 30,
    fontWeight: '700',
  },
});
