import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../../context/AuthContext';
import Client from './../../api/Client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BigButton = ({ generator }) => {
  const { authData } = useContext(AuthContext);
  const [isOn, setIsOn] = useState(false);
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    fetchCurrentState();

      // let interval;
      // if (running) {
      //   interval = setInterval(() => {
      //     setTime((prevTime) => prevTime + 1);
      //   }, 1000);
      // } else {
      //   clearInterval(interval);
      // }
      // return () => clearInterval(interval);
    // }, [running]);
  }, []);
  const fetchCurrentState = async () => {
    try {
      const response = await Client.get('/getchange/pelray45');
      console.log("stataes", response.data.state)
      setIsOn(response.data.state);
    } catch (error) {
      // Handle errors
    }
  };


  const toggleSwitch = async () => {
    const apiValue = isOn ? 0 : 1;
    setIsOn(!isOn);
    isOn ? reset() : startStop();
    try {
      const token = await AsyncStorage.getItem('userToken');
      const myItem = await AsyncStorage.getItem('authData');
      const response = await Client.post(
        '/change',
        { state: apiValue, genId: generator.genId._id },
        {
          headers: {
            token: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error(error + ' Why 400');
    }
  };

  const startStop = () => {
    setRunning(!running);
  };

  const reset = () => {
    setRunning(false);
    setTime(0);
  };

  // const formatTime = (seconds) => {
  //   const hours = Math.floor(seconds / 3600);
  //   const minutes = Math.floor((seconds % 3600) / 60);
  //   const remainingSeconds = seconds % 60;
  //   return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  // };

  return (
    <View style={styles.toggleButtonGroup}>
      <TouchableOpacity onPress={toggleSwitch} style={styles.toggleButton}>
        <Icon name="power" size={100} color={isOn ? '#0074d9' : 'grey'} />
      </TouchableOpacity>
      <Text style={[styles.timer, isOn ? styles.toggleOn : styles.toggleOff]}></Text>
      {/* <Text style={[styles.timer, isOn ? styles.toggleOn : styles.toggleOff]}>{formatTime(time)}</Text> */}
      <View style={styles.status}>
        <Text>Status</Text>
        <View style={styles.connected}>
          <Text>{isOn ? 'Is Running' : 'Not Running'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleButton: {
    width: 250,
    height: 250,
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 5,
  },
  toggleOn: {
    color: '#0074d9',
  },
  toggleOff: {
    color: 'grey',
  },
  toggleButtonGroup: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    fontSize: 40,
    fontWeight: '400',
    margin: 20,
  },
  status: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  connected: {
    borderRadius: 30,
    backgroundColor: '#0074d9',
    padding: 15,
    paddingHorizontal: 40,
  },
});

export default BigButton;
