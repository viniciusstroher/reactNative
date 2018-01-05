// adb shell input keyevent 82
import React from 'react';
import { StyleSheet, Text, View,Modal,Button  } from 'react-native';
import MapVini from './MapVini.js';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalVisible:true};
    //BINDAR
    this.fechaModal = this.fechaModal.bind(this)
    this.abrirModal = this.abrirModal.bind(this)
  }

  fechaModal() {
    this.setState({ isModalVisible: false});
  }

  abrirModal() {
    this.setState({ isModalVisible: true});
  }

  handleonRequestClose() {
    e.preventDefault();
  }

  render() {
    //let visivel = String(this.state.isModalVisible);
    return (
     
      <View style={styles.container}>
        
        <Text>Modal: {String(this.state.isModalVisible)}</Text>
        
        <Button title="Abrir" onPress={this.abrirModal}  />
        
        <Modal visible={this.state.isModalVisible} onRequestClose={this.handleonRequestClose}>
          <Text>Estado: {String(this.state.isModalVisible)}</Text>
          <Button title="Fechar" onPress={this.fechaModal}  />
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
