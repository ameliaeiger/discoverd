import React, {useState, useEffect} from 'react'
import { Alert, Text, View, StyleSheet, Button, TextInput, ScrollView, Image, TouchableOpacity, Linking } from 'react-native'
import {
  Avatar,
  Paragraph,
  Card,
  useTheme,
} from 'react-native-paper'

export default function Results({data}) {
  const [plant, setPlant] = useState(data.plant_name)
  const [plantDetails, setPlantDetails] = useState(data.plant_details)
  const [commonName, setCommonName] = useState(plantDetails.common_names)

  return(
        <Card style={styles.container}>
            <Card.Title 
            title={commonName}
            subtitle={plant}/>
            <Card.Content>
            <Image
                style={styles.image}
                source={{
                uri: plantDetails.wiki_image.value
                }}
            />
            <Paragraph
                style={styles.paragraph}>
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
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: "center",
    margin: 10,
    backgroundColor: '#ecf0f1',
    padding: 10,
    height: 300,
    minHeight: 400,
  },
  paragraph: {
    // flex: 2,
    // margin: 24,
    // fontSize: 18,
    fontWeight: 'bold',
    height: 100,
    // minWidth: 50,
  },
  image: {
    maxWidth: 200,
    maxHeight: 300,
    minHeight: 150,
    minWidth: 50,
    }
})