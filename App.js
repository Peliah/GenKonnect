import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Screens/Home';
import { AuthContextProvider } from './src/context/AuthContext';
import AuthStack from './src/Navigation/AuthStack';
import AppStack from './src/Navigation/AppStack';

export default function App() {
  return (
    <AuthContextProvider>
        <AppStack/>
    </AuthContextProvider>
  );
}

