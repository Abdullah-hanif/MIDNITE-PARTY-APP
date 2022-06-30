import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
   Image
} from 'react-native';



const CircleButton= ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
     <Image source = {require('../assets/arrow.png')} style={styles.image}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
      width: 80,
      height: 80,
      backgroundColor: 'white',
      margin: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 360,
      borderWidth: 2

  },
  text:{
       fontWeight: 'bold',
       fontSize: 30,
       color: 'black',
       
  },
  image:{
    height: 30,
    width: 45
  }
  
});

export default CircleButton;