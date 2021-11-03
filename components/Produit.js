import * as React from "react";
import { useState } from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Produit(props) {
  const [fav, usefav] = useState(false);
  const [plus, useplus] = useState(false);
  const [List, setList] = useState([]);
  const storeData = async (Produit) => {
    try {
      let oldData = [];

      //get the data from stock
      oldData = await getData();

      //add item in data (= list = panier)
      setList([...oldData, Produit]);
      //change to json format
      const jsonValue = JSON.stringify([...oldData, Produit]);

      //update the stock (data = data + item)
      await AsyncStorage.setItem("PRD+", jsonValue);
    } catch (e) {
      alert(e);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("PRD+");
      if (jsonValue != null) {
        return JSON.parse(jsonValue);
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={props.src}
        style={{
          height: 300,
          width: 300,
          resizeMode: "stretch",
          margin: 10,
        }}
      />
      <View style={styles.bttn}>
        <Text style={styles.txt}>{props.titre}</Text>
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              const list_produit = [props.titre, props.prix, props.src];
              useplus(!plus);
              storeData(list_produit);
            }}
          >
            <AntDesign name="plus" size={30} color={plus ? "red" : "black"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => usefav(!fav)}>
            <AntDesign name="hearto" size={30} color={fav ? "red" : "black"} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.txt}> {props.prix}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
  },
  btn: {
    flexDirection: "row",
  },
  bttn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  txt: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 5,
  },
  icon: {
    margin: 10,
  },
});
