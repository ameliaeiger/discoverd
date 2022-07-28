import React from 'react'
import { StyleSheet, SwitchBase, Text, View, TouchableOpacity, Switch } from 'react-native'
import Welcome from "./Views/Welcome"
import Dashboard from "./Views/Dashboard"
import { Routes, Route, NativeRouter, Link } from "react-router-native"

export default function App() {
  return (
    <>
    <NativeRouter>
      <Routes>
        <Route exact path="/" element={<Welcome />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
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
