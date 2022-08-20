import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

//Libraries
import Results from "../components/Results"
import Data from "./data.js"
import Data2 from './data2.js'
import Loading from '../components/Loading.js'

export default function ResponsePage({ route }) {
  const { imageBaseStrings } = route.params
  const { apiKey } = route.params;
  const [suggestions, setSuggestions] = useState(Data().suggestions)
  const [resultsCards, setResultsCards] = useState([])
  const [errMessage, setErr] = useState(null)
  const [loading, setLoading] = useState(true)

  const handleSubmit = () => {
    const data = {
        api_key: apiKey,
        images: [imageBaseStrings[0]],
        plant_language: 'en',
            plant_details: ['common_names',
                            'url',
                            'name_authority',
                            'wiki_description',
                            'taxonomy',
                            'synonyms',
                            'wiki_image'],
      }
      fetch('https://api.plant.id/v2/identify', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
            "Api-Key": apiKey,
         },
         body: JSON.stringify(data),
       })
       .then((response) => {
        if (!response.ok) {
          throw new Error(response.status + " " + response.statusText)
        } else {
          return response.json()
        }
      })
       .then(result => {
         setSuggestions(result.suggestions)
         setLoading(false)
       })
       .catch((error) => {
         setErr(`${error}`)
       })
  }

  const createResults = () => {
    if(!errMessage) {
      const resultsCardsArr = suggestions.map((suggestion) => {
            return <Results key={suggestion.id} data={suggestion}/>
      })
      setResultsCards(resultsCardsArr)
    }
  }

  useEffect(() => {
    if(!errMessage){
      handleSubmit(imageBaseStrings)
        setTimeout(() => {
          setSuggestions(Data2().suggestions)
        }, 1000)
    }
  },[])

  useEffect(() => {
    createResults()
  }, [suggestions, errMessage])

  if(errMessage) {
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{errMessage}</Text>
      <Text>We are incredibly sorry but something went wrong.</Text>
      <Text>Please return to the previous page and try again.</Text>
    </View>
    )
  }else {
    return (
        <ScrollView style={styles.scroll}>
        {loading ? <Loading /> : {resultsCards}}
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
