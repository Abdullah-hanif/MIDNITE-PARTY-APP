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
   import DropDownPicker from 'react-native-dropdown-picker';
  const Index = ({navigation}) => {
    const options = [
      { label: "Male", value: "Male" },
      { label: "Female", value: "Female" },
      
    ];
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Pool Party Event', value: 'Pool Party Evnet'},
      {label: 'Party Event', value: 'Party Event'},
      {label: 'Home Party Event', value: 'Home Party Event'}
    ]);
  
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
              Profile
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
                uri: 'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg',
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
                    placeholder={'Your AGE'}
                    
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
               <View style={{marginTop:10,marginLeft:20}}>
      <Text style={{fontSize:15,fontWeight:'600',color:'purple'}}>Next Three Event</Text>
       <DropDownPicker
       textStyle={{color:'black'}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={{width:100,height:50,backgroundColor:'white'}}
    />
  </View>
         
                <View style={{alignItems: 'center', paddingTop: 10}}>
                  <Button title={'Add Your Friends'} onPress={() => navigation.navigate('eventRequest')} />
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