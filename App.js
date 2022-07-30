import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import Dashboard from "./Views/Dashboard";
import Results from './components/Results';
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {API_KEY} from "./API_KEY.js"
import config from "./config.js"

import PickImage from "./components/PickImage/PickImage"
import TakePicture from "./components/TakePicture/TakePicture"
import PlantImage from './components/ImageDisplay/PlantImage'
// ---------------- libraries ---------------- //
// import PickImage from "../components/PickImage/PickImage"
// import TakePicture from "../components/TakePicture/TakePicture"
import Data from "./Views/data.js"


export default function App() {
  console.log(config)
  const mykey = config.MY_API_TOKEN
  const secretkey = config.SECRET_KEY
  console.log(mykey, secretkey)
  const [imageUris, addImageUris] = useState([])
  const [allImages, createImageComponents] = useState([])
  const [suggestions, setSuggestions] = useState(Data().suggestions)
  const [resultsCards, setResultsCards] = useState("")
  const allResultsCards = makeArray(suggestions)
  
  const Stack = createNativeStackNavigator();
  
  const getView = (uri) => {
    createImageComponents([...allImages, <PlantImage uri={uri}/>])
  }
  const handleChange = (uri) => {
    addImageUris(imageUris => [...imageUris, uri])
    getView(uri)
  }

  const handleSubmit = (uri) => {
    const data = {
        api_key: mykey,
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
            "Api-Key": mykey,
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

  function HomeScreen({ navigation }) {
    return(
        <View style={styles.container}>
          <Dashboard handleChange={handleChange} allImages={allImages}/>
          <StatusBar style="auto" />
          <Button title="Go to Response"
          onPress={() => {
            // handleSubmit(imageUris)
            navigation.navigate("responseScreen")
            
          }}
          />
        </View>
    )
  }
  
  function ResponseScreen() {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView style={styles.scrollView}>
          {allResultsCards}
        </ScrollView>
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="responseScreen" component={ResponseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
  scrollView: {
    maxHeight: 500,
  },
})

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