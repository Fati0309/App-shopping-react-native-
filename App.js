import React, { useEffect } from "react";
import Home from "./screens/Home";
import Carte from "./screens/Carte";
import Test from "./screens/Test";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Profil from "./screens/Profil";
import SingUp from "./screens/SingUp";
const Stack = createStackNavigator();
const tab = createBottomTabNavigator();
const tabs = () => {
  return (
    <tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <tab.Screen
        name="Home"
        component={Test}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <tab.Screen
        name="Cart"
        component={Carte}
        options={{
          tabBarLabel: "Panier",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />
      <tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </tab.Navigator>
  );
};

function MyApp() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="tabs" component={tabs} />
      <Stack.Screen name="SingUp" component={SingUp} />
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
