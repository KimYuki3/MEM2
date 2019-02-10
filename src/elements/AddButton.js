import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
class AddButton extends React.Component {
  render() {
    const {style, color } = this.props;
    let bgColor = '#de4';
    let textColor = '#fff';
    if (color === 'white'){
      bgColor = '#fff';
      textColor = '#de4';
    };
    return (
      <View style={[styles.MemoaddButton,style,{backgroundColor:bgColor}]}>
        <Text style={[styles.Buttonstyle,{color:textColor}]}>
          {this.props.children}
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({



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
export default AddButton;
