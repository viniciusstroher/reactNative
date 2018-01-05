// adb shell input keyevent 82
import React from 'react';
import { StyleSheet, Text, View,Modal,Button,Platform  } from 'react-native';
import MapVini from './MapVini.js';
import { MapView,Constants, Location, Permissions } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalVisible:true, 
                  location: null,
                  errorMessage: null};
    //BINDAR
    this.fechaModal = this.fechaModal.bind(this)
    this.abrirModal = this.abrirModal.bind(this)
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

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
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

   let mapa =  <MapView
            style={{ flex: 1, height:'40%' }}
            initialRegion={{
              latitude: this.state.location.coords.latitude,
              longitude: this.state.location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
              <MapView.Marker
                coordinate= {{latitude: this.state.location.coords.latitude,
                              longitude: this.state.location.coords.longitude
                            }}
                title="Minha localização"
                description="Estou aqui"
              />
          </MapView>;

    return (
     
      <View style={styles.container}>
        <Text> Posicao: {text}</Text>
        <Text>Modal: {this.state.isModalVisible.toString()}</Text>
        
        <Button title="Abrir" onPress={this.abrirModal}  />
        
        <Modal visible={this.state.isModalVisible} onRequestClose={this.handleonRequestClose} animationType={'slide'}>
          <Text>Estado: {this.state.isModalVisible.toString()}</Text>
          <Button title="Fechar" onPress={this.fechaModal}  />
          {this.state.location.coords != null ? mapa : ''}
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
