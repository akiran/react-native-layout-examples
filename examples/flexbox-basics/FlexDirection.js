import React from "react";
import { View, StyleSheet } from "react-native";
import Box from "../../helpers/Box";

export default class FlexDirection extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Box backgroundColor="teal" />
        <Box backgroundColor="aqua" />
        <Box backgroundColor="blue" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  }
});
