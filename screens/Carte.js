import * as React from "react";
import { useState, useEffect } from "react";
import { Text, StyleSheet, ScrollView, View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Carte({ navigation }) {
  const [List, setList] = useState(null);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("PRD+");
      if (jsonValue != null) {
        setList(JSON.parse(jsonValue));
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
    <ScrollView style={styles.container}>
      {List !== null ? (
        List.map((value) => {
          return (
            <View>
              <Text>{value[0]}</Text>
              <Text>{value[1]}</Text>
            </View>
          );
        })
      ) : (
        <View></View>
      )}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
  },
});
