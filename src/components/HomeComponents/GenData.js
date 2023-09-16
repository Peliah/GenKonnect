import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GenData = () => {
  return (
    <View style={styles.container}>
        <View>
            <Text>Fuel Status:  <Text>__:__</Text></Text>
            <Text>Oil Status:  <Text>__:__</Text></Text>
        </View>
        <View>
            <Text>Energy Consumption:  <Text>__:__</Text></Text>
            <Text>Energy Consumption:  <Text>__:__</Text></Text>
        </View>
    </View>
  )
}

export default GenData

const styles = StyleSheet.create({
    container:{
        flex:.15,
        backgroundColor:'#fff',
        width:'90%',
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-evenly',
        borderRadius:10,
        marginBottom:10,
        elevation:3,
        alignItems:'center'
    }
})