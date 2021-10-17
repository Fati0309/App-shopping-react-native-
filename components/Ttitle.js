import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Ttitle(props) {
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
    margin: 24,
    fontSize: 26,
    fontWeight: 'bold',
    color:'white',
    textAlign: 'left',
  },
 
});
