import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { isValidEmail, isValidObjField, updateError } from '../components/Method';
import FormButton from '../components/formComponents/FormButton';

const Register = ({ navigation }) => {
  const niceImage = require('./../assets/images/Lightbulb-bro.png');
  const [userInfo, setUserInfo] = useState({
    First_name: '',
    email: '',
    Telephone: '',
    confirmPassword: '',
    password: '',
  });

  const [error, setError] = useState('');
  const { First_name, email, Telephone, password, confirmPassword } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo)) {
      updateError('Required all fields!', setError);
      return false;
    }

    if (!isValidEmail(email)) {
      updateError('Invalid email!', setError);
      return false;
    }

    if (!password.trim() || password.length < 5) {
      updateError('Password is too short!', setError);
      return false;
    }
    if(password !== confirmPassword){
      updateError('Password is incorrect', setError);
      return false;
    }

    return true;
  };

  const submitForm = async () => {
    if (isValidForm()) {
      console.log('Form Submitted');
      console.log(userInfo.password);
      console.log(userInfo.email);
    } else {
      console.log('Validation failed');
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        <View style={{marginBottom:30}}>
          <Image source={niceImage} style={{ width: 300, height: 300 }} />
        </View>

        <View style={styles.fields}>
          <TextInput
            placeholder="Name"
            value={First_name}
            style={styles.input}
            onChangeText={(value) => handleOnChangeText(value, 'First_name')}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Email"
            value={email}
            style={styles.input}
            onChangeText={(value) => handleOnChangeText(value, 'email')}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Telephone"
            value={Telephone}
            style={styles.input}
            onChangeText={(value) => handleOnChangeText(value, 'Telephone')}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            value={password}
            style={[styles.input]}
            onChangeText={(value) => handleOnChangeText(value, 'password')}
            secureTextEntry
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            style={[styles.input, {marginBottom:30}]}
            onChangeText={(value) => handleOnChangeText(value, 'confirmPassword')}
            secureTextEntry
            autoCapitalize="none"
          />

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <FormButton onPress={submitForm} title="Register" />
        </View>

        <Text style={styles.signup} onPress={() => navigation.push('Login')}>
          Already have an account?{' '}
          <Text style={{ color: '#0074d9' }}>Login here!</Text>
        </Text>
      {/* </ScrollView> */}
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height:'100%',
    // backgroundColor:'black'
  },
  errorText: {
    color: 'red',
    fontSize: 10,
    // textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#0074d9',
    borderRadius: 15,
    fontSize: 16,
    paddingLeft: 20,
    paddingVertical: 5,
    width: '100%',
    marginBottom: 20,
  },
  fields: {
    // flex: 1,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signup: {
    margin: 10,
    fontSize: 13,
  },
});
