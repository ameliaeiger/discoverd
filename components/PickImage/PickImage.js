import React, {useState, useEffect} from 'react'
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

      let pickerResult = await ImagePicker.launchImageLibraryAsync({base64: true})
      if(pickerResult.cancelled) {
        return
      }
      setUri(pickerResult.uri)
      handleChange(pickerResult.base64, pickerResult.uri)
      }
  return (
      <Button
        testID='Upload-Image'
        accessibilityLabel='Upload Image'
        onPress={openImagePickerAsync}
        icon="camera"
        mode="contained"
        style={styles.button}>
        Upload Image
      </Button>
  )
}
