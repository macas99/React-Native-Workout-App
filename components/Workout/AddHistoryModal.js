import { StyleSheet, View, Text, Modal, Pressable, TouchableWithoutFeedback } from 'react-native';

function AddHistoryModal({ modalVisible, hide }) {

  return (
    <Modal visible={modalVisible} animationType='fade' transparent>
      <TouchableWithoutFeedback onPress={hide}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>

            <View style={styles.content}>
              <Text>Modal</Text>
            </View>

          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
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
    marginTop: 100,
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    opacity: 100
  }
});

