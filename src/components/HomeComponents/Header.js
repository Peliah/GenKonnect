import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <View style={{backgroundColor:"#0074d9", borderRadius:50, width:40, height:40}}>
            <Text>IMAGE</Text>
        </View>
        <View>
            <Text style={styles.title}>Header</Text>
            {/* <Text>Header</Text> */}
        </View>
        <View>
            <Text>ICON</Text>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        // flex:1,
        paddingTop:50,
        paddingBottom:20,
        backgroundColor:"#f9ea08",
        paddingHorizontal: 15,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        elevation: 5, // Add elevation (shadow)
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        // color: 
    }
})