import { StatusBar } from 'expo-status-bar'
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import {API_KEY} from "../API_KEY.js"

//Libraries
import * as ImagePicker from 'expo-image-picker'
import { Button } from 'react-native-paper'
import PickImage from "../components/PickImage/PickImage"
import TakePicture from "../components/TakePicture/TakePicture"
import PlantImage from '../components/ImageDisplay/PlantImage'

import Results from "../components/Results"
import Data from "./data.js"


export default function Dashboard({ handleChange, allImages }) {
  return (
      <View style={styles.view}>
            <View style={styles.container}>
            <ScrollView >
              {allImages}
            </ScrollView>
              <View style={styles.buttonContainer}>
                <PickImage handleChange={handleChange}/>
                <TakePicture handleChange={handleChange}/>
              </View>
            </View>
      </View>
  )
}

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

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: 500,
  },
  container: {
    flexDirection: "column",
    backgroundColor: '#A7D9A3',
    justifyContent: 'center',
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 1,
  },
  neilsButton: {
    flexDirection: "row",
    elevation: 5,
    height: 75,
    width: 200,
    borderRadius: 5,
    color: '#8C8C8C',
    backgroundColor: '#E4E4E4',
    margin: 5,
    marginBottom: 1,
  },
  button: {
    color: "#fff",
    backgroundColor: "#2EC17E",
    alignItems: "center",
    justifyContent: "center",
  }
})