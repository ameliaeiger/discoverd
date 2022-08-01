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


export default function ResponsePage({ route, navigation }) {
  const { uris } = route.params;
  const [suggestions, setSuggestions] = useState(Data().suggestions)
  const [resultsCards, setResultsCards] = useState([])
  const [errMessage, setErr] = useState(null)

  const handleSubmit = (uri) => {
    const data = {
        api_key: API_KEY,
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
       .then((response) => {
        if (!response.ok) {
          console.log(response);
          throw new Error(response.status + " " + response.statusText);
        } else {
          return response.json();
        }
      })
       .then(result => {
         setSuggestions(result.suggestions)
       })
       .catch((error) => {
         setErr(`${error}`);
       });
  }

  const createResults = () => {
    if(!errMessage) {
      const resultsCardsArr = suggestions.map((suggestion) => {
            return <Results key={suggestion.id} data={suggestion}/>
      })
      setResultsCards(resultsCardsArr)
    }
  }

  useEffect(() => {
    if(!errMessage){
      handleSubmit(uris)
        setTimeout(() => {
          setSuggestions(Data2().suggestions)
        }, 1000)
    }
  },[])

  useEffect(() => {
    createResults()
  }, [suggestions, errMessage])
if(errMessage) {
  console.log("88", errMessage)
  return(
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>{errMessage}</Text>
    <Text>We are incredibly sorry but something went wrong.</Text>
    <Text>Please return to the previous page and try again.</Text>
  </View>
  )
}else {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView style={styles.scrollView}>
        {resultsCards}
        <Text>stuff</Text>
      </ScrollView>
    </View>
  )
}
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
