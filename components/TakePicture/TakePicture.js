import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Constants from 'expo-constants'
import * as ImagePicker from 'expo-image-picker'
import * as Haptics from 'expo-haptics';
import {styles} from '../PickImage/PickImageStyles'

import { Button } from "react-native-paper"

export default function TakePicture() {

  let openCameraAsync = async () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if(!permissionResult.granted) {
      alert('Access to the camera is required for the app to function as intended')
      return
    }
    let imageResult = await ImagePicker.launchCameraAsync()

    if(pickerResult.cancelled) {
      return
    }
    console.log(imageResult)
}
  return (
    <View style={styles.container}>
      <View>{!localUri ? <Text>Please select an image to continue.</Text> :
        <Image
          style={styles.thumbnail}
          source={{uri:localUri}}
        />}
      </View>
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
