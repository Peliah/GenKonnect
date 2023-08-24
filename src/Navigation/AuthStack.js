import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Screens/Login'
import React from 'react'

const AuthStack = () => {

    const Stack = createNativeStackNavigator()

  return (
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="login_section" options={ { headerShown: false} } component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default AuthStack