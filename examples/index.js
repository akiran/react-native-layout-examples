import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Link from "../helpers/Link";

export default class Home extends React.Component {
  render() {
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <View style={styles.container}>
        <Link onPress={() => navigate("FlexboxBasics")}>FlexboxBasics</Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});
