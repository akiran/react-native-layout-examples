import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Link({ onPress, children }) {
  return (
    <Text onPress={onPress} style={styles.link}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  link: {
    padding: 10,
    color: "#0645AD"
  }
});
