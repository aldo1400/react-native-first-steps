import React, { Component } from 'react'
import { Text, View ,Button,StyleSheet} from 'react-native'

export default class Final extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Aumentar" onPress={this.props.sumar} />
        <Button title="Restar" onPress={this.props.restar} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#006400',
        justifyContent:'center',
            alignItems:'center',
          },
})
