import * as React from "react";
import { useState, useEffect } from "react";
import { Text, StyleSheet, ScrollView, View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Carte({ navigation }) {
  const [value, setvalue] = useState(null);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("PRD+");
      if (jsonValue != null) {
        setvalue(JSON.parse(jsonValue));
        //alert(jsonValue);
      }
    } catch (e) {
      alert(e);
    }
  };
  useEffect(() => {
    getData();
    return;
  }, []);

  return (
    <ScrollView>
      {value !== null ? (
        <View>
          <Image source={value[2]} />
          <Text>{value[0]}</Text>
          <Text>{value[1]}</Text>
        </View>
      ) : (
        <View />
      )}
    </ScrollView>
  );
}
