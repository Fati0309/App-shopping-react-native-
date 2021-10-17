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
    flex: 1,
    margin: 20,
    padding: 80,
    backgroundColor: "rgba(255,255,255,0)",
    opacity: 0.7,
    justifyContent: "flex-end",
  },
  txt: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
});
