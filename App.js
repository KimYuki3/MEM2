import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoListScreen from './src/screens/MemoListScreen.js'
import AppBar from './src/components/AppBar.js'
import MemoDetailScreen from './src/screens/MemoDetailScreen.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppBar />
        <MemoDetailScreen />

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
