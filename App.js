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
import ResponsePage from './Views/ResponsePage';
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


  const Stack = createNativeStackNavigator();

  const getView = (uri) => {
    createImageComponents([...allImages, <PlantImage key={uri} uri={uri}/>])
  }
  const handleChange = (stringInfo, uri) => {
    addImageUris(imageUris => [...imageUris, stringInfo])
    getView(uri)
  }

  function WelcomeScreen({ navigation }) {
    return (
        <Welcome navigation={navigation} />
)}

  function HomeScreen({ navigation }) {
    return(
        <View style={styles.container}>
          <Dashboard handleChange={handleChange} allImages={allImages}/>
          <StatusBar style="auto" />
          <Button title="Go to Response"
          onPress={() => {
            navigation.navigate("responsePage", {
                uris:imageUris,
              }
            )

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
        <Stack.Screen name="responsePage" component={ResponsePage} />
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
