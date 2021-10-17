import * as React from "react";
import Categorie from "../components/categorie";
import Ttitle from "../components/Ttitle";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
export default function Test() {
  return (
    <ScrollView>
      <ImageBackground
        style={styles.bgImage}
        source={require("../assets/shopping2.jpg")}
      >
        <View>
          <Text style={styles.txt}>Our New Products</Text>
        </View>
      </ImageBackground>
      <Ttitle value={"categorie"} />
      <ScrollView horizontal={true}>
        {<Categorie titre="Beauty" src={require("../assets/beauté.jpg")} />}
        {<Categorie titre="Beauty" src={require("../assets/beauté.jpg")} />}
        {<Categorie titre="Beauty" src={require("../assets/beauté.jpg")} />}
        {<Categorie titre="Beauty" src={require("../assets/beauté.jpg")} />}
      </ScrollView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  bgImage: {
    height: 500,
    flex: 1,
    justifyContent: "flex-end",
  },
  txt: {
    padding: 20,
    margin: 5,
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
});
