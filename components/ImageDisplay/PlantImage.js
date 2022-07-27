import React, {useState, useEffect} from 'react'
import { Text, View, Image } from 'react-native'
import {styles} from '../PickImage/PickImageStyles'

const ImageDisplay = ({uri}) => {
  return(
          <Image
            style={styles.thumbnail}
            source={{uri:uri}}
        />
  )
}

export default ImageDisplay
