import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./examples";
import Centering from "./examples/Centering";

const AppNavigator = createStackNavigator(
  {
    Home,
    Centering
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
