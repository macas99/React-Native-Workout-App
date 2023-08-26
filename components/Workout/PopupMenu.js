import { StyleSheet, View, Text, Pressable, TouchableOpacity, Animated, Easing, Modal, SafeAreaView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState, useRef } from 'react';


function PopupMenu(props) {
  const [visible, setVisible] = useState(false);
  const scale = useRef(new Animated.Value(0)).current;

  function resizeBox(to) {
    to == 1 && setVisible(true);
    Animated.timing(scale, {
      toValue: to,
      useNativeDriver: true,
      duration: 100,
      easing: Easing.linear,
    }).start(() => to == 0 && setVisible(false))
  }

  return (
    <View>
      <TouchableOpacity onPress={() => resizeBox(1)} style={styles.optionsButton}>
        <FontAwesome5 name="ellipsis-v" size={24} color="black" />
      </TouchableOpacity>

      <Modal transparent visible={visible}>
        <SafeAreaView style={{ flex: 1 }} onTouchStart={() => resizeBox(0)}>
          <Animated.View style={[
            styles.popup,
            { opacity: scale.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }) },
            {
              transform: [{ scale }]
            }
          ]}>

            <TouchableOpacity style={styles.delete} onPress={() => alert('delete')}>
              <Text style={styles.text}>Delete</Text>
              <FontAwesome5 name='trash' size={20} color="red" style={{ marginLeft: 10 }} />
            </TouchableOpacity>

          </Animated.View>
        </SafeAreaView>
      </Modal>
    </View>
  );
}

export default PopupMenu;

const styles = StyleSheet.create({
  optionsButton: {
    width: 40,
    paddingHorizontal: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
    // borderWidth: 1
  },
  popup: {
    borderRadius: 5,
    borderColor: '#333',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    position: 'absolute',
    top: 95,
    right: 25
  },
  delete: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
  },
  text: {
    fontSize: 17,
    fontWeight: '600'
  }
});

