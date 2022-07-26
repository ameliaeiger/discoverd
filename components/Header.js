import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import * as Haptics from 'expo-haptics'


export default function Header() {


    return (
        <View
            style={styles.container}>
            <TouchableOpacity>
                <Text>HOME</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>SEARCH</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>POTD</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>INFO</Text>
            </TouchableOpacity>    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   width: "100%",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: "#e4e4e4",
      alignItems: "center",
      justifyContent: "center",
      borderColor: "#BFBFBF",
      borderWidth: 1,
      elevation: 5,
      marginTop: 20,
      width: 210,
      height: 70,
    },
    thumbnail: {
      height: 200,
      width: 200,
    }
  });