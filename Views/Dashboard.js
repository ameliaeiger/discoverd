import { StatusBar } from 'expo-status-bar'
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
//Libraries
import * as ImagePicker from 'expo-image-picker'
import { Button } from 'react-native-paper'
import PickImage from "../components/PickImage/PickImage"
import TakePicture from "../components/TakePicture/TakePicture"
import PlantImage from '../components/ImageDisplay/PlantImage'
import Results from "../components/Results"
import Data from "./data.js"

export default function Dashboard() {
  const [imageUris, addImageUris] = useState([])
  const [allImages, createImageComponents] = useState([])
  const [suggestions, setSuggestions] = useState(Data().suggestions)
  const [resultsCards, setResultsCards] = useState("")
  const allResultsCards = makeArray(suggestions)

  const getView = (uri) => {
    createImageComponents([...allImages, <PlantImage uri={uri}/>])
  }
  const handleChange = (uri) => {
    addImageUris(imageUris => [...imageUris, uri])
    getView(uri)
  }
  return (
      <View style={styles.view}>
            <View style={styles.container}>
              <ScrollView style={styles.scrollView}>
                {allResultsCards}
              </ScrollView>
            <ScrollView >
              {allImages}
            </ScrollView>
              <View style={styles.buttonContainer}>
                <PickImage handleChange={handleChange}/>
                <TakePicture handleChange={handleChange}/>
              </View>
            </View>
      </View>
  )
}

const makeArray = (array) => {
  let emptyArray = []
  array.forEach(suggestion => {
    emptyArray.push(
      <Results
      data={suggestion}/>
      )
  })
  return emptyArray
}

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: 500,
  },
  container: {
    flexDirection: "column",
    backgroundColor: '#A7D9A3',
    justifyContent: 'center',
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  button: {
    color: "#fff",
    backgroundColor: "#2EC17E",
    alignItems: "center",
    justifyContent: "center",
  }
})