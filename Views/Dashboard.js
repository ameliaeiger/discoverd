import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//Libraries
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native-paper';
import PickImage from "../components/PickImage";


export default function Dashboard() {

  // Image picker init
  let openImagePickerAsync = async () => {
    console.log("u been clicked n picked bro")
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log("u got pickered", pickerResult);
  }
  return (
      <View>
        <Text>Dashboard</Text>
            <View style={styles.container}>
              <PickImage />
            </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 4,
    color: "#fff",
    backgroundColor: "#2EC17E",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    width: 150,
  }
});