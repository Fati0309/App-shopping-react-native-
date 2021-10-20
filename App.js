import React, { useEffect } from "react";
import Home from "./screens/Home";
import Carte from "./screens/Carte";
import Test from "./screens/Test";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const tab = createBottomTabNavigator();
{
  /*const tabs = () => {
  <tab.Navigator>
    <tab.Screen
      name="Test"
      component={Test}
      options={{
        title: "Home",
        tabBarIcon: ({ size, color }) => (
          <AntDesign size={30} color="color" name="ios-home" />
        ),
      }}
    />
    <tab.Screen name="Cart" component={Carte} />
  </tab.Navigator>;
};*/
}
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
  return (
    <NavigationContainer>
      <MyApp />
    </NavigationContainer>
  );
}
