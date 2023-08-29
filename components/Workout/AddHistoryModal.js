import { StyleSheet, View, Text, Modal, ScrollView } from 'react-native';
import ModalButtons from './ModalButtons';
import { FontAwesome5 } from '@expo/vector-icons';
import ModalSetItem from './ModalSetItem';

function AddHistoryModal({ modalVisible, hide, sets }) {
  const topMargin = sets.length <= 7 ? 400 : 200

  console.log(sets)
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
                  sets.map((set, index) => (
                    <ModalSetItem
                      key={index}
                      index={index}
                      set={set}
                      isFirst={index == 0}
                      isLast={index + 1 == sets.length} />
                  ))
                }
              </View>
            </ScrollView>
          </View>

          <ModalButtons hide={hide} />

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

