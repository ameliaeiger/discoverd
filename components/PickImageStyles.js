import { StyleSheet} from 'react-native'
import React from 'react'

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#A7D9A3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: .08,
    padding: 40,
    borderRadius: 5,
    color: '#8C8C8C',
    backgroundColor: '#E4E4E4',
    alignItems: "center",
    justifyContent: "center",
  },
  thumbnail: {
    height: 200,
    width: 200,
    resizeMode: 'contain'
  }
});
