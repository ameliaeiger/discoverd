import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import Logo from "../assets/Logo.png"

export default function Loading() {


  return(
    <View>
      <Image style={{ width: 190, height: 50}}
      source={Logo}
      />
      <ActivityIndicator animating={true} size="large" color={'green'} />
    </View>
  )
}
