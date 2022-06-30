import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

//import InputScrollView from 'react-native-input-scroll-view'
// import { APP_URL } from '../config';

const Textinput = ({placeholder, keyboardType, onChangeText}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <TextInput
          keyboardType={keyboardType}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor="purple"
          style={styles.textInput}
        />
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },

  textInput: {
    width: '90%',
    height: 50,

    borderBottomWidth: 1,
    borderBottomColor: 'white',

    fontSize: 15,
    alignSelf: 'center',
    color: 'black',
  },
});

export default Textinput;