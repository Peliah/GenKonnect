import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Header from '../components/HomeComponents/Header';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import GenList from '../components/DashboardComponents/GenList';
import Client from '../api/Client';

const Dashboard = ({ navigation }) => {
  const [gens, setGens] = useState([]);
  const { isGen } = useContext(AuthContext);

  useEffect(() => {
    Client.get()
      .then((response) => {
        if (response.data.success) {
          setGens(response.data.generators);
        }
      })
      .catch((err) => {
        console.error('Error Fetching data ', err);
      });
  }, []);

  const generatorData = [{
    "id": "650c4f48c150e0e6f8862e38",
    "fuel": 74523,
    name: 'Neighbour Gen',
    "baseTemp": 96521,
    "PowerOutPut": "123546",
    "GenKonnectID": {
      "$oid": "650c4f24c150e0e6f8862e34"
    },
    "status": 0,
    "__v": 0
  },{
    "id":  "650c614cc150e0e6f8862e40",
    name: 'IAI Gen',
    "fuel": 123456,
    "baseTemp": 123456,
    "PowerOutPut": "123456",
    "GenKonnectID": {
      "$oid": "650c4f24c150e0e6f8862e34"
    },
    "status": 0,
    "__v": 0
  },{
    "id": "650c6182c677b5389c4ef2e6",
    "fuel": 123456,
    name: 'My Gen',
    "baseTemp": 123456,
    "PowerOutPut": "123456",
    "GenKonnectID": {
      "$oid": "650c4f24c150e0e6f8862e34"
    },
    "status": 0,
    "__v": 0
  }];

  const renderItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.contactCon} onPress={() => navigation.navigate('Home', { generator: item })}>
        {/* <Text>GenList</Text> */}
        <View style={styles.contactConLeft}>
            <Icon name='flash' color={'#0074d9'}size={30}/>
            <View style={styles.contactDat}>
                <Text style={styles.name}>{item.name}</Text>
                {/* <Text style={styles.phoneNumber}>
                {item.phone}
                </Text> */}
            </View>
        </View>
        <View>
            <Icon name='ellipsis-vertical-outline' size={25} />
        </View>
    </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      {!isGen ? (
        <FlatList
          data={generatorData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.list}
        />
      ) : (
        <View></View>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RegisterDevice')}
      >
        <Icon name="add-outline" size={32} />
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding:15,
        // paddingTop:10
      },
      button: {
        position: 'absolute',
        bottom: 20, // Adjust this value to control the vertical position
        right: 20, // Adjust this value to control the horizontal position
        backgroundColor: '#0074d9', // Change the background color as needed
        padding: 10,
        borderRadius: 30,
      },
      contactCon: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        padding: 15,
        marginBottom:5,
        borderBottomWidth: 0.5,
        borderBottomColor: "#d9d9d9",
        backgroundColor:'#fff',
        borderRadius:10,
        elevation:2
      },
      contactConLeft: {
        // flex: 1,
        flexDirection: 'row',
        // justifyContent:'',
        // width:'50%'
        
      },
      contactDat: {
        paddingLeft:30
        
      },
})