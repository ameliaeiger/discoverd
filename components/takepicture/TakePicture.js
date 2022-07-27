import React, {useState, useEffect} from 'react'
import { Text, View, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Haptics from 'expo-haptics'
import {styles} from '../pickimage/PickImageStyles'
import { Button } from "react-native-paper"

export default function TakePicture() {
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
}
  return (
    <View style={styles.container}>
      <View>
        {!localUri ? 
          <Text>Take a Picture!</Text> :
          <Image
            style={styles.thumbnail}
            source={{uri:localUri}}
        />}
      </View>
      <Button
        onPress={openCameraAsync}
        icon="camera"
        mode="contained"
        style={styles.button}>
        Pressss
      </Button>
    </View>
  )
}
