import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import {styles} from '../PickImage/PickImageStyles'

const PlantImage = ({key, uri}) => {
  return(
    <TouchableOpacity 
        id={key}>
          <Image
            key={key}
            style={styles.thumbnail}
            source={{uri:uri}}
        />
    </TouchableOpacity>
  )
}

export default PlantImage