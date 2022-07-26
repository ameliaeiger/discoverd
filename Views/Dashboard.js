import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//Libraries
import PickImage from "../components/PickImage";

export default function Dashboard() {
  return (
      <View>
        <Text>Dashboard</Text>
            <View style={styles.container}>
              <PickImage />
            </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: "#fff",
    backgroundColor: "#2EC17E",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    width: 150,
  }
});