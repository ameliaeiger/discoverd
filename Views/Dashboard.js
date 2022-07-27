import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//Libraries
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native-paper';
import PickImage from "../components/PickImage/PickImage";
import TakePicture from "../components/TakePicture/TakePicture";


export default function Dashboard() {

  const [imageUris, addImageUris] = useState([]);

  const handleChange = (uri) => {
    console.log('uri in handle change',uri)
    addImageUris(imageUris => [...imageUris, uri])
  }

  return (
      <View>
        <Text>Dashboard</Text>
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
