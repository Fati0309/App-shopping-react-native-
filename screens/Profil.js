import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { logout, selectUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
export default function Profil() {
  const navigation = useNavigation();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handlelogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={(e) => {
          handlelogout(e);
          navigation.navigate("Home");
        }}
      >
        <Text>Déconnexion</Text>
      </TouchableOpacity>
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
