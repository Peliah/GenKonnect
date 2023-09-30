import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const BottomSheetModal = ({ isVisible, onClose, children }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.modal}
      backdropOpacity={0.5}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      useNativeDriver
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Bottom Sheet</Text>
        </View>
        <View style={styles.content}>{children}</View>
        {/* <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity> */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
    height: '30%', // Adjust the height as needed
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  closeButton: {
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ff6347', // Red color for the close button
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BottomSheetModal;
