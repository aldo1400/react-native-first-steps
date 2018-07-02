import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import Inicio from './Inicio';
import Body from './Body';
import Final from './Final';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      numero:2
    }
    // this.aumentar=this.aumentar.bind(this);
  }

  aumentar=()=>{
    this.setState({
      numero:this.state.numero+1
    })
  }

  disminuir=()=>{
    this.setState({
      numero:this.state.numero-1
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <Inicio name="Calculadora" />
        <Body numero={this.state.numero}/>
        <Final sumar={this.aumentar} restar={this.disminuir} />
        {/* <View style={styles.cajaTres} >
        <Button title="Aumentar" onPress={()=>{this.aumentar();}} />
        <Button title="Restar" onPress={()=>{this.disminuir();}} />
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
 
 
  cajaTres:{
flex:1,
backgroundColor:'#006400',
  }
});
