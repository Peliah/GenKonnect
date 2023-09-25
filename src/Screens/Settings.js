import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import FormButton from '../components/formComponents/FormButton'

const Settings = () => {
  const { authData, logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>

      <View style={styles.analyticsHeader}>

        <View style={styles.userImg}>
          <Icon name='person' size={50} />
        </View>

        <View>
          <Text style={styles.settingsText}>{'First name'}</Text>
          {/* <Text>{authData.firstName}</Text> */}
          <Text>{'telephone'}</Text>
          {/* <Text>{authData.telephone}</Text> */}
        </View>
      </View>

      <ScrollView style={styles.container2}>
        <View style={styles.accountView}>

          <TouchableOpacity  style={styles.settingsTouch1}>
            <Text style={styles.settingsText}>John Doe</Text>
            <Text style={styles.settingsText2}>Tap here to change name</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.settingsTouch1}>
            <Text style={styles.settingsText}>example@email.com</Text>
            <Text style={styles.settingsText2}>Tap to change email</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.settingsTouch1}>
            <Text style={styles.settingsText}>+237 650810984</Text>
            <Text style={styles.settingsText2}>Tap here to change number</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.settingsView}>
          <TouchableOpacity style={styles.settingsTouch}>
            <Icon name='notifications-outline' size={25} />
            <Text style={styles.settingsText}>Notification and Sounds</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingsTouch}>
            <Icon name='calendar-outline' size={25} />
            <Text style={styles.settingsText}>Schedules</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingsTouch}>
            <Icon name='language-outline' size={25} />
            <Text style={styles.settingsText}>Language</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingsTouch}>
            <Icon />
            <Text />
          </TouchableOpacity>
        </View>
      </ScrollView>
        <TouchableOpacity style={styles.logoutbtn} onPress={()=>{logout()}} title={'Logout'}>
            <Text>
                Logout
            </Text>
        </TouchableOpacity>
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  analyticsHeader: {
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
  },
  userImg: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    padding: 10,
    marginRight: 20,
  },
  container2: {
    flex: 1,
    marginTop:10
    // backgroundColor: '#fff',
  },
  accountView: {
    // padding: 20,
  },
  settingsView: {
    // padding: 20,
    // backgroundColor: '#f5f5f5',
    // marginTop: 10,
  },
  settingsTouch: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  settingsTouch1: {
    // flexDirection: 'row',
    // alignItems: 'center',
    paddingLeft: 20,
    paddingBottom: 10,
  },
  settingsText: {
    fontSize: 16.5,
    fontWeight:'400'
  },
  settingsText2: {
    fontSize: 14,
    color: 'gray',
  },
  logoutbtn:{
    backgroundColor:'#0074d9',
    alignItems:'center',
    justifyContent:'center',
    padding:15,
    width:'80%',
    alignSelf:'center',
    borderRadius:10,
    marginBottom:10
  }
});
