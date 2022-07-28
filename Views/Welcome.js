import * as React from "react"
import { StyleSheet, View } from "react-native"
import { Text, Button } from "react-native-paper"
import * as Linking from "expo-linking"

export default function Welcome() {
    console.log("welcome component")

    const handleClick = (e) => {
      e.preventDefault()
      console.log("button pressed")
      Linking.openURL("http://localhost:19006/dashboard")
    }

  return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>
              Welcome! 🌿
          </Text>
          <Text style={styles.text}>
            discoverd is a tool to help you identify the plant life around you.
          </Text>
        </View>

        <Button
          style={styles.button}
          icon="camera"
          mode="contained"
          onPress={event => handleClick(event)}
          >Get started!
        </Button>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    // fontFamily: "courier new",
    fontSize: 30,
  },
  button: {
    backgroundColor: "green",
    justifyContent: "center",
    height: 40,
    width: 200,
    fontSize: 30,
  },
})