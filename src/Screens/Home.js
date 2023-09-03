import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import FormButton from '../components/formComponents/FormButton'
import Header from '../components/HomeComponents/Header'
import HomePageModal from '../components/HomeComponents/HomePageModal'

const Home = () => {
  const construction = require('./../assets/images/Underconstruction-bro.png')
  const {logout} = useContext(AuthContext)
  return (
    <View style={styles.contain}>
      <Header/>
      <View>
        <HomePageModal/>
        <HomePageModal/>
        <HomePageModal/>
        <HomePageModal/>
      </View>
      <View style={styles.container}>
        <Image source={construction}  style={{width:300, height:300}}/>
        <TouchableOpacity onPress={()=>{logout()}}><Text>Logout</Text></TouchableOpacity>
        <FormButton onPress={()=>{logout()}} title={'Logout'}/>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:15,
    // paddingTop:10
  },
  contain:{
    flex:1,
    backgroundColor: '#f9ea08',
    // justifyContent: 'center',
    // alignItems: 'center',
  }
});
