import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaViewBase, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../MID-NITE/Src/Navigation/Index';

export default function App() {
  return (
    
    
    <>
      <Navigation/>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
