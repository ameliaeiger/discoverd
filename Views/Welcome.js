import React, { useState } from "react"
import { StyleSheet, View, KeyboardAvoidingView} from "react-native"

//LIBRARIES
import { Text, Button, TextInput } from "react-native-paper"
import { useFonts } from "expo-font"
import * as Haptics from 'expo-haptics'

const Welcome = ({ navigation, dimensions, setApiKey }) => {

  const [key, setKey] = useState('')
  const [loaded] = useFonts({
      Poppins: require('../assets/poppinsLight.ttf'),
    },[])
    if (!loaded) {
      return <Text>loading</Text>
    }

  return (
    <KeyboardAvoidingView behavior="height" style={{flex:1}}>
      <View testID='Welcome-Page' accessibilityLabel='Welcome Page' style={{
        flex:1,
        backgroundColor: 'white',
        justifyContent: 'center',
        height: dimensions.height,
        width: dimensions.width,
      }}>
        <View style={styles.welcomeText}>
          <Text testID='Greeting' accessibilityLabel='Welcome with leaf' style={styles.headerText}>
              Welcome! 🌿
          </Text>
          <Text testID='Greeting-Info' accessibilityLabel='Info about app' style={styles.text}>
            discoverd is a tool to help you identify the plant life around you.
          </Text>
        </View>
        <View style={{width: dimensions.width, alignItems:"center", marginTop:"4%"}}>
          <Button
              testID='Nav-Button-Dashboard'
              accessibilityLabel='Button To Dashboard'
              style={styles.button}
              contentStyle={{padding:10}}
              mode="contained"
              onPress={() => {
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
                .catch(error => {
                  return
                })
                navigation.navigate("Home")
              }}
            >Get started!
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Welcome

const styles = StyleSheet.create({
  welcomeText: {
    margin: 25,
  },
  headerText: {
    fontFamily: "Poppins",
    fontSize: 35,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    fontSize: 20,
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 20,
    marginBottom:"20%"
  },
  button: {
    width: "50%",
    justifyContent:"center",
    backgroundColor:"#147d00",
  },
})
