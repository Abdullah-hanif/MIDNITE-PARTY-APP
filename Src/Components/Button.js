import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';



const Button= ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
      width: '40%',
      height: 40,
      backgroundColor: '#5D2769',
      margin: 18,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      

  },
  text:{
       
       fontSize: 15,
       color: 'white'
  }
});

export default Button;