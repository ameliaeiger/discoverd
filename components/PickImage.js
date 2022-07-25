import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Constants from 'expo-constants'
import * as ImagePicker from 'expo-image-picker'
import * as Haptics from 'expo-haptics';

//Libraries
import { Button } from "react-native-paper"

export default function PickImage() {
  
  const [localUri, setUri] = useState("")

    let openImagePickerAsync = async () => {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
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

      console.log("LOCALURISTATE >>", localUri)

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
  },
  thumbnail: {
    height: 200,
    width: 200,
  }
});
