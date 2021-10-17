import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
export default function Bbutton(props) {
  const styles = StyleSheet.create({
    btn: {
      justifyContent: "center",
      margin: 10,
      padding: 20,
      backgroundColor: "white",
      opacity: props.bg,
      borderRadius: 30,
      fontWeight: "bold",
      marginLeft: 24,
      fontSize: 14,
    },
    txt: {
      textAlign: "center",
    },
  });
  return (
    <View style={styles.btn}>
      <TouchableOpacity onPress={() => props.onpress()}>
        <Text style={styles.txt}>{props.value} </Text>
      </TouchableOpacity>
    </View>
  );
}
