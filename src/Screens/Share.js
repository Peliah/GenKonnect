import React, { useEffect, useState } from 'react';
import {View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { BackHandler } from 'react-native';

const Share = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const data = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grapes'];

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Implement your suggestion logic here based on the query
    // For example, filter data based on the query
    const filteredData = data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filteredData);
  };

  const handleSelectItem = (item) => {
    // Handle the selected suggestion here, e.g., navigate to a details screen
    console.log('Selected Item:', item);
    setSearchQuery('');
    setSuggestions([]); // Clear suggestions after selection
  };
  useEffect(() => {
    const backAction = () => {
      navigation.goBack(); // Navigate back to the previous screen
      return true; // Return true to indicate that you've handled the back button
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove(); // Remove the back button listener when unmounting
  }, [navigation]); // Make sure to include navigation in the dependency array

  return (
    <View style={styles.container}>
      <TextInput
       style={styles.input}
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <FlatList
        data={suggestions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectItem(item)}>
             <Text style={styles.suggestionItem}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 12,
    marginBottom: 16,
  },
  suggestionItem: {
    fontSize: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Share;
