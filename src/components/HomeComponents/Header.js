import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import BottomSheetModal from '../DashboardComponents/BottomSheetModal';

const Header = ({iconName, iconName2, onPress, generator_route}) => {
    const navigation = useNavigation();
    console.log(generator_route)
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };
  const modalOptions = [
    {
      title: 'Share',
      icon: 'send-outline',
      action: (gen) => console.log(gen.name +' Share modal')
    },
    {
      title: 'Remove',
      icon: 'trash-outline',
      action: (gen) => console.log(gen.name +' Trash modal')
    },
    {
      title: 'Print Data',
      icon: 'print-outline',
      action: (gen) => console.log(gen.name +' Print modal')
    },
  ]
  return (
    <>
        <View style={styles.container}>
            <TouchableOpacity style={{}} onPress={()=>navigation.goBack()}>
                <Icon name={iconName} color={'grey'} size={25}  />
            </TouchableOpacity>

            {/* <View style={{borderRadius:50, width:25, height:25, alignItems:'center', justifyContent:'center', borderWidth:1}}> */}
            {/* </View> */}
            <View>
                <Text style={styles.title}>Header</Text>
            </View>
            {/* <TouchableOpacity onPress={()=>console.log({generator_route})}> */}
            <TouchableOpacity onPress={toggleBottomSheet}>
                <Icon name={iconName2} size={25}/>
            </TouchableOpacity>
        </View>
        <BottomSheetModal
        isVisible={isBottomSheetVisible}
        onClose={toggleBottomSheet}
        >
        {
            [console.log(generator_route),
            modalOptions.map((op, i)=>(
            <TouchableOpacity  onPress={()=>op.action(generator_route)} key={i} style={styles.modalOptions}>
                {/* <Text>{generator_route}</Text> */}
                <Text>{op.title}</Text>
                <Icon name={op.icon} size={25}/>
            </TouchableOpacity>
            ))]
        }
        </BottomSheetModal>
    </>
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
    },
    modalOptions:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:9,
        elevation:2,
        alignItems:'center',

      }
})