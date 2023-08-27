import { StyleSheet, Text, View, KeyboardAvoidingView, Dimensions, Platform, ScrollView, TextInput, TouchableOpacity,Image } from 'react-native'
import React, {useContext, useState} from 'react'
import { isValidEmail, isValidObjField, updateError } from '../components/Method'
// import NicerImage from './../assets/images/light-bulb-animate.svg'
import FormButton from '../components/formComponents/FormButton'
import { AuthContext } from '../context/AuthContext'
const Login = ({navigation}) => {

  const {login} = useContext(AuthContext)
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

  const submitForm = async ()=>{
    if(isValidForm())
      {console.log('Form Submitted')
    console.log(userInfo.password)
    console.log(userInfo.email)
    login();
    }
    else
      {console.log('You suck')}
  }

  return (
    <KeyboardAvoidingView enabled={true}  style={styles.container}>
      {/* <ScrollView showsVerticalScrollIndicator={false} style={{paddingBottom:20}}> */}
        {/* This is the text error message */}
        {/* {error ? ( <Text style={{ color: 'red', fontSize: 16, textAlign: 'center' }}>{error} </Text>) : null} */}

        
        <View>
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
          
          {/* Submit button */}
          <FormButton onPress={submitForm} title={'Login'}/>
        </View>

      {/* </ScrollView> */}
      <Text style={styles.signup} onPress={()=>{navigation.push('Register')}}>
        Don't have an account? Sign Up here!
      </Text>
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