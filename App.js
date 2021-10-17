import React, { useEffect } from "react";
import Home from "./screens/Home";
import Test from "./screens/Test";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import {SplashScreen} from "react-native-splash-screen";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyApp() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
}

export default function App() {
  {
    /*const splash={()=>{
    useEffect(() => {
      SplashScreen.hide(;)
    }, [])
  }}*/
  }
  return (
    <NavigationContainer>
      <MyApp />
    </NavigationContainer>
  );
}
