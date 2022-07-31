import * as React from "react"
import { StyleSheet, View, Dimensions } from "react-native"
import { Text, Button } from "react-native-paper"
import { useFonts } from "expo-font"
import { useState, useEffect } from "react"
import { NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Welcome({ navigation, dimensions }) {
    console.log("welcome component")
    const [loaded] = useFonts({
        Poppins: require('../assets/poppinsLight.ttf'),
      })
      if (!loaded) {
        return <Text>loading</Text>
      }
    return (
      <View style={{
        backgroundColor: 'white',
        justifyContent: 'center',
        height: dimensions.height,
        width: dimensions.width,
      }}>
          <Text style={styles.headerText}>
              Welcome! 🌿
          </Text>
          <Text style={styles.text}>
            discoverd is a tool to help you identify the plant life around you.
          </Text>
          <Button
        mode="contained"
        color="green"
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