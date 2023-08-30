import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function ModalButtons({ hide, logHistory }) {
  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity onPress={hide} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>CANCEL</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={logHistory} style={styles.buttonContainer}>
        <Text style={[styles.buttonText, styles.addText]}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ModalButtons;


const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 25,
    marginTop: 10
  },
  buttonContainer: {
    flex: 1,
    borderWidth: 1,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 13,
    borderRadius: 12,
    marginHorizontal: 10
  },
  buttonText: {
    fontSize: 15,
    color: 'black',
  },
  addText: {
    color: '#508EE3'
  },
});
