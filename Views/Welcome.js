import * as React from "react"
import { StyleSheet, View, Dimensions, TextInput, Alert} from "react-native"
import { Text, Button } from "react-native-paper"
import { useFonts } from "expo-font"
import { useState, useEffect } from "react"
import { NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Welcome({ navigation, dimensions, setApiKey, apiKey }) {
    const [loaded] = useFonts({
        Poppins: require('../assets/poppinsLight.ttf'),
      })
      if (!loaded) {
        return <Text>loading</Text>
      }
  return (
      <View testID='Welcome-Page' accessibilityLabel='Welcome Page' style={{
        backgroundColor: 'white',
        justifyContent: 'center',
        height: dimensions.height,
        width: dimensions.width,
      }}>
          <Text testID='Greeting' accessibilityLabel='Welcome with leaf' style={styles.headerText}>
              Welcome! 🌿
          </Text>
          <Text testID='Greeting-Info' accessibilityLabel='Info about app' style={styles.text}>
            discoverd is a tool to help you identify the plant life around you.
          </Text>
          <Text style = {{color:'red'}}>*Required</Text>
          <TextInput
          placeholder='Please input API key from Plant.ID'
          value={apiKey}
          onChangeText= {setApiKey}
          />
          <Button
        testID='Nav-Button-Dashboard'
        accessibilityLabel='Button To Dashboard'
        mode="contained"
        color="green"
        onPress={() => {
          if(!apiKey || apiKey.length < 50){
          return alert("Please Fill Out All Required Fields")
          }
          navigation.navigate("home")
        }}
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
