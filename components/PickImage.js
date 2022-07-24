import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Button } from "react-native-paper"
import Constants from 'expo-constants'
import * as ImagePicker from 'expo-image-picker'
import { render } from 'react-dom'

export default function OpenCamera() {
  const [localUri, setUri] = useState("")
    let openImagePickerAsync = async () => {
      console.log("u been clicked n picked bro")
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if(!permissionResult.granted) {
        alert('Access to camera roll is required for the app to function as intended')
        return
      }
      let pickerResult = await ImagePicker.launchImageLibraryAsync()
      if(pickerResult.cancelled) {
        return
      }
      setUri(pickerResult)
      }
      return (
          <View style={styles.container}>
                <Button 
                onPress={openImagePickerAsync} 
                icon="camera" 
                mode="contained" 
                style={styles.button}>
                Pressss
                </Button>
          </View>
      )
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    border: "2px solid blue",
  },
  button: {
    flex: .08,
    color: "#fff",
    backgroundColor: "#2EC17E",
    alignItems: "center",
    justifyContent: "center",
  }
});