import React from "react";
import { View, StyleSheet } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Link from "../../helpers/Link";
import Centering from "./Centering";

export default class FlexboxBasics extends React.Component {
  static navigationOptions = {
    drawerLabel: "FlexboxBasics"
  };
  render() {
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <View style={styles.container}>
        <Link onPress={() => navigate("FlexDirection")}>FlexDirection</Link>
        <Link onPress={() => navigate("Centering")}>Centering</Link>
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
