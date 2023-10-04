import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import HomePageModal from './../components/HomeComponents/HomePageModal'
import Graphs from '../components/AnalyticsComponent/Graphs'
import Client from '../api/Client'

const Analytics = ({route}) => {
const {generator}=route.params
const generatorId=generator.genId._id
  const monitoring = async ()=>{
    try {
      const response = Client.get(`/Monitor/${generatorId}`)
      console.log(response.data)
    } catch (error) {
      if (error.response) {
        console.log('Server responded with:', error.response.data);
        console.log('Status code:', error.response.status);
      } else if (error.request) {
        console.log('Request made but no response received:', error.request);
      } else {
        console.log('Error setting up the request:', error.message);
      }
    }
  }
    useEffect(()=>{
     monitoring()
     const intervalId = setInterval(()=>{
      // console.log(generator)
      monitoring();
     }, 1000)

     return ()=>{clearInterval(intervalId)}
    },[])

    return (
      <View style={styles.container}>
        <View style={styles.analyticsHeader}>
          <Text>Analytics</Text>
        </View>
        <View style={styles.containerBody}>
          <View style={{}}>
            {/* <ScrollView contentContainerStyle={styles.modals} horizontal={true} showsHorizontalScrollIndicator={false}>
              <HomePageModal/>
              <HomePageModal/>
              <HomePageModal/>
              <HomePageModal/>
            </ScrollView> */}
          </View>
          {/* <View>
            <Graphs/>
          </View> */}
        </View>
        {/* <Image source={construction}  style={{width:300, height:300}}/> */}
      </View>
    )
  }

export default Analytics

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
      },
      containerBody:{
        padding:16,
      },
      modals:{
        // alignItemsalignItems:'center'
        // flex:1,
        // flexDirection:'row',
        // alignItems:'center',
        // justifyContent: 'space-evenly',
        // marginVertical:10,
        // color:'blue',
    // backgroundColor:'blue',
    // justifyContent:'center'
    paddingBottom:20
      },
      analyticsHeader:{
        paddingTop:60,
        paddingBottom:20,
        backgroundColor:"#fff",
        paddingHorizontal: 15,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        elevation: 5,
      }
})