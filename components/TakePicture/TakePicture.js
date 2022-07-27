import React, {useState, useEffect} from 'react'
import { Text, View, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Haptics from 'expo-haptics'
import {styles} from '../PickImage/PickImageStyles'
import { Button } from "react-native-paper"

export default function TakePicture({handleChange}) {
  const [localUri, setUri] = useState("")
  let openCameraAsync = async () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
      .catch(error => {
      return
      })
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if(!permissionResult.granted) {
      alert('Access to the camera is required for the app to function as intended')
      return
    }
    let imageResult = await ImagePicker.launchCameraAsync()
    if(imageResult.cancelled) {
      return
    }
    setUri(imageResult.uri)
    handleChange(image)
}
  return (
      <Button
        onPress={openCameraAsync}
        icon="camera"
        mode="contained"
        style={styles.button}>
        Pressss
      </Button>
  )
}
