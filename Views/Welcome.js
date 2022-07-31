import * as React from "react"
import { StyleSheet, View, Dimensions } from "react-native"
import { Text, Button } from "react-native-paper"
import { useFonts } from "expo-font"
import { useState, useEffect } from "react"
import { NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Welcome({ navigation }) {
    console.log("welcome component")
    const screenDimensions = Dimensions. get('window')
    const [height, setHeight] = useState(screenDimensions.height)
    const [width, setWidth] = useState(screenDimensions.width)

    const [loaded] = useFonts({
        Poppins: require('../assets/poppinsLight.ttf'),
      })
      if (!loaded) {
        return null
      }
  return (
      <View testID='Welcome-Page' accessibilityLabel='Welcome Page' style={{
        backgroundColor: 'white',
        justifyContent: 'center',
        height: height,
      }}>
          <Text testID='Greeting' accessibilityLabel='Welcome with leaf' style={styles.headerText}>
              Welcome! 🌿
          </Text>
          <Text testID='Greeting-Info' accessibilityLabel='Info about app' height={height} style={styles.text}>
            discoverd is a tool to help you identify the plant life around you.
          </Text>
          <Button
        testID='Nav-Button-Dashboard'
        accessibilityLabel='Button To Dashboard'
        mode="contained"
        onPress={() => navigation.navigate("home")}
        >Get started!
        </Button>
      </View>
  )
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "Poppins",
    fontSize: 30,
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 20,
  },
})

{/* <Button
style={styles.button}
mode="contained"
onPress={event => {
  navigation.navigate("home")}}
>Get started!
</Button> */}
