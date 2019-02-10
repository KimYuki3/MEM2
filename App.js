import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoList from './src/components/MemoList.js'
import AppBar from './src/components/AppBar.js'
import AddButton from './src/elements/AddButton.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <AppBar/>
          <MemoList/>
          <AddButton>++</AddButton>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDedef',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 110
    ,
  },


});
