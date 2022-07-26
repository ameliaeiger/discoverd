import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, SwitchBase, Text, View, TouchableOpacity } from 'react-native'
// import { AppRegistry } from 'react-native'
// import { Provider as PaperProvider } from 'react-native-paper'
import Welcome from "./Views/Welcome"
import Dashboard from "./Views/Dashboard"
import Header from "./components/Header"

//Libraries
import * as ImagePicker from 'expo-image-picker'
import { Routes, Route, Router, PathRouteProps, NativeRouter, Navigate } from 'react-router-native'
import { Link } from 'react-router-native'


export default function App() {


  return (
    <>
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
        <na
          src="/dashboard"
          Welcome
          /> 
    </NativeRouter>
    
    </>
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