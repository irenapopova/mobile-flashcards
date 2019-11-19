import React from 'react';
import { StyleSheet, Text, View,Button, Alert } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>HALLOOOO LITTLE RABBIT!</Text>
      <Button
      title="Press me"
      onPress={() => Alert.alert('Simple Button pressed')}
    />

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
});
