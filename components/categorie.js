import * as React from "react";
import { ImageBackground, View, Text, StyleSheet } from "react-native";
export default function Categorie(props) {
  return (
    <ImageBackground style={styles.bgImage} source={props.src}>
      <View>
        <Text style={styles.txt}>{props.titre}</Text>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  bgImage: {
    width: 200,
    margin: 10,
    backgroundColor: "rgba(255,255,255,0)",
    opacity: 0.8,
    justifyContent: "center",
  },
  txt: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
