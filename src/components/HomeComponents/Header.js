import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <View style={{borderRadius:50, width:25, height:25, alignItems:'center', justifyContent:'center', borderWidth:1}}>
            <Icon name='person-outline' color={'grey'} size={20}/>
        </View>
        <View>
            <Text style={styles.title}>Header</Text>
            {/* <Text>Header</Text> */}
        </View>
        <View>
            <Icon name='ellipsis-vertical-outline' size={25}/>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        // flex:1,
        paddingTop:45,
        paddingBottom:10,
        backgroundColor:"#fff",
        paddingHorizontal: 15,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        elevation: 5, // Add elevation (shadow)
        marginBottom:10
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        // color: 
    }
})