import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appbar}>
          <View><Text style={styles.appbarTitle}>MEMOT</Text></View>
        </View>
        <View style={styles.MemoList}>
          <View style={styles.MemoListItem}>
            <Text style={styles.MemoTitle}>
              contains1
            </Text>
            <Text style={styles.MemoDate}>
              2018/01/02
            </Text>
          </View>
          <View style={styles.MemoListItem}>
            <Text style={styles.MemoTitle}>
              contains2
            </Text>
            <Text style={styles.MemoDate}>
              2018/01/02
            </Text>
          </View>
          <View style={styles.MemoListItem}>
            <Text style={styles.MemoTitle}>
              contains3
            </Text>
            <Text style={styles.MemoDate}>
              2018/01/02
            </Text>
          </View>
          <View style={styles.MemoListItem}>
            <Text style={styles.MemoTitle}>
              contains4
            </Text>
            <Text style={styles.MemoDate}>
              2018/01/02
            </Text>


          </View>
          <View style={styles.MemoaddButton}>
            <Text style={styles.Buttonstyle}>+</Text>
          </View>


        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDedef',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 110
    ,
  },
  appbar: {
    position: 'absolute',
    top: 30,
    height: 80,
    left: 0,
    right: 0,
    paddingTop: 0,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    zIndex: 10,
  },
  appbarTitle: {
    color: '#e5e5e5',
    fontSize: 30,
  },
  MemoList: {

    width: '100%',
    flex: 1,
  },
  MemoListItem: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  MemoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  MemoDate: {
    fontSize: 10,
    color: '#a2a2a2',
  },
  MemoaddButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    zIndex: 10,

  },
  Buttonstyle: {
    fontSize: 30,
    lineHeight: 30,
  },
});
