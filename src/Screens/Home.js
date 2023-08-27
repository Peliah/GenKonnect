import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import FormButton from '../components/formComponents/FormButton'

const Home = () => {
  const construction = require('./../assets/images/Underconstruction-bro.png')
  const {logout} = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Image source={construction}  style={{width:300, height:300}}/>
      <TouchableOpacity onPress={()=>{logout()}}><Text>Logout</Text></TouchableOpacity>
      <FormButton onPress={()=>{logout()}} title={'Logout'}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9ea08',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
