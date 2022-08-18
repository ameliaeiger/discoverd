import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

//STYLES
import {styles} from '../PickImage/PickImageStyles'

const PlantImage = ({id, uri}) => {
  return(
    <TouchableOpacity 
        key={id}>
          <Image
            style={styles.thumbnail}
            source={{uri:uri}} />
    </TouchableOpacity>
  )
}

export default PlantImage