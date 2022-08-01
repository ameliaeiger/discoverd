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

import Results from "../components/Results"
import Data from "./data.js"
import Data2 from './data2.js';


export default function ResponsePage({ route, navigation, apiKey }) {
  const { uris } = route.params;
  const [suggestions, setSuggestions] = useState(Data().suggestions)
  const [resultsCards, setResultsCards] = useState([])

  const handleSubmit = (uri) => {
    const data = {
        api_key: apiKey,
        images: [uri[0]],
        plant_language: 'en',
            plant_details: ['common_names',
                            'url',
                            'name_authority',
                            'wiki_description',
                            'taxonomy',
                            'synonyms',
                            'wiki_image'],
      }
      fetch('https://api.plant.id/v2/identify', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
            "Api-Key": API_KEY,
         },
         body: JSON.stringify(data),
       })
       .then(response => response.json())
       .then(result => {
         setSuggestions(result.suggestions)
         console.log('Success:', result);
       })
       .catch((error) => {
         console.error('Error:', error);
       });
  }

  const createResults = () => {
    const resultsCardsArr = suggestions.map((suggestion) => {
          return <Results key={suggestion.id} data={suggestion}/>
    })
    setResultsCards(resultsCardsArr)
  }

  useEffect(() => {
    handleSubmit(uris)
      setTimeout(() => {
        setSuggestions(Data2().suggestions)
        console.log("done responsepage 66", suggestions)
      }, 1000)
  },[])

  useEffect(() => {
    createResults()
  }, [suggestions])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView style={styles.scrollView}>
        {resultsCards}
        <Text>stuff</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    border: "2px solid red",
  },
})
