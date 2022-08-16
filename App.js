import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import Dashboard from "./Views/Dashboard";
import Welcome from './Views/Welcome';
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResponsePage from './Views/ResponsePage'
import PlantImage from './components/ImageDisplay/PlantImage'
import HeaderLogo from './components/Header'

export default function App() {
  const [imageUris, addImageUris] = useState([])
  const [allImages, setAllImages] = useState([])
  const [apiKey, setApiKey] = useState('')

  const windowDimensions = Dimensions. get('window')
  const Stack = createNativeStackNavigator();

  const handleChange = (baseString, uri) => {
    console.log("APP 21 BASE STRING", baseString)
    console.log("APP 22 URI", uri)
    addImageUris([...imageUris, baseString])
    // console.log("IMAGE URIS (App.js 22)", imageUris)
    getView(uri)
  }

  const getView = (uri) => {
    // console.log("ALL IMAGES (App.js 27)", allImages)
    setAllImages([...allImages, <PlantImage key={Date.now()} uri={uri}/>])
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
          backgroundColor:'#D6E6D6',
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
              backgroundColor: "#D6E6D6",
            },
            headerTintColor: "white",
            headerTitleStye: {
              fontWeight: "bold"
            }
          }}
          component={WelcomeScreen} />
        <Stack.Screen 
        name="Home"
        options={{
          headerStyle: {
            backgroundColor:"#D6E6D6"
          }
        }}
        component={HomeScreen} />
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
    backgroundColor: "#147d00",
    justifyContent: "center",
    height: 40,
    width: 200,
    fontSize: 30,
  },
})
