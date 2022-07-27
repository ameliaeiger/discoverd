import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//Libraries
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native-paper';
import PickImage from "../components/PickImage/PickImage";
import TakePicture from "../components/TakePicture/TakePicture";
import PlantImage from '../components/ImageDisplay/PlantImage'


export default function Dashboard() {

  const [imageUris, addImageUris] = useState([]);
  const [allImages, createImageComponents] = useState([]);

  const getView = () => {
    imageUris.forEach((image) => {
      createImageComponents([...allImages, <PlantImage uri={image}/>])
    })
  }
  const handleChange = (uri) => {
    addImageUris(imageUris => [...imageUris, uri])
    getView()
  }


  return (
      <View>
        <Text>Dashboard</Text>
            {allImages}
            <View style={styles.container}>
              <PickImage handleChange={handleChange}/>
              <TakePicture handleChange={handleChange}/>
            </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A7D9A3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: "#fff",
    backgroundColor: "#2EC17E",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    width: 150,
  }
})
