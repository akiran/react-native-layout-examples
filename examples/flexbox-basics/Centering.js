import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Box from "../../helpers/Box";

export default class Centering extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Box />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
