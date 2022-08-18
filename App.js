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
import {API_KEY} from '@env'


export default function App() {
  const [imageUris, addImageUris] = useState([])
  const [allImages, setAllImages] = useState([])

  const windowDimensions = Dimensions. get('window')
  const Stack = createNativeStackNavigator();

  const handleChange = (stringInfo, uri) => {
    addImageUris(imageUris => [...imageUris, stringInfo])
    getView(uri)
  }

  const getView = (uri) => {
    setAllImages([...allImages, <PlantImage key={Date.now()} uri={uri}/>])
  }

  function WelcomeScreen({ navigation }) {

    return (
        <Welcome
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
          <Dashboard handleChange={handleChange} apiKey={API_KEY} allImages={allImages} navigation={navigation} images={imageUris} dimensions={windowDimensions}/>
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
