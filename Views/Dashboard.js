import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//Libraries
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native-paper';
import PickImage from "../components/PickImage/PickImage";
import TakePicture from "../components/TakePicture/TakePicture";
import PlantImage from '../components/ImageDisplay/PlantImage'
import { Base64 } from 'base64-string'


export default function Dashboard() {

  const [imageUris, addImageUris] = useState([]);
  const [allImages, createImageComponents] = useState([]);

  const getView = (uri) => {
    createImageComponents([...allImages, <PlantImage uri={uri}/>])
  }
  const handleChange = (uri) => {
    addImageUris(imageUris => [...imageUris, uri])
    getView(uri)
  }

  const handleSubmit = (uri) => {
    const data = {
        api_key: 'NklRmoWXEJSh0KJwF8SHOJYEwpX5FnSZyr7n5bOJ5nrwkpEHKz',
        images: [uri[0]],
        plant_language: 'en',
            plant_details: ['common_names',
                            'url',
                            'name_authority',
                            'wiki_description',
                            'taxonomy',
                            'synonyms'],
      }

      fetch('https://api.plant.id/v2/identify', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
            "Api-Key": 'NklRmoWXEJSh0KJwF8SHOJYEwpX5FnSZyr7n5bOJ5nrwkpEHKz',
         },
         body: JSON.stringify(data),
       })
       .then(response => response.json())
       .then(result => {
         console.log('Success:', result);
       })
       .catch((error) => {
         console.error('Error:', error);
       });
  }

  return (
      <View>
        <Text>Dashboard</Text>
            {allImages}
            <View style={styles.container}>
              <PickImage handleChange={handleChange}/>
              <TakePicture handleChange={handleChange}/>
              <Button onPress={() => handleSubmit(imageUris)} title="Submit"/>
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
