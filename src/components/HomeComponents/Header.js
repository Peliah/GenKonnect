import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
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
            <Icon name='ellipsis-vertical-outline' size={30}/>
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
        backgroundColor:"#fff",
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