import React from "react";
import { View, StyleSheet } from "react-native";

export default function Box({
  backgroundColor = "#CCC",
  height = 100,
  width = 100
}) {
  const style = {
    backgroundColor,
    height,
    width
  };
  return <View style={style} />;
}

const styles = StyleSheet.create({});
