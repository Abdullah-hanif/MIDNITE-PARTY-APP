import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    Keyboard,
    TextInput
  } from 'react-native';
  import { SafeAreaView } from 'react-native-safe-area-context';
  import React, {useState} from 'react';
  import Ionicons from '@expo/vector-icons/Ionicons';
  import Txtinput from '../../Components/Textinput';
  import Button from '../../Components/Button';
  import SwitchSelector from "react-native-switch-selector";

  // import DropDownPicker from 'react-native-dropdown-picker';
  
  const Index = ({navigation}) => {
    const options = [
      { label: "Male", value: "Male" },
      { label: "Female", value: "Female" },
      
    ];
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'}
    ]);
  
    // const [date, setDate] = useState(new Date());
    // const [open, setOpen] = useState(false);
    return (
      <SafeAreaView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {/* sidee bar logo =======================> */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{paddingTop: 5, paddingLeft: 5}}>
            <Ionicons
              name="return-up-back"
              size={25}
              color="black"
              style={{paddingHorizontal: 5}}
            />
          </TouchableOpacity>
          {/*profile===================>*/}
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                letterSpacing: 2,
                fontWeight: '600',
                marginRight:25
              }}>
              Create Event
            </Text>
          </View>
          {/* right logo screen =================>*/}
          <View style={{paddingRight: 5, paddingTop: 5}}>
            {/* <Image
              source={require('../assets/launch_screen.png')}
              style={{width: 35, height: 35}}
            /> */}
          </View>
        </View>
        <View>
          <View style={{alignItems: 'center',}}>
            <TouchableOpacity>
            <Image
              source={{
                uri: 'https://static.thenounproject.com/png/187803-200.png',
              }}
              style={{width: 130, height: 130,}}
            />
            </TouchableOpacity>
            <Text>Select Your Event Images</Text>
          </View>
          {/* =================Sub container View */}
  <ScrollView style={{marginTop:10}}>
    <View style={{width:"85%",backgroundColor:'#e0e0e0',borderRadius:10,marginTop:10,alignSelf:'center'}}>
    <TextInput placeholder='Title' style={{height:40,paddingLeft:20}}/>
    </View>
    <View style={{width:"85%",backgroundColor:'#e0e0e0',borderRadius:10,marginTop:10,alignSelf:'center'}}>
    <TextInput placeholder='Enter Your Start And End Time' keyboardType='number-pad' style={{height:40,paddingLeft:20}}/>
    </View>
    <View style={{width:"85%",backgroundColor:'#e0e0e0',borderRadius:10,marginTop:10,alignSelf:'center'}}>
    <TextInput placeholder='Average Age' style={{height:40,paddingLeft:20}}/>
    </View>
    <View style={{width:"85%",backgroundColor:'#e0e0e0',borderRadius:10,marginTop:10,alignSelf:'center'}}>
    <TextInput placeholder='Male And Female Ratio In Numbers' style={{height:40,paddingLeft:20}}/>
    </View>
    <View style={{width:"85%",backgroundColor:'#e0e0e0',borderRadius:10,marginTop:10,alignSelf:'center'}}>
    <TextInput placeholder='Host' style={{height:40,paddingLeft:20}}/>
    </View>
    <View style={{width:"85%",backgroundColor:'#e0e0e0',borderRadius:10,marginTop:10,alignSelf:'center'}}>
    <TextInput placeholder='City' style={{height:40,paddingLeft:20}}/>
    </View>
    <View style={{width:"85%",backgroundColor:'#e0e0e0',borderRadius:10,marginTop:10,alignSelf:'center'}}>
    <TextInput placeholder='Amount Of Guest' style={{height:40,paddingLeft:20}}/>
    </View>
    <View style={{alignItems:"center"}}>
    <Button title={'CREATE EVENT'}/>
    </View>
  </ScrollView>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Index;
  
  const styles = StyleSheet.create({
    container: {},
  });