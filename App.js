import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Screens/Home';
import { AuthContextProvider } from './src/context/AuthContext';
import {useFonts} from 'expo-font'
import Router from './src/Navigation/Router';

export default function App() {
  return (
    <AuthContextProvider>
        <Router/>
    </AuthContextProvider>
  );
}

