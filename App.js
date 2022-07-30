import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Button } from "react-native-paper"
import Dashboard from "./Views/Dashboard";
import Welcome from './Views/Welcome';
import Results from './components/Results';
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {API_KEY} from "./API_KEY.js"
import PickImage from "./components/PickImage/PickImage"
import TakePicture from "./components/TakePicture/TakePicture"
import PlantImage from './components/ImageDisplay/PlantImage'
// ---------------- libraries ---------------- //
// import PickImage from "../components/PickImage/PickImage"
// import TakePicture from "../components/TakePicture/TakePicture"
import Data from "./Views/data.js"
import Logo from "./assets/Logo.png"


export default function App() {
  const [imageUris, addImageUris] = useState([])
  const [allImages, createImageComponents] = useState([])
  const [suggestions, setSuggestions] = useState(Data().suggestions)
  const [resultsCards, setResultsCards] = useState("")
  const allResultsCards = makeArray(suggestions)

  const Stack = createNativeStackNavigator();

  const getView = (uri) => {
    createImageComponents([...allImages, <PlantImage uri={uri}/>])
  }
  const handleChange = (stringInfo, uri) => {
    addImageUris(imageUris => [...imageUris, stringInfo])
    getView(uri)
  }

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
       .then(response => response.json())
       .then(result => {
         setSuggestions(result.suggestions)
         console.log('Success:', result);
       })
       .catch((error) => {
         console.error('Error:', error);
       });
  }

  function WelcomeScreen({ navigation }) {
    return (
      <View>
        <Welcome navigation={navigation} />
      </View>
)}

  function HomeScreen({ navigation }) {
    return(
        <View style={styles.container}>
          <Dashboard handleChange={handleChange} allImages={allImages}/>
          <StatusBar style="auto" />
          <Button title="Go to Response"
          onPress={() => {
            handleSubmit(imageUris)
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

  function HeaderLogo() {
    return (
      <Image
        style={{ width: 190, height: 50 }}
        source={Logo}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="welcome" 
          options={{
            headerTitle:() => <HeaderLogo />,
            headerStyle: {
              backgroundColor: "#82E0AA",
            },
            headerTintColor: "white",
            headerTitleStye: {
              fontWeight: "bold"
            }
          }} 
          component={WelcomeScreen} />
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
  button: {
    backgroundColor: "#82E0AA",
    justifyContent: "center",
    height: 40,
    width: 200,
    fontSize: 30,
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
