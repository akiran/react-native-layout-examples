import React from "react";
import { StyleSheet, View } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import Home from "./examples";
import FlexboxBasics from "./examples/flexbox-basics";

const AppNavigator = createDrawerNavigator(
  {
    FlexboxBasics
  },
  {
    initialRouteName: "FlexboxBasics"
  }
);

export default createAppContainer(AppNavigator);
