import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import HomePageModal from './../components/HomeComponents/HomePageModal'
import Graphs from '../components/AnalyticsComponent/Graphs'

const Analytics = () => {
    const construction = require('./../assets/images/Underconstruction-bro.png')

    return (
      <View style={styles.container}>
        <View style={styles.analyticsHeader}>

        </View>
        <View style={{}}>
          <ScrollView contentContainerStyle={styles.modals} horizontal={true} showsHorizontalScrollIndicator={false}>
            <HomePageModal/>
            <HomePageModal/>
            <HomePageModal/>
            <HomePageModal/>
          </ScrollView>
        </View>
        <View>
          <Graphs/>
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
        padding:16,
        paddingTop:30
      },
      modals:{
        // alignItemsalignItems:'center'
        // flex:1,
        // flexDirection:'row',
        // alignItems:'center',
        // justifyContent: 'space-evenly',
        // marginVertical:10,
        // color:'blue',
    backgroundColor:'blue',
    // justifyContent:'center'
    paddingBottom:20
      }
})