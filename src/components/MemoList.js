import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
class MemoList extends React.Component {
  render() {
    return (
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

});

export default MemoList;
