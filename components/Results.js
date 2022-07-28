import React, {useState, useEffect} from 'react';
import { Alert, Text, View, StyleSheet, Button, TextInput, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import {
  Avatar,
  Paragraph,
  Card,
  useTheme,
} from 'react-native-paper';
import Constants from 'expo-constants';



export default function Results({data}) {
  const [plant, setPlant] = useState(data.plant_name)
  const [plantDetails, setPlantDetails] = useState(data.plant_details)
  const [commonName, setCommonName] = useState(plantDetails.common_names)

  console.log(plantDetails)


  return(
    <View style={styles.container}>
    <Card>
        <Card.Title 
          title={commonName}
          subtitle={plant}/>
        <Card.Content>
          <Image
            style={styles.container}
            source={{
              uri: plantDetails.wiki_image.value
              }}
          />
          <Paragraph>
            {plantDetails.wiki_description.value}
          </Paragraph>
          <TouchableOpacity>
            <Button
              title="Find out more!"
              onPress={() => Linking.openURL(plantDetails.url)}>
            </Button>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    height: 200,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 193, height: 110, marginTop:50
    }
});