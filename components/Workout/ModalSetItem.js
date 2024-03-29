import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

function ModalSetItem({ index, reps, onRepChange, isFirst, isLast }) {
  const [repititions, setRepititions] = useState(reps)

  const handleMinusPress = () => {
    if (repititions <= 0) {
      return;
    }
    const newReps = repititions - 1;
    setRepititions(newReps);
    onRepChange(newReps, index);
  };

  const handlePlusPress = () => {
    if (repititions >= 99) {
      return;
    }
    const newReps = repititions + 1;
    setRepititions(newReps);
    onRepChange(newReps, index);
  };

  return (
    <View style={[
      styles.setItem,
      {
        borderTopLeftRadius: isFirst ? 10 : 0,
        borderTopRightRadius: isFirst ? 10 : 0,
        borderBottomLeftRadius: isLast ? 10 : 0,
        borderBottomRightRadius: isLast ? 10 : 0,
        borderTopWidth: isFirst ? 1 : 0
      }]}>

      <View style={styles.setNumber}>
        <Text>{index + 1}</Text>
      </View>

      <TouchableOpacity style={styles.icons} onPress={handleMinusPress}>
        <FontAwesome5 name="minus" size={27} color="white" />
      </TouchableOpacity>

      <View style={styles.repNumber}>
        <Text style={styles.repNumberText}>{repititions}</Text>
      </View>

      <TouchableOpacity style={[
        styles.icons,
        styles.plusIcon,
        {
          borderTopRightRadius: isFirst ? 10 : 0,
          borderBottomRightRadius: isLast ? 10 : 0,
        }]} onPress={handlePlusPress}>
        <FontAwesome5 name="plus" size={27} color="white" />
      </TouchableOpacity>

    </View>
  );
}

export default ModalSetItem;


const styles = StyleSheet.create({
  setItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 50
  },
  setNumber: {
    alignItems: 'center',
    padding: 5,
    width: 30,
  },
  repNumber: {
    alignItems: 'center',
    padding: 5,
    marginHorizontal: 10,
    width: 40,
  },
  icons: {
    alignItems: 'center',
    backgroundColor: '#40e0d0',
    padding: 5,
    flex: 1
  },
  repNumberText: {
    fontSize: 20,
    fontWeight: '700'
  },
});


