import React, {useState, useEffect} from 'react'
import { Text, View, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Haptics from 'expo-haptics';
import {styles} from './PickImageStyles'
//Libraries
import { Button } from "react-native-paper"

export default function PickImage({handleChange}) {

  const [localUri, setUri] = useState("")

    let openImagePickerAsync = async () => {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
        .catch(error => {
          return
        })
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if(!permissionResult.granted) {
        alert('Access to camera roll is required for the app to function as intended')
        return
      }

      let pickerResult = await ImagePicker.launchImageLibraryAsync()
      if(pickerResult.cancelled) {
        return
      }
      setUri(pickerResult.uri)
      handleChange(pickerResult.uri)
      }



  return (
      <Button
        onPress={openImagePickerAsync}
        icon="camera"
        mode="contained"
        style={styles.button}>
        Upload Image
      </Button>
  )
}