import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, {useState, useContext} from 'react'
import Client from '../api/Client'
import { AuthContext } from '../context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage';



const SelectOrRegister = () => {
  const {isGen, authData, setIsGen} = useContext(AuthContext)
  
  const [userInfo, setUserInfo] = useState({
    serial:'',
    fuel:'',
    baseTemp:'',
    PowerOutPut:'',
  })
  const {serial,fuel,baseTemp,PowerOutPut} = userInfo;
  
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };
  
  //form validation
  const isValidForm = () => {
    
    return true
  }
  const handleRegisterDevice = async () => {
    if (isValidForm()) {
      const token = await AsyncStorage.getItem('userToken');
      console.log(token)
      Client.defaults.headers.common['token'] = `Bearer ${token}`
      await Client.post('/siadash', { ...userInfo })
        .then(
          res =>{
            console.log('Form Submitted')
            console.log(userInfo.serial)
            console.log(userInfo.fuel)
            console.log(userInfo.baseTemp)
            console.log(userInfo.PowerOutPut)

            console.log(res.data);
            // setAuthData(res.data)
            // setUserToken(authData.accesstoken)
            // setIsGen(authData.good.Active)
            // console.log(authData.good.Active)

            // AsyncStorage.setItem('authData', JSON.stringify(authData))
            setIsGen(true)
          }
        )
        .catch (e => {
          console.log('Error on Gen Registration' + e)
        })
      }
        // Perform device registration logic here
        // You can send the deviceName to your server for registration
        // Close the modal when registration is complete
        console.log('done')
    };

    

  return (
    
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Register Your First Generator</Text>
        <TextInput
          style={styles.input}
          placeholder="Device Serial Number"
          onChangeText={value => handleOnChangeText(value, 'serial')}
          value={serial}
        />
        <TextInput
          style={styles.input}
          placeholder="Generator Fuel tank"
          onChangeText={value => handleOnChangeText(value, 'fuel')}
          value={fuel}
        />
        <TextInput
          style={styles.input}
          placeholder="Generator base temperature"
          onChangeText={value => handleOnChangeText(value, 'baseTemp')}
          value={baseTemp}
        />
        <TextInput
          style={styles.input}
          placeholder="Generator power output"
          onChangeText={value => handleOnChangeText(value, 'PowerOutPut')}
          value={PowerOutPut}
        />
        <View style={styles.buttonContainer}>
          <Button title="Register Device" onPress={handleRegisterDevice} />
          {/* <Button title="Cancel" onPress={closeModal} /> */}
        </View>
      </View>
  )
}

export default SelectOrRegister

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalTitle: {
        fontSize: 18,
        marginBottom: 10,
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        width: '80%',
        marginBottom: 10,
        borderRadius: 5,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
      },
})