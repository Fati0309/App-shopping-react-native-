import * as React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import Ttitle from "../components/Ttitle";
import Bbutton from "../components/Bbutton";
import Pparagraphe from "../components/Pparagraphe";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
//import * as Animatable from "react-native-animatable";
export default function Home({}) {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/Background.jpg")}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Ttitle col={"white"} value={"Shopping"} />
          <Pparagraphe value={"Let's start with our collection."} />
          <Bbutton
            value={"Get started"}
            onpress={() => {
              navigation.navigate("tabs");
            }}
            bg={1}
          />
          <Bbutton
            value={"Creat Account"}
            bg={0.6}
            onpress={() => {
              navigation.navigate("SignUp");
            }}
          />
        </Card>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  card: {
    backgroundColor: "rgba(255,255,255,0)",
    padding: 10,
    //  marginBottom:10
  },
});
