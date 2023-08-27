import { StyleSheet, Text, View, KeyboardAvoidingView, Dimensions, Platform, ScrollView, TextInput, TouchableOpacity,Image } from 'react-native'
import React, {useState} from 'react'
import { isValidEmail, isValidObjField, updateError } from '../components/Method'
import FormButton from '../components/formComponents/FormButton'

const Register = ({navigation}) => {

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

        <TextInput placeholder='Email' value={email} style={styles.input} onChangeText={value => handleOnChangeText(value, 'email')} autoCapitalize='none'/>
        <View style={styles.loginLabel}>
          {/* <Text style={{ fontWeight: 'bold' }}>Email</Text> */}
          {error ? (<Text style={{ color: 'red', fontSize: 10 }}>{error}</Text>) : null}
        </View>

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
        <FormButton onPress={submitForm} title={'Register'}/>
      </View>

    {/* </ScrollView> */}
    <Text style={[styles.signup,]} onPress={()=>{navigation.push('Login')}}>
     Already have an account? Login here!
    </Text>
  </KeyboardAvoidingView>
  )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        width:'100%',
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
      width:'100%'
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
            flex:1,
            // alignItems: 'center',
            justifyContent:'center',
      width:'80%',
  
    },
    signup:{
      margin:10,
      fontSize:13
    }
  })