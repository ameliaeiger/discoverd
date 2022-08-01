import React, {useState, useEffect} from 'react'
import { Text, View, Image, Button, TouchableOpacity } from 'react-native'
import {styles} from '../PickImage/PickImageStyles'

const ImageDisplay = ({uri, deleteImage}) => {


  return(
    <TouchableOpacity 
        onPress={() => deleteImage(uri)}>
          <Image
            key={uri}
            style={styles.thumbnail}
            source={{uri:uri}}
        />
    </TouchableOpacity>
  )
}

export default ImageDisplay