import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, {useState} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Textinput from '../../Components/Textinput';
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
            Registration
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
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXoJVTrP147T2aUqxJ38Hc2oYo7KyTJti1dg&usqp=CAU',
            }}
            style={{width: 130, height: 130, borderRadius: 360}}
          />
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              position: 'relative',
              marginTop: -40,
              marginLeft: 100,
              borderRadius: 360,
            }}>
            <Ionicons name="ios-camera-outline" size={40} color={'purple'} />
          </TouchableOpacity>
        </View>
        {/* =================Sub container View */}

        <ScrollView
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: '#CBC3E3',
            marginTop: 40,
            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,
          }}>
          <View style={{marginTop: 40, marginLeft: 0}}>
            <View>
              <View style={{paddingTop: 5}}>
                <Textinput placeholder={'First Name'} />
              </View>
              <View style={{paddingTop: 15}}>
                <Textinput
                  placeholder={'Last Name'}
                  
                />
              </View>
              <View style={{paddingTop: 15}}>
                <Textinput
                  placeholder={'UserName'}
                  
                />
              </View>
              <View style={{paddingTop: 15}}>
                <Textinput
                  placeholder={'Your DOB'}
                  
                />
              </View>
                      {/*=============>male female switch selector button if you need*/}

              <View style={{paddingTop:15,width:110,justifyContent:'flex-start',marginLeft:20}}>
      <SwitchSelector
      buttonColor="purple"
      backgroundColor={'#fcf5ff'}
      options={options}
      initial={0}
      onPress={value => console.log(`Call onPress with value: ${value}`)}
    /></View>
             
             {/* <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    /> */}
       
              <View style={{alignItems: 'center', paddingTop: 10}}>
                <Button title={'RIGESTER'} onPress={()=>(navigation.navigate('homeScreen'))}/>
              </View>
              {/*=============>male female switch selector button if you need*/}

              {/* <View style={{paddingTop:15,width:150,alignSelf:'center'}}>
      <SwitchSelector
      buttonColor="purple"
      backgroundColor={'#fcf5ff'}
      options={genderOptions}
      initial={0}
      onPress={value => console.log(`Call onPress with value: ${value}`)}
    /></View>*/}
            </View>
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