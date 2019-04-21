import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Link from "../../helpers/Link";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Centering from "./Centering";

class FlexboxBasics extends React.Component {
  static navigationOptions = {
    drawerLabel: "FlexboxBasics"
  };
  render() {
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <View style={styles.container}>
        <Link onPress={() => navigate("Centering")}>Centering</Link>
      </View>
    );
  }
}

const FlexboxBasicsStack = createStackNavigator(
  {
    FlexboxBasics,
    Centering
  },
  {
    initialRouteName: "FlexboxBasics"
  }
);

export default createAppContainer(FlexboxBasicsStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});
