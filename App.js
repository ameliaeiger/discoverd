import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dashboard from "./Views/Dashboard";


export default function App() {
  return (
      <View style={styles.container}>
        <Dashboard />
        <StatusBar style="auto" />
      </View>
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
