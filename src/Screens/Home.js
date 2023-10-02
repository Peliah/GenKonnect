import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import BottomSheetModal from '../components/DashboardComponents/BottomSheetModal'
import Header from '../components/HomeComponents/Header'
import BigButton from '../components/HomeComponents/BigButton'
import GenData from '../components/HomeComponents/GenData'
import Icon from 'react-native-vector-icons/Ionicons'

const Home = ({route}) => {
  const {generator} = route.params;

  
  return (
    <View style={styles.contain} >
      <Header iconName='arrow-back-outline' iconName2={'ellipsis-vertical-outline'} generator_route={generator} />
      <View style={styles.modals}>
        <Text>{generator.name}</Text>
        {/* <Text>{generator._id}</Text> */}
      </View>
      <View style={styles.container}>
        <BigButton generator={generator}/>
        {/* <Image source={construction}  style={{width:300, height:300}}/> */}
        {/* <TouchableOpacity onPress={()=>{logout()}}><Text>Logout</Text></TouchableOpacity> */}
      </View>
      <GenData/>
        
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
    // flexDirection:'row',
    alignItems:'center',
    // justifyContent: 'space-between',
    marginVertical:10,
    // color:'blue',

  }
});
