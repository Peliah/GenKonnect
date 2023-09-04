import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
// import axios from 'axios';
import Client from './../../api/Client'

const BigButton = () => {
  const [isOn, setIsOn] = useState(false);

  //for the timer
  const [running, setRunning] = useState(false)
  const [time, setTime] = useState(0)



  useEffect(() => {
    async function fetchCurrentState() {
      try {
        const response = await Client.get('/get-button-state');
        setIsOn(response.data);
      } catch (error) {
        // Handle errors
      }
    }

    fetchCurrentState();   
  }, []);


  const toggleSwitch = async () => {
    setIsOn(!isOn);
    const apiValue = isOn ? 1 : 0;
    try {
      const response = await Client.post('/button', { value: apiValue });
    } catch (error) {
      // Handle errors
    }
  };

  const startStop = () => {
    setRunning(!running);
  };

  const reset = () => {
    setRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <View
    style={[
        styles.toggleButtonGroup
    ]}
    >
        <TouchableOpacity onPress={toggleSwitch} style={styles.toggleButton}>
        <Icon name='power' size={100} color={isOn ? '#0074d9' : 'grey'}/>
        </TouchableOpacity>
        <Text style={[styles.timer, isOn ? styles.toggleOn : styles.toggleOff]}>{formatTime(time)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleButton: {
    width: 250,
    height: 250,
    borderRadius: 150, // Make it round
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff',
    elevation:5
  },
  toggleOn: {
    color: '#0074d9', // Color when ON 
  },
  toggleOff: {
    color: 'grey', // Color when OFF 
  },
  toggleText: {
  },
  toggleButtonGroup:{
    alignItems:'center',
    justifyContent:'center',
  },
  timer:{
    fontSize:40,
    fontWeight:'400',
    margin:20
  }
});

export default BigButton;
