import React from 'react'

//COMPONENTS
import {styles} from './PickImageStyles'

//LIBRARIES
import { Button } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker'
import * as Haptics from 'expo-haptics'

const PickImage = ({handleChange}) => {

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
      handleChange(
        pickerResult.base64, 
        pickerResult.uri
        )
      }
  return (
      <Button
        testID='Upload-Image'
        accessibilityLabel='Upload Image'
        onPress={openImagePickerAsync}
        icon="animation-outline"
        mode="contained"
        style={styles.button}
        contentStyle={{padding:15}}
        >
        Upload Image
      </Button>
  )
}

export default PickImage
