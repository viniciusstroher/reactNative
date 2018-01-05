import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapVini } from './MapVini.js';

export default class App extends React.Component {
  render() {
    return (
     
      <View style={styles.container}>
        <Text>oi</Text>
        
      </View>,
      <MapVini/>

    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:'40%'
  },
});
