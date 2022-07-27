import * as React from "react"
import { StyleSheet, View } from "react-native"
import { Text, Button } from "react-native-paper"
import { NavLink } from "react-router-dom"

export default function Welcome() {
    console.log("welcome component")
    const go = () => {
      console.log("yo")

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
        <NavLink>
          Button
        </NavLink>





        {/* <Button
          style={styles.button}
          icon="camera"
          mode="contained"
          onPress={go}
          onPress={openImagePickerAsync}
          >Get started!</Button> */}
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    fontFamily: "courier new",
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