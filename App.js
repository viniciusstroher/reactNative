// adb shell input keyevent 82
import React from 'react';
import { StyleSheet, Text, View,Modal,Button  } from 'react-native';
import MapVini from './MapVini.js';
import { MapView } from 'expo';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalVisible:true};
    //BINDAR
    this.fechaModal = this.fechaModal.bind(this)
    this.abrirModal = this.abrirModal.bind(this)
  }

  fechaModal() {
    this.setState({ isModalVisible: false})
  }

  abrirModal() {
    this.setState({ isModalVisible: true})
  }

  handleonRequestClose() {
    e.preventDefault()
  }

  render() {
    //let visivel = String(this.state.isModalVisible);
    return (
     
      <View style={styles.container}>
        
        <Text>Modal: {this.state.isModalVisible.toString()}</Text>
        
        <Button title="Abrir" onPress={this.abrirModal}  />
        
        <Modal visible={this.state.isModalVisible} onRequestClose={this.handleonRequestClose} animationType={'slide'}>
          <Text>Estado: {this.state.isModalVisible.toString()}</Text>
          <Button title="Fechar" onPress={this.fechaModal}  />
           <MapView
            style={{ flex: 1, height:'40%' }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </Modal>
      
      </View>
      

    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:'20%'
  },
});
