import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import FormButton from '../components/formComponents/FormButton'

const Profile = () => {
  const construction = require('./../assets/images/Underconstruction-bro.png')
  const {logout} = useContext(AuthContext)

  return (
    <View style={styles.container}>
       <Image source={construction}  style={{width:300, height:300}}/>
        <FormButton onPress={()=>{logout()}} title={'Logout'}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:15,
    // paddingTop:10
  },
})