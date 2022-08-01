import { StatusBar } from 'expo-status-bar'
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import {API_KEY} from "../API_KEY.js"

//Libraries
import * as ImagePicker from 'expo-image-picker'
import { Button } from 'react-native-paper'
import PickImage from "../components/PickImage/PickImage"
import TakePicture from "../components/TakePicture/TakePicture"
import PlantImage from '../components/ImageDisplay/PlantImage'
import { useFonts } from "expo-font"
import Results from "../components/Results"
import Data from "./data.js"
import * as Haptics from 'expo-haptics';


export default function Dashboard({ navigation, handleChange, allImages, images, dimensions, apiKey }) {
  const [hasImages, setHasImages] = useState("")

  useEffect(() => {
    if (!allImages[0]){
      setHasImages(false)
      console.log(hasImages)
      return
    } else if (allImages){
      setHasImages(true)
      console.log(hasImages)
      return
    }
  },[hasImages])

  const displayText = () => {
    return (
      <View style={{width: dimensions.width,
        height: 400, maxHeight: 400, backgroundColor:"white", borderTopWidth:10, borderBottomWidth:10, borderColor:"green", justifyContent:"center", alignItems:"center", color:"grey"}}>
        <Text style={styles.displayText}>
          Upload an image to get started
        </Text>
      </View>
    )
  }

  const displayImages = () => {
    return (
      <ScrollView horizontal={true} contentContainerStyle={{justifyContent:"center", alignItems:"center"}} style={{width: dimensions.width,
        height: 400, maxHeight:400, enum:"black", backgroundColor:"white", borderTopWidth:10, borderBottomWidth:10, borderColor:"green"}}>
            {allImages}
      </ScrollView>
    )
  }


  return (

    <View testID='Dashboard' accessibilityLabel='Dashboard' style={{
      width: dimensions.width,
      maxHeight: dimensions.height,
      }}>
        {!hasImages ? displayText() : displayImages()}
      <View testID='Button-Container' accessibilityLabel='Button Container' style={styles.buttonContainer}>
        <View style={{flexDirection:"row"}}>
          <PickImage handleChange={handleChange}/>
          <TakePicture handleChange={handleChange}/>
        </View>
      </View>
      <View style={styles.buttonContainer}>
          <Button
          testID='Response-Button'
          accessibilityLabel='Check Possible Plant'
          style={styles.submitButton}
          title="Go to Response"
          // type="contain"
          icon="alarm-light-outline"
          color="white"
          onPress={() => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
            .catch(error => {
              return
            })
            navigation.navigate("responsePage", {apiKey: apiKey,
            uris:images,
            })
          }}> Discover!
          </Button>
        </View>
  </View>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    transform: [{scaleX: -1}],
  },
  submitButton: {
    elevation: 5,
    fontSize: 40,
    height: 150,
    width: 250,
    borderRadius: 5,
    margin: 5,
    backgroundColor:"green",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    height: "20%",
  },
  displayText: {
    fontFamily: "Poppins"
  }
})
