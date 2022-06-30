import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native'
import { SafeAreaView  } from 'react-native-safe-area-context'
import React from 'react'
import Button from '../../Components/Button'


const Index = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{backgroundColor:'red'}}>
  
      </View>
      <View style={{alignSelf:'center',marginTop:'10%'}}>
        <Text style={{fontSize:30,fontWeight:'600',alignSelf:'center',color:'purple'}}>WELCOME TO </Text>
        <Text style={{fontSize:30,fontWeight:'600',color:'purple'}}>MIDNITE LOGIN </Text>
        </View>
        
                          {/* footer============ */}
        
         <View style={{marginTop:'30%',width:'100%',height:'100%',backgroundColor:'#CBC3E3',borderRadius:20}}>
         <View style={{marginTop:90,width:'85%',height:40,alignSelf:"center",borderBottomWidth:1,borderBottomColor:'#FFFF'}}>
          <TextInput placeholder='UserName' placeholderTextColor={'purple'} style={{height:40,fontSize:16}}/>
         
        </View>
         <View style={{marginTop:30,width:'85%',height:40,alignSelf:"center",borderBottomWidth:1,borderBottomColor:'#FFFF'}}>
          <TextInput placeholder='Password' placeholderTextColor={'purple'} secureTextEntry style={{height:40,fontSize:16}}/>
        </View>
        <View style={{alignItems:'center'}}>
       <Button title={'LOGIN'}/>
       </View>
        <TouchableOpacity style={{alignSelf:'center',marginTop:30}} onPress={() => navigation.navigate('registration')}>
          <Text style={{fontSize:15,color:'purple'}}>Register Your Self</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
  mainContainer:{
  height:'100%',
  backgroundColor:'#f9f9f9'
}
})