import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from "react-native-paper"

export default function Welcome() {
    console.log("welcome component")

  return (
      <View>
        <Text style={styles.text}>
            Welcome! 🌿
        </Text>
        <Text style={styles.text}>discoverd is a tool to help you identify the plant life around you.</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: "courier new",
    fontSize: 25,
  },
  button: {
    color: "#fff",
    backgroundColor: "#2EC17E",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    width: 150,
  }
});