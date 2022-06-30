import React from 'react';
import {Image,StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// import screens
import Login from '../Screens/Login/Index'
import Registration from '../Screens/Registration/Index'
import Profile from '../Screens/Profile/Index'
import EventPage from '../Screens/EventPage/Index'
import ChatScreen from '../Screens/ChatScreen/Index'
import EventRequest from '../Screens/EventRequest/Index'
import HomeScreen from '../Screens/HomeScreen/Index'
import CreateEvent from '../Screens/CreateEvent/Index';
// import screens


const Stack = createNativeStackNavigator();
const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="registration"
          component={Registration}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="profile"
          component={Profile}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="eventPage"
          component={EventPage}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="ChatScreen"
          component={ChatScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="eventRequest"
          component={EventRequest}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="homeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="createEvent"
          component={CreateEvent}
        />

      </Stack.Navigator>
    </NavigationContainer>

    
  );
}

export default Index

const styles = StyleSheet.create({})