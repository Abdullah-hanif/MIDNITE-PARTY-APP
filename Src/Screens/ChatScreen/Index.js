import React from "react"
import { TouchableOpacity,View, Text, StyleSheet, Image ,TextInput} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

// import Icon from "react-native-vector-icons/AntDesign"

 const Index = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <View style={styles.cart}>
      <Image
              source={{
                uri: 'https://i.pinimg.com/736x/a1/65/64/a1656436b44d86e2a8dea2360393846d--reception-design-wedding-reception.jpg',
              }}
              style={{width:40,height:40, borderRadius: 360}}
            />
        <Text style={styles.txt1}>Farhan Khan</Text>
        <Text style={styles.txt2}>.Online</Text>
      </View>
      <View style={styles.To}>
      <View
  style={{
    
    borderWidth:1,
    width:'100%',
    borderColor:'purple'
    
  }}
/>
        
      </View>
      <View>
        <View style={styles.cn}>
          <Text style={styles.msg}>Hey How are you</Text>
        </View>
       
        <View style={{marginBottom:10,marginLeft:20,paddingBottom:0}}>
          <Text style={styles.timing}>12:50 PM</Text>
          </View>
        <View>


         <Text style={styles.msgL}>I am fine thank you</Text>
        </View>
        <Text style={styles.timingL}>06:50 AM</Text>
        <View style={styles.cn}>
          <Text style={styles.msg}>Hey How are you</Text>
        </View>
        <View style={{marginBottom:10,marginLeft:20,paddingBottom:0,paddingTop:0}}>
        <Text style={styles.timing}> 2 mint ago</Text>
        </View>
        <Text style={styles.msgL}>I am fine thank you</Text>
        <Text style={styles.timingL}>Just Now</Text>
      </View>
      </View>
      <View style={styles.cart1}>
        <View>
        <TextInput placeholder="please Type Something..." placeholderTextColor="white"  style={{color:'white',backgroundColor:'purple',marginLeft:10,marginTop:15}} />
        </View>
        <View style={styles.snd}>
          <TouchableOpacity onPress={() => navigation.navigate("eventRequest")} style={{width:40,height:40,justifyContent:'center',alignItems:'center'}}   >
          <Image source={require('../../../assets/forwardArrow.png')} />
        </TouchableOpacity> 
        </View>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    justifyContent: 'space-between',
  },
  img: {
    border: 1,
    borderRadius: 360,
    height: 40,
    width: 40,
    marginLeft: 10,
  },
  txt1: {
    color: "black",
    marginLeft: 10,
  },
  txt2: {
    color: "green",
    marginLeft: 10,
  },
  txt3: {
    color: "white",
    height: 30,
    width: "30%",
    border: 1,
    borderRadius:50,
    borderColor: 'grey',
    backgroundColor: 'grey',
    paddingTop: 5,
    
  },
  cart: {
    height: '5%',
    width: "100%",
   
    alignItems: "center",
    marginTop: 15,
    flexDirection: "row",
    paddingLeft:10
  },
  cart1: {
    borderTopRightRadius:15,
    borderTopLeftRadius:15,
    justifyContent:'space-between',
    height: 70,
    flexDirection:'row',
    width: "100%",
    backgroundColor: "purple",
    //justifyContent: "center",
    
    
    
  },
  line: {
    backgroundColor:'grey',
    height: 3,
    width: "45%",
  },
  To: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",

  },
  msg: {
    color: "white",
  },
  msgL: {
    backgroundColor: '#d3d3d3',
    color:'black',
    alignSelf: 'flex-end',
    padding: 12,
 marginHorizontal:20,
    marginTop: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  },
  timing: {
    color: "black",
    marginTop: 8,
    fontSize:10,
    
  },
  timingL: {
    color: "black",
    alignSelf: 'flex-end',
    marginTop: 10,
    fontSize:10,
    marginRight:20
  },
  snd: {
    marginBottom:10,
    borderRadius: 360,
    alignSelf:'flex-end',
    backgroundColor: '#d3d3d3',
    justifyContent:'center',
    alignItems:'center',
    marginRight:10
  },
  cn: {
    backgroundColor:'grey',
    alignSelf: 'flex-start',
    padding: 12,
 marginHorizontal:20,
    marginTop: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20
  }
})
export default Index;