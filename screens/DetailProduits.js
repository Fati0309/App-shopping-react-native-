import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default function DetailProduits () {
 
  return (
    <View style={styles.container}>
        <Text>DetailProduits</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
});
