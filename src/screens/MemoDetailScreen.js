import React from 'react';
import {StyleSheet, Text,View} from 'react-native';
import AddButton from '../elements/AddButton.js';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.Memohedder}>
        <View style={styles.Memohedder2}>
            <Text style={styles.memoHedderStyle}>講座のアイデア</Text>
            <Text style={styles.memoHedderDate}>２０１９・０２.１０</Text>
        </View>
        </View>

        <View style={styles.memoContents}>
          <Text style={styles.memoContentsStyle}>
          これからのイメージ戦略について
          これは本文です。
          マークダウンでもかけます。

          </Text>
        </View>
        <AddButton style={styles.pencil}>+</AddButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: '100%',
  },
  Memohedder: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',

  },
  Memohedder2:{
       padding: 20,
  },
  memoHedderStyle: {
   fontSize: 30,
   fontWeight: 'bold',
   color: '#DDD',

  },
  memoHedderDate:{
    fontSize: 16,
    color: '#fff',

  },
  memoContents:{

      paddingTop: 30,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: '#ded',
      flex: 1,
    },
    memoContentsStyle:{
      fontSize: 18,
    },
    pencil:{
      top: 75,


    },
});


export default MemoDetailScreen;
