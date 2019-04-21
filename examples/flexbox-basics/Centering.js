import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Centering extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Centering route</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
