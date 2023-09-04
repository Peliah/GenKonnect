import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import axios from 'axios';
import Client from './../../api/Client'

const BigButton = () => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    // Fetch the current state from the API when the component mounts
    async function fetchCurrentState() {
      try {
        const response = await Client.get('/get-button-state');
        // Assuming the API returns a boolean value, update the state
        setIsOn(response.data);
      } catch (error) {
        // Handle errors
      }
    }

    fetchCurrentState();
  }, []);


  const toggleSwitch = async () => {
    // Toggle the state
    setIsOn(!isOn);

    // Send a 1 or 0 to the API
    const apiValue = isOn ? 1 : 0;

    // Replace 'your-api-endpoint' with your actual API endpoint
    try {
      const response = await Client.post('/button', { value: apiValue });
      // Handle API response if needed
    } catch (error) {
      // Handle errors
    }
  };

  return (
    <TouchableOpacity onPress={toggleSwitch}>
      <View
        style={[
          styles.toggleButton,
          isOn ? styles.toggleOn : styles.toggleOff,
        ]}
      >
        <Text style={styles.toggleText}>{isOn ? 'ON' : 'OFF'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toggleButton: {
    width: 250,
    height: 250,
    borderRadius: 150, // Make it round
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    elevation:5
  },
  toggleOn: {
    backgroundColor: 'red', // Color when ON
    // borderColor: 'white', // Border color when ON
  },
  toggleOff: {
    backgroundColor: 'white', // Color when OFF
    // borderColor: 'red', // Border color when OFF
  },
  toggleText: {
    // color: 'black', // Text color
    // fontSize: 16,
    // fontWeight: 'bold',
  },
});

export default BigButton;
