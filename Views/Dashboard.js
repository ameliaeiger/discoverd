import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
//Libraries
import PickImage from "../components/pickimage/PickImage.js"
import TakePicture from '../components/takepicture/TakePicture.js'

export default function Dashboard() {
  console.log("dashboard component")
  return (
      <View>
        <Text>Dashboard</Text>
            <View style={styles.container}>
              <PickImage />
              <TakePicture />
            </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: "#fff",
    backgroundColor: "#2EC17E",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    width: 150,
  }
})