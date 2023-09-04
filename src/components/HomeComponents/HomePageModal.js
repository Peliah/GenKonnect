import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

const HomePageModal = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.btnModal}>
            {/* < */}
            <View style={styles.viewImg}>

            </View>
        </TouchableOpacity>
    </View>
  )
}

export default HomePageModal

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        // borderRadius:20,
        backgroundColor:'#f9ea08',
        paddingVertical:20,

    },
    viewImg:{
        backgroundColor: '#0074d9',
        width:45,
        height:45,
        borderRadius:10

    },
    btnModal:{
        backgroundColor:'red',
        elevation:5,
        borderRadius:10,
    }
})