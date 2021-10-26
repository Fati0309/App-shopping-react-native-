import * as React from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import { List } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Carte({ navigation }) {
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@key_product");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      alert(e);
    }
  };
  return (
    <ScrollView>
      <View>{getData()}</View>
    </ScrollView>
  );
}
