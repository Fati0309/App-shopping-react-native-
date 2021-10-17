import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Pparagraph(props) {
  return (
    <View>
      <Text style={styles.paragraph}>
         {props.value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    marginLeft:24,
    fontSize: 16,
    color:'white',
    fontWeight: 'bold',
  },
});
