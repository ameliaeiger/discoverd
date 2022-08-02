import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A7D9A3',
    justifyContent: 'flex-end',
  },
  button: {
    elevation: 5,
    // height: 75,
    width: 200,
    borderRadius: 5,
    color: '#8C8C8C',
    backgroundColor: '#E4E4E4',
    margin: 5,
    marginBottom: 1,
    justifyContent: "center",
  },
  thumbnail: {
    height: 300,
    width: 250,
    padding: 0,
    margin: 5,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "black",
    resizeMode: 'cover'
  }
})