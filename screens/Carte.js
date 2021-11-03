import * as React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
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
  const videData = async () => {
    try {
      const jsonValue = JSON.stringify([]);
      await AsyncStorage.setItem("PRD+", jsonValue);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getData();
    return;
  }, [List, setList]);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
      <ScrollView style={styles.container}>
        <View>
          <TouchableOpacity
            style={{ backgroundColor: "red" }}
            onPress={() => videData()}
          >
            <Text> clear All</Text>
          </TouchableOpacity>
        </View>
        {List !== null ? (
          List.map((value) => {
            return (
              <View style={styles.con}>
                <View style={styles.produit}>
                  <Text>{value[0]}</Text>
                  <Text>{value[1]}</Text>
                </View>
              </View>
            );
          })
        ) : (
          <View>
            <Text style={{ fontWeight: "bold" }}>Votra panier est vide </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  con: {
    flex: 1,
    flexDirection: "row",
    height: 100,
  },
  produit: {
    margin: 5,
  },
  vide: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
