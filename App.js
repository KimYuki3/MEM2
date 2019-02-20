import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SighnUpScreen from './src/screens/SighnUpScreen.js';
import AppBar from './src/components/AppBar.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppBar />
        <SighnUpScreen />

      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FDedef',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 110
    ,
  },


});
