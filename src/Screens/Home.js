import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import Header from '../components/HomeComponents/Header'
import HomePageModal from '../components/HomeComponents/HomePageModal'
import BigButton from '../components/HomeComponents/BigButton'

const Home = () => {
  return (
    <View style={styles.contain}>
      <Header/>
      {/* <View style={styles.modals}>
        <HomePageModal/>
        <HomePageModal/>
        <HomePageModal/>
        <HomePageModal/>
      </View> */}
      <View style={styles.container}>
        <BigButton/>
        {/* <Image source={construction}  style={{width:300, height:300}}/> */}
        {/* <TouchableOpacity onPress={()=>{logout()}}><Text>Logout</Text></TouchableOpacity> */}
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
    // backgroundColor: '#f9ea08',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  modals:{
    // flex:1,
    flexDirection:'row',
    // alignItems:'center',
    // justifyContent: 'space-between',
    // marginHorizontal:10
    // backgroundColor:'blue',

  }
});
