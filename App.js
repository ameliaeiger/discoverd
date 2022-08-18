//IMPORTS
import { StatusBar } from 'expo-status-bar'
import React, {useState} from 'react'
import { View, Dimensions } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//COMPONENTS
import Dashboard from "./Views/Dashboard"
import Welcome from './Views/Welcome'
import ResponsePage from './Views/ResponsePage'
import HeaderLogo from './components/Header'
import {API_KEY} from '@env'


const App = () => {
  const [imageBaseStrings, setImageBaseStrings] = useState([])
  const [imageUris, setImageUris] = useState([])
  const [apiKey, setApiKey] = useState('')
  const windowDimensions = Dimensions. get('window')
  const Stack = createNativeStackNavigator()

  const handleChange = (baseString, uri) => {
    setImageBaseStrings([...imageBaseStrings, baseString])
    setImageUris([...imageUris, uri])
  }

  const WelcomeScreen = ({ navigation }) => {
    return (
        <Welcome
          navigation={navigation}
          dimensions={windowDimensions} />
    )
  }

  const HomeScreen = ({ navigation }) => {
    return(
        <View style={{
          backgroundColor:'#D6E6D6',
          height: windowDimensions.height,
          alignContent: "stretch",
        }}>

          <Dashboard handleChange={handleChange} apiKey={apiKey} imageUris={imageUris} navigation={navigation} imageBaseStrings={imageBaseStrings} dimensions={windowDimensions}/>

          <StatusBar style="auto" />
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
        <Stack.Screen 
          name="Results" 
          component={ResponsePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App