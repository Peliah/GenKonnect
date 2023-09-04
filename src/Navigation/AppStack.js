import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home'
import Profile from '../Screens/Profile'
import Analytics from '../Screens/Analytics'
import TabNavigation from './TabNavigation'

const AppStack = () => {
    const Stack = createNativeStackNavigator()

    return (
          <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown:false, }} >
                <Stack.Screen name='Tab' component={TabNavigation}/>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Analytics" component={Analytics} />
              </Stack.Navigator>
          </NavigationContainer>

    )
}

export default AppStack