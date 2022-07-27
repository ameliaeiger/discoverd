import React, {useState, useEffect} from 'react'
import { Text, View, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Haptics from 'expo-haptics';
// import {styles} from './PickImageStyles'
//Libraries
import { Button } from "react-native-paper"

export default function PickImage() {
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
      }
  return (
    <View style={styles.container}>
      <View>
        {!localUri ? 
        <Text>
          Please select an image to continue.
        </Text> :
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

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: "#e4e4e4",
      justifyContent: "center",
      borderColor: "#BFBFBF",
      borderWidth: 1,
      elevation: 5,
      marginTop: 20,
      width: 210,
      height: 70,
    },
    thumbnail: {
      height: 200,
      width: 200,
    }
  })