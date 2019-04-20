import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Link({ onPress, children }) {
  return (
    <Text onPress={onPress} style={styles.link}>
      {children}
    </Text>
  );
}

export default class Home extends React.Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  link: {
    padding: 10,
    color: "#0645AD"
  }
});
