import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import { AppRegistry } from 'react-native'
// import { Provider as PaperProvider } from 'react-native-paper'
import Dashboard from "./Views/Dashboard"
import Header from "./components/Header"

//Libraries
import * as ImagePicker from 'expo-image-picker'

export default function App() {


  return (
      <View style={styles.container}>
        <Header />
        <Dashboard />
        <StatusBar style="auto" />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    border: "2px solid red",
  },
})