import { StyleSheet, View, Text, Modal, ScrollView } from 'react-native';
import { useState } from 'react';
import ModalButtons from './ModalButtons';
import { FontAwesome5 } from '@expo/vector-icons';
import ModalSetItem from './ModalSetItem';
import storageService from '../../DAO/storage.service';

function AddHistoryModal({ modalVisible, hide, sets, name, refreshInfo }) {
  const topMargin = sets.length <= 7 ? 400 : 200
  const [reps, setReps] = useState(sets.map(s => s.reps ? parseInt(s.reps) : 0));

  function onRepChange(newRep, index) {
    const newReps = [...reps];
    newReps[index] = newRep;
    setReps(newReps);
    console.log(reps)
  }

  const logHistory = async () => {
    try {
      const sessionDate = new Date().toISOString();
      const updateData = {
        date: sessionDate,
        reps: reps
      };
      console.log('SAVING THIS', updateData)
      await storageService.updateWorkoutItem(name, updateData);
      setReps(sets.map(s => s.reps ? parseInt(s.reps) : 0))
      refreshInfo();
      hide();
    } catch (error) {
      console.log('Error logging workout history', error);
    }
  };

  return (
    <Modal visible={modalVisible} animationType='fade' transparent>
      <View style={styles.modalContainer}>

        <View style={[styles.content, { marginTop: topMargin }]}>
          <Text style={styles.title}>Add Workout History</Text>

          <View style={styles.inputSection}>
            <ScrollView>
              <Text>Input how many reps you managed to to each set this workout.</Text>
              <View style={styles.setInput}>

                {
                  reps.map((r, index) => (
                    <ModalSetItem
                      key={index}
                      index={index}
                      reps={r}
                      onRepChange={onRepChange}
                      isFirst={index == 0}
                      isLast={index + 1 == sets.length} />
                  ))
                }
              </View>
            </ScrollView>
          </View>

          <ModalButtons hide={hide} logHistory={logHistory} />

        </View>

      </View>

    </Modal >
  );
}

export default AddHistoryModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#ccc',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    marginTop: 50,
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    opacity: 100
  },
  title: {
    fontSize: 20,
    fontWeight: '600'
  },
  inputSection: {
    // borderWidth: 1,
    flex: 1,
  },
  setInput: {
    marginTop: 20,
    marginBottom: 20
  }
});

