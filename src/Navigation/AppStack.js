import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home'

const AppStack = () => {
    const Stack = createNativeStackNavigator()

    return (
          <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown:false}} >
                <Stack.Screen name="Home" component={Home} />
              </Stack.Navigator>
          </NavigationContainer>

    )
}

export default AppStack