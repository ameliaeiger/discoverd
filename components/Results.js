import React, {useState} from 'react'
import { StyleSheet, Image, TouchableOpacity, Linking } from 'react-native'
import {
  Button,
  Paragraph,
  Card,
} from 'react-native-paper'

export default function Results({data}) {
  const [plant, setPlant] = useState(data.plant_name)
  const [plantDetails, setPlantDetails] = useState(data.plant_details)
  const [commonName, setCommonName] = useState(plantDetails.common_names)
  return(
        <Card testID='Plant-Card' accessibilityLabel='Plant Card Info' style={styles.container}>
            <Card.Title testID="Plant-Name"
            title={commonName}
            subtitle={plant} />
            <Card.Content>
            <Image
              testID="Plant-Image"
              accessibilityLabel='Plant Image'
              style={styles.image}
              resizeMode="contain"
              source={{
              uri: plantDetails?.wiki_image?.value || "https://demofree.sirv.com/nope-not-here.jpg"
              }}
            />
            <Paragraph
                testID="Plant-Details"
                accessibilityLabel="Plant Details"
                style={styles.paragraph}>
                {plantDetails?.wiki_description?.value}
            </Paragraph>
            <TouchableOpacity>
            <Button
              testID="Plant-URL"
              accessibilityLabel="button to more plant information"
              labelStyle={{color:"white"}}
              style={styles.button}
              onPress={() => Linking.openURL(plantDetails?.url)}>
                Find out more!
            </Button>
          </TouchableOpacity>
        </Card.Content>
      </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignContent: "center",
    margin: 5,
    backgroundColor: '#ecf0f1',
    padding: 6,
    minHeight:200,
    backgroundColor:"#D6E6D6",
  },
  paragraph: {
    fontWeight: 'bold',
    height: 100,
  },
  image: {
    flex:1,
    minHeight: 300,
    minWidth: 300,
    resizeMode:"contain",
    alignSelf:"center",
    },
  button: {
    backgroundColor: "#147d00",
    minHeight:50,
    justifyContent:"center"
  },
})