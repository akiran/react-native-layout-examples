import React from "react";
import { View, Text, Picker, StyleSheet } from "react-native";
import Box from "../../helpers/Box";

export default class JustifyContent extends React.Component {
  state = {
    JustifyContent: "flex-start"
  };
  render() {
    const { justifyContent } = this.state;
    return (
      <View>
        <View style={styles.optionsContainer}>
          <Text style={{ textAlign: "center" }}>JustifyContent options</Text>
          <Picker
            selectedValue={justifyContent}
            onValueChange={value => this.setState({ justifyContent: value })}>
            <Picker.Item label="flex-start" value="flex-start" />
            <Picker.Item label="flex-end" value="flex-end" />
            <Picker.Item label="center" value="center" />
            <Picker.Item label="space-between" value="space-between" />
            <Picker.Item label="space-around" value="space-around" />
            <Picker.Item label="space-evenly" value="space-evenly" />
          </Picker>
        </View>
        <View style={[styles.container, { justifyContent }]}>
          <Box backgroundColor="teal" />
          <Box backgroundColor="aqua" />
          <Box backgroundColor="blue" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  optionsContainer: {
    marginVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "black"
  },
  container: {
    flex: 1,
    flexDirection: "row"
  }
});
