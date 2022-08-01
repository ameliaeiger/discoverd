import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { Button } from "react-native-paper"
import Dashboard from "./Views/Dashboard";
import Welcome from './Views/Welcome';
import Results from './components/Results';
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResponsePage from './Views/ResponsePage'
import PickImage from "./components/PickImage/PickImage"
import TakePicture from "./components/TakePicture/TakePicture"
import PlantImage from './components/ImageDisplay/PlantImage'
import HeaderLogo from './components/Header'
import { useFonts } from "expo-font"



export default function App() {
  const [imageUris, addImageUris] = useState([])
  const [allImages, createImageComponents] = useState([])
  const [apiKey, setApiKey] = useState('')

  const windowDimensions = Dimensions. get('window')
  const Stack = createNativeStackNavigator();

  const handleChange = (stringInfo, uri) => {
    addImageUris(imageUris => [...imageUris, stringInfo])
    getView(uri)
  }

  // NEW
  const deleteImage = (uri) => {
  

  }

  useEffect(() => {
    console.log("change triggered", allImages.length)

  },[allImages])

  // END NEW


  const getView = (uri) => {
    createImageComponents([...allImages, <PlantImage key={uri} uri={uri} deleteImage={deleteImage}/>])
  }

  function WelcomeScreen({ navigation }) {
    return (
        <Welcome
          apiKey = {apiKey}
          setApiKey = {setApiKey}
          navigation={navigation}
          dimensions={windowDimensions} />
)}

  function HomeScreen({ navigation }) {
    return(
        <View style={{
          backgroundColor: '#A7D9A3',
          height: windowDimensions.height,
          alignContent: "stretch",
        }}>
          <Dashboard handleChange={handleChange} apiKey={apiKey} allImages={allImages} navigation={navigation} images={imageUris} dimensions={windowDimensions}/>
          <StatusBar style="auto" />
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
        <Stack.Screen
          name="Welcome"
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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Results" component={ResponsePage} />
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
