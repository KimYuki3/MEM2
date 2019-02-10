import React from 'react';
import {StyleSheet, View} from 'react-native';

import MemoList from '../components/MemoList.js'
import AddButton from '../elements/AddButton.js'

class MemoListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container1}>
        <MemoList/>
        <AddButton>++</AddButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    width: '100%',
  },


});


export default MemoListScreen;
