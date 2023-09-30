import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, SafeAreaView, useWindowDimensions } from 'react-native';
import Header from '../components/HomeComponents/Header';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import GenList from '../components/DashboardComponents/GenList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Client from '../api/Client';
import BottomSheetModal from '../components/DashboardComponents/BottomSheetModal';

const Dashboard = ({ navigation }) => {
  const dimension = useWindowDimensions()
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };
  const [visible, setVisible] = useState(true);
  const [gens, setGens] = useState([]);
  const modalOptions = [
    {
      title: 'Share',
      icon: 'send-outline',
      action: (item) => console.log(item.name +' Share modal')
    },
    {
      title: 'Remove',
      icon: 'trash-outline',
      action: (item) => console.log(item.name +' Trash modal')
    },
    {
      title: 'Print Data',
      icon: 'print-outline',
      action: (item) => console.log(item.name +' Print modal')
    },
  ]
  // const { isGen } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
         console.log(token);
        
        if (token) {
          const response = await Client.get('/listgen', {
            headers: {
              token: `Bearer ${token}`,
            },
          });

          // if (response.data) {
            const genData = response.data.owned[0].GenKonId
            setGens(genData);
            console.log(genData);
          // }
        }
      } catch (error) {
        console.error('Error Fetching data ', error);
      }
    };

    fetchData();
    // console.log(gens)
  }, []);

  const generatorData = [
    {
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
    "id": "650c4f48c150e0e6f8862e38",
    "fuel": 74523,
    name: 'Neighbour Gen',
    "baseTemp": 96521,
    "PowerOutPut": "123546",
    "GenKonnectID": {
      "$oid": "650c4f24c150e0e6f8862e34"
    },
    "status": 1,
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
    // console.log('Item:', item);
    return (
    <>
      <TouchableOpacity style={styles.contactCon} onPress={() => navigation.navigate('Home', { generator: item })}>
      {/* <TouchableOpacity style={styles.contactCon} onPress={() => navigation.navigate('Home', { generator: item.genId })}> */}
        {/* <Text>GenList</Text> */}
        <View style={styles.contactConLeft}>
          <Icon name='flash' color={'#F9AE08'} size={30} />
          <View style={styles.contactDat}>
            {/* <Text style={styles.name}>{item.genId._id}</Text> */}
            <Text style={styles.name}>{item.name}</Text>
          </View>
        </View>
        <TouchableOpacity style={{alignItems: 'center', justifyContent:'center', flexDirection:'row'}} onPress={toggleBottomSheet}>
          <View style={item.status ===1 ? styles.statusColorON: styles.statusColorOff}>
          </View>
          <Icon name='ellipsis-vertical-outline' size={25} />
        </TouchableOpacity>
      </TouchableOpacity>
      {/* <Text>{item.name}</Text> */}
        <BottomSheetModal
          isVisible={isBottomSheetVisible}
          onClose={toggleBottomSheet}
        >
          {
            [console.log(item),
            modalOptions.map((op, i)=>(
              <TouchableOpacity  onPress={()=>op.action(item)} key={i} style={styles.modalOptions}>
                <Text>{item.name}</Text>
                <Text>{op.title}</Text>
                <Icon name={op.icon} size={25}/>
              </TouchableOpacity>
            ))]
          }
        </BottomSheetModal>
    </>
    );
  };

  const showModal=()=>{
    console.log("Hey yoo")
  }

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={generatorData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // keyExtractor={(item) => item._id}
        style={styles.list}
      />
      <Text>
        {/* {gens._id} */}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RegisterDevice')}
      >
        <Icon name="add-outline" size={32} color={'#FFF'}/>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        flexDirection: 'row',
      },
      contactDat: {
        paddingLeft:30,
        // alignItems:'center',
        justifyContent:'center',
        
      },
      statusColorON:{
        backgroundColor:'#1DEB2A',
        padding:10,
        borderRadius:50
      },
      statusColorOff:{
        backgroundColor:'red',
        padding:10,
        borderRadius:50

      },
      modalOptions:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:9,
        elevation:2,
        alignItems:'center',

      }
})