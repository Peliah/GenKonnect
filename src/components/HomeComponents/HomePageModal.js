import React, { useState } from 'react';
import { View, Text, Modal, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const AutoSuggestModal = ({ isVisible, onClose, data }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // Function to filter data based on the search text
  const filterData = () => {
    const filtered = data.filter(item => {
      // Change 'item.name' to the property you want to search in
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredData(filtered);
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.header}>Search for Something</Text>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={text => setSearchText(text)}
          value={searchText}
          onEndEditing={filterData}
        />
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => console.log("Hello")}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
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

export default AutoSuggestModal;
