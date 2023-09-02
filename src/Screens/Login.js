import { StyleSheet, Text, View, KeyboardAvoidingView, Dimensions, Platform, ScrollView, TextInput, TouchableOpacity,Image } from 'react-native'
import React, {useContext, useState} from 'react'
import { isValidEmail, isValidObjField, updateError } from '../components/Method'
import FormButton from '../components/formComponents/FormButton'
import { AuthContext } from '../context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Client from '../api/Client'

const Login = () => {

  const {login, setAuthData, authData, setUserToken, userToken} = useContext(AuthContext)
  //importing the image
  const niceImage = require('./../assets/images/Lightbulb-bro.png')
  const [userInfo, setUserInfo] = useState({
    email:'',
    password:'',
  })

  const [error, setError] = useState('')
  const { email, password } = userInfo;
  //on text change
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  //form validation
  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError('Required all fields!', setError);

    if (!isValidEmail(email)) return updateError('Invalid email!', setError);

    if (!password.trim() || password.length < 8)
      return updateError('Password is too short!', setError);

    return true;
  };

  const submitForm = async () => {

    if (isValidForm()) {
        // await Client.post('/sign-in', { ...userInfo })
        // .then(
        //   res =>{
            console.log('Form Submitted')
            console.log(userInfo.password)
            console.log(userInfo.email)
            login()
            // console.log(res.data);
            // setAuthData(res.data)
            // setUserToken(authData.token)

            // AsyncStorage.setItem('authData', JSON.stringify(authData))
            // AsyncStorage.setItem('userToken', userToken)
        //   }
        // )
        // .catch (e => {
        //   console.log('login error' + e)
        // })
    }
  };

  // const submitForm = async () => {

  //   if (isValidForm()) {
  //       await Client.post('/sign-in', { ...userInfo })
  //       .then(
  //         res =>{
  //           console.log('Form Submitted')
  //           console.log(userInfo.password)
  //           console.log(userInfo.email)

  //           console.log(res.data);
  //           setAuthData(res.data)
  //           setUserToken(authData.token)

  //           AsyncStorage.setItem('authData', JSON.stringify(authData))
  //           AsyncStorage.setItem('userToken', userToken)
  //         }
  //       )
  //       .catch (e => {
  //         console.log('login error' + e)
  //       })
  //   }
  // };

  return (
    <KeyboardAvoidingView enabled={true}  style={styles.container}>

        
        <View style={{marginBottom:20}}>
          <Image source={niceImage}  style={{width:300, height:300}}/>
          {/* <NicerImage/> */}
        </View>

        {/* Inputs */}
        <View style={styles.fields}>
          
          <TextInput placeholder='Email' value={email} style={styles.input} onChangeText={value => handleOnChangeText(value, 'email')} autoCapitalize='none'/>
          <View style={styles.loginLabel}>
            {/* <Text style={{ fontWeight: 'bold' }}>Email</Text> */}
            {error ? (<Text style={{ color: 'red', fontSize: 10 }}>{error}</Text>) : null}
          </View>
          
          <TextInput placeholder='Password' value={password} style={styles.input} onChangeText={value => handleOnChangeText(value, 'password')} secureTextEntry autoCapitalize='none'/>
          <View style={styles.loginLabel}>
            {/* <Text style={{ fontWeight: 'bold' }}>Password</Text> */}
            {error ? (<Text style={{ color: 'red', fontSize: 10 }}>{error}</Text>) : null}
          </View>
          <View style={{marginVertical:15}}>
            <FormButton onPress={submitForm} title={'Login'}/>
          </View>
          
          {/* Submit button */}
        </View>

      {/* </ScrollView> */}
     
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    // width:'80%'
  },
  loginLabel:{
    flexDirection:'row',
    justifyContent:'flex-end',
    // marginBottom:5,
    marginBottom: 20,
  },
  input:{
    borderWidth: 1,
    borderColor: '#0074d9',
    // height: 35,
    borderRadius: 15,
    fontSize: 16,
    paddingLeft: 20,
    paddingVertical:5,
    // width:'80%'
  },
  // btn: {
  //   height: 45,
  //   borderRadius: 15,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor:'#0074d9',
  //   fontFamily:'mrt-bold'
  // },
  fields:{
    // alignItems:'center',
    width:'80%',

  },
  signup:{
    margin:10,
    fontSize:13
  }
})