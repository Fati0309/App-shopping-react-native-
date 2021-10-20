import * as React from "react";
import Categorie from "../components/categorie";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Produit from "../components/Produit";
export default function Test() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../assets/shopping2.jpg")}
      >
        <View>
          <Text style={styles.txt}>Our New Products</Text>
        </View>
      </ImageBackground>
      <Text style={styles.txt2}> Categorie </Text>

      <ScrollView horizontal={true} style={styles.scrlH}>
        {<Categorie titre="Beauty" src={require("../assets/beauté.jpg")} />}
        {
          <Categorie
            titre="Bijoux"
            src={require("../assets/catégori-bijoux.jpg")}
          />
        }
        {
          <Categorie
            titre="vetement"
            src={require("../assets/cat_vetment.jpg")}
          />
        }
        {
          <Categorie
            titre="chaussure"
            src={require("../assets/cat_chaussure.jpg")}
          />
        }
      </ScrollView>
      <Text style={styles.txt2}> All Products </Text>
      <ScrollView>
        <Produit
          titre="T-Shirt"
          prix="10$"
          src={require("../assets/produit_tshirt.jpg")}
        />
        <Produit
          titre="T-Shirt"
          prix="10$"
          src={require("../assets/produit_tshirt.jpg")}
        />
        <Produit
          titre="T-Shirt"
          prix="10$"
          src={require("../assets/produit_tshirt.jpg")}
        />
        <Produit
          titre="T-Shirt"
          prix="10$"
          src={require("../assets/produit_tshirt.jpg")}
        />

        <Produit
          titre="T-Shirt"
          prix="10$"
          src={require("../assets/produit_tshirt.jpg")}
        />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  bgImage: {
    height: 200,
    justifyContent: "flex-end",
  },
  txt: {
    padding: 20,
    margin: 5,
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  txt2: {
    margin: 8,
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
  scrlH: {
    height: 300,
  },
});
