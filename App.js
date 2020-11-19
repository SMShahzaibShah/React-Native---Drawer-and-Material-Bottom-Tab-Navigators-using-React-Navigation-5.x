// In App.js in a new project
import React  from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  HomeScreen  from "./screens/HomeScreen";
import  StartScreen  from "./screens/StartScreen";
import  LastScreen  from "./screens/LastScreen";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}
      screenOptions={
        {
          headerTitleAlign: "center",
          headerTintColor: 'black', // change header color
          headerStyle:{
          backgroundColor: 'lightblue',
          },
          headerRight: () => <Button title="Edit"></Button>
        }
      }
      >
        <Stack.Screen
        name="Start"
        component={StartScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
          title: 'Welcome',
          //headerShown: false,
          // headerTitleAlign: "center",
          // headerTintColor: 'black', // change header color
          // headerStyle:{
          //   backgroundColor: 'lightblue',
          // }
          headerRight: () => {}
        }}/>
        <Stack.Screen name="Dashboard" component={StartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;