import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#A7D9A3',
    justifyContent: 'flex-end',
  },
  button: {
    flexDirection: "row",
    elevation: 5,
    height: 75,
    width: 200,
    borderRadius: 5,
    color: '#8C8C8C',
    backgroundColor: '#E4E4E4',
    margin: 5,
    marginBottom: 1,
  },
  thumbnail: {
    height: 200,
    width: 200,
    resizeMode: 'contain'
  }
})